import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Book, BookPage, Answer, BookmarkHistory } from '../models/book.model';
import { UserService } from 'src/app/common/services/user.service';
import { BookcaseService } from '../services/bookcase.service';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkHistoryService {
  private bookmarkHistory: BookmarkHistory[] = [];

  constructor(
    private book: BookService,
    private user: UserService,
    private bookcase: BookcaseService,
    private localStorageService: LocalStorageService
  ) {
    if (!this.loadBookmarkHistory()) {
      this.bookmarkHistory = [];
    }
  }

  getBookmarkHistory(bookId?: number): BookmarkHistory[] {
    let bookmarkFiltered: BookmarkHistory[];
    if (bookId != undefined) {
      bookmarkFiltered = this.bookmarkHistory.filter((data) => {
        return data.bookId == bookId;
      });
    } else {
      bookmarkFiltered = this.bookmarkHistory;
    }
    bookmarkFiltered = bookmarkFiltered.sort((a, b) => {
      if (a.id < b.id) return -1;
      else if (a.id > b.id) return 1;
      return 0;
    });
    return bookmarkFiltered;
  }

  setBookmarkHistory(bookmarkHistory?: BookmarkHistory[]) {
    if (bookmarkHistory == undefined) {
      this.bookmarkHistory = [];
    } else {
      this.bookmarkHistory = bookmarkHistory;
    }
    this.saveBookmarkHistory();
  }

  cleanBookmarkHistory(bookId?: number) {
    if (bookId == undefined) {
      this.bookmarkHistory = [];
    } else {
      this.bookmarkHistory = this.bookmarkHistory.filter((data) => {
        return (
          data.bookId != bookId ||
          !(data.userId == this.user.getId() || 0 == +data.userId)
        );
      });
    }
    this.saveBookmarkHistory();
  }

  addBookmarkHistory(answer: Answer) {
    let bookmarkHistory: BookmarkHistory;
    bookmarkHistory = {
      id: this.getNewId(),
      userId: this.user.getId(),
      bookId: answer.bookId,
      bookPageId: answer.bookPageId,
      AnswerId: answer.id,
    };
    this.bookmarkHistory.push(bookmarkHistory);
    this.saveBookmarkHistory();
  }
  getNewId(): number {
    let max = 0;
    this.bookmarkHistory.forEach((data) => {
      if (data.id > max) {
        max = data.id;
      }
    });
    return max + 1;
  }
  existsAnwer(answer: Answer): boolean {
    let exists: boolean = false;
    this.bookmarkHistory.forEach((data) => {
      if (
        (data.userId == this.user.getId() || 0 == +data.userId) &&
        data.bookId == answer.bookId &&
        data.bookPageId == answer.bookPageId &&
        (data.AnswerId == undefined || data.AnswerId == answer.id)
      ) {
        exists = true;
      }
    });
    return exists;
  }
  existsOption(
    bookId: number,
    bookPageIdVisited: number,
    answerIdVisited?: number
  ): boolean {
    let exists: boolean = false;
    this.bookmarkHistory.forEach((data) => {
      if (
        (data.userId == this.user.getId() || 0 == +data.userId) &&
        data.bookId == bookId &&
        data.bookPageId == bookPageIdVisited &&
        (data.AnswerId == undefined ||
          answerIdVisited == undefined ||
          data.AnswerId == answerIdVisited)
      ) {
        exists = true;
      }
    });
    return exists;
  }

  lastPage(bookId: number): number {
    let bookmarkFiltered: BookmarkHistory[];
    bookmarkFiltered = this.bookmarkHistory
      .filter((data) => {
        return (
          data.bookId == bookId &&
          (data.userId == this.user.getId() || 0 == +data.userId)
        );
      })
      .sort((a, b) => {
        if (a.id < b.id) return -1;
        else if (a.id > b.id) return 1;
        return 0;
      });
    if (bookmarkFiltered.length >= 1) {
      let answer = this.getAnswer(
        bookId,
        bookmarkFiltered[bookmarkFiltered.length - 1].bookPageId,
        bookmarkFiltered[bookmarkFiltered.length - 1].AnswerId
      );
      if (answer == undefined) {
        return bookmarkFiltered[bookmarkFiltered.length - 1].bookPageId;
      } else {
        return answer.goPage;
      }
    } else {
      return 1;
    }
  }

  getAnswer(
    bookId: number,
    bookPageId: number,
    answer: number | undefined
  ): Answer | undefined {
    let bookPage = this.bookcase.getBook(bookId).pages.find((data) => {
      return data.id == bookPageId;
    });
    let answerResult: Answer | undefined;
    if (bookPage != undefined) {
      answerResult = bookPage.answers.find((data) => {
        return data.id == answer;
      });
    } else {
      return undefined;
    }
    if (answerResult != undefined) {
      return answerResult;
    } else {
      return undefined;
    }
  }

  getBookPage(bookId: number, bookPageId: number): BookPage | undefined {
    let bookPage = this.bookcase.getBook(bookId).pages.find((data) => {
      return data.id == bookPageId;
    });
    if (bookPage != undefined) {
      return bookPage;
    } else {
      return undefined;
    }
  }

  loadBookmarkHistory(): boolean {
    let z: BookmarkHistory[] = this.localStorageService.get('bookmarkHistory');
    if (z == undefined) {
      this.bookmarkHistory = [];
      return false;
    } else {
      this.bookmarkHistory = this.localStorageService.get('bookmarkHistory');
      return true;
    }
  }
  saveBookmarkHistory() {
    this.localStorageService.set('bookmarkHistory', this.bookmarkHistory);
  }
}
