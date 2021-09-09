import { Book } from '../models/book.model';

export const BOOK: Book[] =
[ {
id: 1,
title: 'Libro 1',
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
          bookPageId: 1,
          bookId: 1,
          answer: 'Respuesta1 1_2',
          goPage: 2
        },
        {
          id: 2,
          bookPageId: 1,
          bookId: 1,
          answer: 'Respuesta1 2_3',
          goPage: 3
        },
        {
          id: 3,
          bookPageId: 1,
          bookId: 1,
          answer: 'Respuesta1 3_4',
          goPage: 4
        },
        {
          id: 4,
          bookPageId: 1,
          bookId: 1,
          answer: 'Respuesta1 4_3',
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
          bookPageId: 2,
          bookId: 1,
          answer: 'Respuesta2 1_1',
          goPage: 1
        },
        {
          id: 2,
          bookPageId: 2,
          bookId: 1,
          answer: 'Respuesta2 2_4',
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
          bookPageId: 3,
          bookId: 1,
          answer: 'Respuesta3 1_2',
          goPage: 2
        },
        {
          id: 2,
          bookPageId: 3,
          bookId: 1,
          answer: 'Respuesta3 2_1',
          goPage: 1
        },
        {
          id: 3,
          bookPageId: 3,
          bookId: 1,
          answer: 'Respuesta3 3_4',
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
          bookPageId: 4,
          bookId: 1,
          answer: 'Respuesta4 1_1',
          goPage: 1
        }
      ]
    }
  ]
 },
 {
  id: 2,
  title: 'Libro 1',
  version: '0.2.1',
  description: 'Descripción del libro 2',
  author: 'Nadie2',
  pages:   [
    {
      id: 1,
      bookId: 2,
      type: 'choose',
      text: 'Lorem.',
      question: 'Lorem ipsum?',
      answers: [
        {
          id: 1,
          bookPageId: 1,
          bookId: 2,
          answer: 'Respuesta2 1_1',
          goPage: 1
        },
        {
          id: 2,
          bookPageId: 1,
          bookId: 2,
          answer: 'Respuesta2 2_1',
          goPage: 1
        }
      ]
    }
  ]
  }
];
