import { Book } from '../models/book.model';

export const BOOK: Book[] = [
  {
    id: 3,
    title: 'Empty book',
    version: '0.0.0',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, illum deserunt repellat distinctio minus recusandae necessitatibus beatae. Quis accusamus ex quisquam, dolorum fugit incidunt enim nulla minus alias autem vitae!',
    author: 'Nomen Nescio',
    mediaType: 'img',
    mediaURL: 'assets/book.svg',
    authorization: 'me',
    published: true,
    pages: [
      {
        id: 1,
        bookId: 3,
        type: 'end',
        title: 'Página 1',
        text: 'First Page',
        mediaType: 'img',
        mediaURL: 'assets/book.svg',
        answers: [
          {
            id: 1,
            bookPageId: 1,
            bookId: 3,
            answer: 'Ok',
            goPage: 1,
            stats: 100,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Libro 1',
    version: '0.0.1',
    description: 'Descripción del libro',
    author: 'Nadie',
    authorization: 'public',
    published: true,
    pages: [
      {
        id: 1,
        bookId: 1,
        type: 'choice',
        title: 'Página 1',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam at natus ad? Consequatur dolores deleniti quia, maiores dolore adipisci harum. Molestias itaque delectus deleniti officiis corporis quos amet deserunt.',
        question:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsam at natus ad',
        answers: [
          {
            id: 1,
            bookPageId: 1,
            bookId: 1,
            answer: 'Respuesta1 1_2',
            goPage: 2,
            stats: 25,
          },
          {
            id: 2,
            bookPageId: 1,
            bookId: 1,
            answer: 'Respuesta1 2_3',
            goPage: 3,
            stats: 25,
          },
          {
            id: 3,
            bookPageId: 1,
            bookId: 1,
            answer: 'Respuesta1 3_4',
            goPage: 4,
            stats: 30,
          },
          {
            id: 4,
            bookPageId: 1,
            bookId: 1,
            answer: 'Respuesta1 4_3',
            goPage: 3,
            stats: 20,
          },
        ],
        redirect: [
          {
            id: 1,
            bookId: 1,
            bookPageId: 1,
            bookPageIdVisited: 3,
            AnswerIdVisited: 1,
            goPage: 2,
          },
        ],
      },
      {
        id: 2,
        bookId: 1,
        type: 'choice',
        title: 'Página 2',
        text: 'Bla bla bla',
        question: 'Pregunta 2',
        answers: [
          {
            id: 1,
            bookPageId: 2,
            bookId: 1,
            answer: 'Respuesta2 1_1',
            goPage: 1,
            stats: 40,
          },
          {
            id: 2,
            bookPageId: 2,
            bookId: 1,
            answer: 'Respuesta2 2_4',
            goPage: 4,
            stats: 60,
          },
        ],
      },
      {
        id: 3,
        bookId: 1,
        type: 'choice',
        title: 'Página 3',
        text: 'Bla bla bla',
        question: 'Pregunta 3',
        answers: [
          {
            id: 1,
            bookPageId: 3,
            bookId: 1,
            answer:
              'Respuesta3 1_2 (Ya no pasarás por Pagina 1, te madará a la 2)',
            goPage: 2,
            stats: 33,
          },
          {
            id: 2,
            bookPageId: 3,
            bookId: 1,
            answer: 'Respuesta3 2_1',
            goPage: 1,
            stats: 33,
          },
          {
            id: 3,
            bookPageId: 3,
            bookId: 1,
            answer: 'Respuesta3 3_4',
            goPage: 4,
            stats: 34,
          },
        ],
      },
      {
        id: 4,
        bookId: 1,
        type: 'choice',
        title: 'Página 4',
        text: 'Bla bla bla',
        question: 'Pregunta 4',
        answers: [
          {
            id: 1,
            bookPageId: 4,
            bookId: 1,
            answer: 'Respuesta4 1_1',
            goPage: 1,
            stats: 100,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Libro 2',
    version: '0.2.1',
    description: 'Descripción del libro 2',
    author: 'Nadie2',
    authorization: 'public',
    published: false,
    pages: [
      {
        id: 1,
        bookId: 2,
        title: 'Página 1',
        type: 'choice',
        text: 'Lorem.',
        mediaType: 'video',
        mediaURL:
          'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        question: 'Lorem ipsum?',
        answers: [
          {
            id: 1,
            bookPageId: 1,
            bookId: 2,
            answer: 'Respuesta2 1_1',
            goPage: 1,
            stats: 75,
          },
          {
            id: 2,
            bookPageId: 1,
            bookId: 2,
            answer: 'Respuesta2 2_1',
            goPage: 1,
            stats: 25,
          },
        ],
      },
    ],
  },
];
