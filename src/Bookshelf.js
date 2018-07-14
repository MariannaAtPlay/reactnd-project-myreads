import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    const { title, shelf, books } = props;
    const booksToDisplay = books.filter((book) => {
        return book.shelf === shelf;
    });
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksToDisplay.map((book) => {
                        return (
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Bookshelf;