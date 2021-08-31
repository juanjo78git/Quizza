import { isLoweredSymbol } from '@angular/compiler';
import { BookPage } from '../models/model-book';

export const BOOKPAGE: BookPage =
  {
    id: 1,
    bookId: 1,
    type: 'choose',
    text: 'Mock de Página',
    question: 'Pregunta 1',
    answers: [
      {
        id: 1,
        answer: 'Respuesta 1',
        goPage: 2
      },
      {
        id: 2,
        answer: 'Respuesta 1',
        goPage: 3
      },
      {
        id: 3,
        answer: 'Respuesta 3',
        goPage: 4
      },
      {
        id: 4,
        answer: 'Respuesta 4',
        goPage: 5
      }
    ]
  }
  ;
