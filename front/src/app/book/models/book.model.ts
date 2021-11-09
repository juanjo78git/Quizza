export interface Answer {
  id: number;
  bookPageId: number;
  bookId: number;
  answer: string;
  goPage: number;
  stats: number;
  statsPc?: number;
}
export interface BookPageRedirect {
  id: number;
  bookId: number;
  bookPageId: number;
  AnswerId?: number;
  goPage: number;
}

export interface BookPage {
  id: number;
  bookId: number;
  title: string;
  type: string;
  mediaType?: string;
  mediaURL?: string;
  text: string;
  question?: string;
  answers: Answer[];
  redirect?: BookPageRedirect[];
}

export interface Book {
  id: number;
  title: string;
  version: string;
  description: string;
  author: string;
  mediaType?: string;
  mediaURL?: string;
  published: boolean;
  authorization: string;
  pages: BookPage[];
}

export interface BookmarkHistory {
  id: number;
  userId: string;
  bookId: number;
  bookPageId: number;
  AnswerId?: number;
}
