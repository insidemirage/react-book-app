import React from 'react'
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import Book from './Book';

type RouteParams = { 
  id: string;
}

const BookPage = () => {
  const { id } = useParams<RouteParams>();
  const books = useTypedSelector((state) => state.books);
  const book = books.items.filter((book) => book.id === id)[0];
  return (
    <div>
      {book && <Book data={book}/>}
    </div>
  );
};

export default BookPage;
