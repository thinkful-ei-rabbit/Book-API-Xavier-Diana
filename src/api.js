let BASE_URL = 'https://www.googleapis.com/books/v1/users/AIzaSyDQwj4Z2owkpVy1DTy8n_nZFJAzmJbNW-0';

//
const fetchBooks = function() {
    fetch(BASE_URL)
    .then(res => {
        console.log(res)
        return res.json()
    });
}

export default {
    fetchBooks
}