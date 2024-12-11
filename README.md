# Reviews list

A single page application that allows you to download, filter and sort a list of company reviews.

View the application at the [link](https://xyzelena.github.io/reviews_list/)

## Description:
This application can do:
1. Load a list of reviews for one company via redux-saga;
2. Filter reviews:
- By platform (Google, Yandex, 2GIS).
- By rating range (rating from 1 to 5).
3. Sort reviews:
- By time (new/old).
- By rating (ascending/descending).
4. Display the filtered and sorted list in tabular form.

Additional features:
1. Text search by review content.
2. Pagination by review list into pages.

## Functionality:
1. Displaying a table of reviews with columns:
- Platform
- Rating
- Time added
- Review text
2. Built-in filters and sorting, search that is applied without reloading the page.

## Technical implementation:
1. Using React: functional components with hooks.
2. Redux and redux-saga: managing the state of reviews, filtering and sorting.
3. Logic on the frontend: filtering and sorting are performed on the client side.

## How to install the app?
- git clone this repository to your computer;
- make sure that you have node.js and npm installed;
- install dependencies and let your system run the package:
```bash
make install
```
- build the project:
```bash
make build
```
- to run app:
```bash
make start
```
Other commands can be found in the Makefile.

<img width="1183" alt="image" src="https://github.com/user-attachments/assets/f4aa4811-3886-4b92-856c-80904ba2d5f2" />



