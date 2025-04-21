import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState({
					books
				});
			});
	}

	handleShelfChange = (book, newShelf) => {
		//check if this book is currently on a shelf
		//if so, update its "shelf" property
		//otherwise add it to state with an updated "shelf"
		this.setState((prevState) => {
			let updatedBooks;
			const i = prevState.books.findIndex((bookOnShelf) => bookOnShelf.id === book.id);

			if (i !== -1) {
				updatedBooks = prevState.books.map((currentBook) => {
					if (currentBook.id === book.id) {
						currentBook.shelf = newShelf;
					}	
					return currentBook;
				});
			} else {
				book.shelf = newShelf;
				updatedBooks = [...prevState.books, book]
			}

			return {
				books: updatedBooks 
			}
		});
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => <ListBooks 
						books={this.state.books}
						onShelfChange={this.handleShelfChange}
					/>} 
				/>
				<Route path="/search" render={() => <SearchBooks 
					booksOnShelves={this.state.books}
					onShelfChange={this.handleShelfChange}
					/>}  
				/>
			</div>
		);
	}
}

export default BooksApp;
