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
                    <Bookshelf name="Currently Reading" />
                    <Bookshelf name="Want to Read" />
                    <Bookshelf name="Read" />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default ListBooks;