import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book book={props.books[0]} />
                    </li>
                    <li>
                        <Book book={props.books[2]} />
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Bookshelf;