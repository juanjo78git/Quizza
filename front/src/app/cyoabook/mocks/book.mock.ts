import { Book } from '../models/book.model';

export const BOOK: Book =
 {
id: 1,
version: '0.0.1',
description: 'Descripción del libro',
author: 'Nadie',
pages:   [

  {
    id: 1,
    bookId: 1,
    type: 'choose',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam at natus ad? Consequatur dolores deleniti quia, maiores dolore adipisci harum. Molestias itaque delectus deleniti officiis corporis quos amet deserunt.',
    question: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam at natus ad',
    answers: [
      {
        id: 1,
        answer: 'Respuesta 1_2',
        goPage: 2
      },
      {
        id: 2,
        answer: 'Respuesta 2_3',
        goPage: 3
      },
      {
        id: 3,
        answer: 'Respuesta 3_4',
        goPage: 4
      },
      {
        id: 4,
        answer: 'Respuesta 4_3',
        goPage: 3
      }
    ]
  },
  {
    id: 2,
    bookId: 1,
    type: 'choose',
    text: 'Bla bla bla',
    question: 'Pregunta 2',
    answers: [
      {
        id: 1,
        answer: 'Respuesta 1_1',
        goPage: 1
      },
      {
        id: 2,
        answer: 'Respuesta 2_4',
        goPage: 4
      }
    ]
  },
  {
    id: 3,
    bookId: 1,
    type: 'choose',
    text: 'Bla bla bla',
    question: 'Pregunta 3',
    answers: [
      {
        id: 1,
        answer: 'Respuesta 1_2',
        goPage: 2
      },
      {
        id: 2,
        answer: 'Respuesta 2_1',
        goPage: 1
      },
      {
        id: 3,
        answer: 'Respuesta 3_4',
        goPage: 4
      }
    ]
  },
  {
    id: 4,
    bookId: 1,
    type: 'choose',
    text: 'Bla bla bla',
    question: 'Pregunta 4',
    answers: [
      {
        id: 1,
        answer: 'Respuesta 1_1',
        goPage: 1
      }
    ]
  }
]
 };
