import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf 
                        title="Currently Reading" 
                        shelf="currentlyReading"
                        books={props.books}
                    />
                    <Bookshelf 
                        title="Want to Read" 
                        shelf="wantToRead"
                        books={props.books} 
                    />
                    <Bookshelf 
                        title="Read" 
                        shelf="read"
                        books={props.books} 
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default ListBooks;