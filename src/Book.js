import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
    state = {
        shelf: this.props.book.shelf
    }

    handleChange = (e) => {
        const newShelf = e.target.value;

        this.setState({
            shelf: newShelf
        });
        BooksAPI
            .update(
                {
                    id: this.props.book.id
                }, 
                newShelf
            )
            .then((response) => console.dir(response));
    }

    render () {
        const { book } = this.props; 

        if (!book) return null;
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={this.handleChange}>
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
}

export default Book;