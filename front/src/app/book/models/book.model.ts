export interface Answer {
  id: number;
  bookPageId: number;
  bookId: number;
  answer: string;
  goPage: number;
  stats: number;
  statsPc?: number;
}
export interface BookPage {
  id: number;
  bookId: number;
  type: string;
  text: string;
  question?: string;
  answers: Answer[];
}

export interface Book {
  id: number;
  title: string;
  version: string;
  description: string;
  author: string;
  pages: BookPage[];
}
