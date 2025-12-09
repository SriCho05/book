// Tasks 10-13: Node.js program using Axios with async/await and Promises
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Task 10: Get all books using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log('All Books:', response.data);
  } catch (error) {
    console.error('Error getting all books:', error.message);
  }
}

// Task 11: Get book by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(response => {
      console.log(`Book with ISBN ${isbn}:`, response.data);
    })
    .catch(error => {
      console.error('Error getting book by ISBN:', error.message);
    });
}

// Task 12: Get books by author using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    console.log(`Books by ${author}:`, response.data);
  } catch (error) {
    console.error('Error getting books by author:', error.message);
  }
}

// Task 13: Get books by title using Promises
function getBooksByTitle(title) {
  axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`)
    .then(response => {
      console.log(`Books with title '${title}':`, response.data);
    })
    .catch(error => {
      console.error('Error getting books by title:', error.message);
    });
}

// Example usage:
getAllBooks();
getBookByISBN(1);
getBooksByAuthor('Jane Austen');
getBooksByTitle('Pride and Prejudice');

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };