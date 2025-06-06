# MyReads Project

This is the final assessment project for the first part of the [Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. When a book is on a bookshelf, it has the same state on both the main application page and the search page. When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

Try searching for "React" to discover some useful books ;)

## TL;DR

To give it a try:

Visit it on the web: 
* https://MariannaAtPlay.github.io/reactnd-project-myreads

Or install it locally:
* install all project dependencies with `npm install`
* start the app with `npm start`

![Home page](https://video.udacity-data.com/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

![Search page](https://video.udacity-data.com/topher/2017/December/5a3c22b9_screen-shot-2017-12-21-at-1.06.59-pm/screen-shot-2017-12-21-at-1.06.59-pm.png)

## Important - available search terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
