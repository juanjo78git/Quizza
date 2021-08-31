import { Identifiers } from "@angular/compiler";

export interface Answer {
  id: number;
  answer: string;
  goPage: number;
}
export interface BookPage {
  id: number;
  bookId: number;
  type: string;
  text: string;
  question: string;
  answers: Answer[];
}

export interface Book {
  id: number;
  version: string;
  description: string;
  author: string;
  pages: BookPage[];
}
