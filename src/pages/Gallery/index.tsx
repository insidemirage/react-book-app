import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import BookCard from './BookCard';
import './index.scss';


const Gallery = () => {
  const books = useTypedSelector((state) => state.books);
  return (
    <div className="gallery">
      <div className="gallery__grid">
        {books.items.map(({ id, volumeInfo:{ imageLinks, title, authors, categories } }) => (
          <BookCard id={id} image={imageLinks} title={title} authors={authors} categories={categories} key={id}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
