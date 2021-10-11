import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Book, BookPage, Answer, BookmarkHistory } from '../models/book.model';
import { UserService } from 'src/app/common/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkHistoryService {

  private bookmarkHistory : BookmarkHistory[] = [];

  constructor(private book: BookService, private user: UserService) { }

  getBookmarkHistory(): BookmarkHistory[] {
    return this.bookmarkHistory;
  }

  addBookmarkHistory(answer: Answer) {
    let bookmarkHistory : BookmarkHistory;
    bookmarkHistory = {
      id: this.getNewId(),
      userId: this.user.getId(),
      bookId: answer.bookId,
      bookPageId: answer.bookPageId,
      AnswerId: answer.id,
    }
    this.bookmarkHistory.push(bookmarkHistory);

    }
    getNewId(): number {
      let max = 0;
      this.bookmarkHistory.forEach(data => {
        if (data.id > max) {
          max = data.id;
        }
      });
      return max+1;
    }
    existsAnwer(answer: Answer): boolean {
      let exists: boolean = false;
      this.bookmarkHistory.forEach(data => {
        if (data.bookId == answer.bookId
            && data.bookPageId == answer.bookPageId
            && (data.AnswerId == undefined
                || data.AnswerId == answer.id
               )
          ) {
            exists = true;
        }
      });
      return exists;
    }
    existsOption(bookId: number, bookPageId: number, answerId?: number): boolean {
      let exists: boolean = false;
      this.bookmarkHistory.forEach(data => {
        if (data.bookId == bookId
            && data.bookPageId == bookPageId
            && (data.AnswerId == undefined
                || answerId == undefined
                || data.AnswerId == answerId
               )
          ) {
            exists = true;
        }
      });
      return exists;
    }
}
