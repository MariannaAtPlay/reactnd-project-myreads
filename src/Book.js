import React from 'react';
import * as BooksAPI from './BooksAPI';

const Book = (props) => {
    const { book } = props; 

    const handleChange = (e) => {
        const newShelf = e.target.value;

        BooksAPI
            .update(
                {
                    id: book.id
                }, 
                newShelf
            )
            .then((response) => console.dir(response));
            props.onShelfChange(book, newShelf);
    }

    if (!book) return null;
    
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : "none"} onChange={handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
    );

}

export default Book;