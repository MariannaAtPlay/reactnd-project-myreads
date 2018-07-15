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
				console.dir((books[0]));
				this.setState({
					books
				});
			});
	}

	handleShelfChange = (book, newShelf) => {
		this.setState((prevState) => ({
			books: prevState.books.map((currentBook) => {
				if (currentBook.id === book.id) {
					currentBook.shelf = newShelf;
                }	
                return currentBook;
			})
		}));
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
