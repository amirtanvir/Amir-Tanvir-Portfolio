const [books, setBooks] = useState([]);

const fetchBooks = testimonialData.forEach((book) => ({...books.data(), id:book.id}))
setBooks(fetchBooks)

