import { Identifiers } from "@angular/compiler";

export interface Answer {
  id: number;
  answer: string;
  goPage: number;
}
export interface BookPage {
  id: number;
  bookId: number;
  text: string;
  question: string;
  answers: Answer[];
}
