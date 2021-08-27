import React, { useState, useEffect } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import BookCard from './BookCard';
import Pagination from './Pagination';
import './index.scss';


const Gallery = () => {
  const [page, setPage] = useState(1);
  const books = useTypedSelector((state) => state.books);
  const searchName = books.searchName;

  useEffect(() => {
    setPage(1);
  }, [searchName])

  return (
    <div className="gallery">
      <div className="gallery__grid">
        {books.items.map(({ id, volumeInfo:{ imageLinks, title, authors, categories } }) => (
          <BookCard id={id} image={imageLinks} title={title} authors={authors} categories={categories} key={id}/>
        ))}
      </div>
      {books.totalItems > 16 && <Pagination setPage={setPage} page={page} searchName={books.searchName} count={books.totalItems}/>}
    </div>
  );
};

export default Gallery;
