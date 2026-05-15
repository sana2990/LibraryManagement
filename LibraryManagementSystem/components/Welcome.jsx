import './Welcome.css';
import { fictionalBooks } from '../utils/fictionalBooks';
import { motivationalBooks } from '../utils/motivationalBooks';
import { sciFiBooks } from '../utils/sciFiBooks';
import { thrillerBooks } from '../utils/thrillerBooks';

function Welcome(){

     const allBooks = [
                    ...fictionalBooks,
                    ...sciFiBooks,
                    ...thrillerBooks,
                    ...motivationalBooks
                ];

            const popularBooks = allBooks.filter((book) => book.popular);

    return(
        <>
            <h1>Online Library System</h1>
            
            <h2>Popular Books</h2>
            <div className="popular-books">

                {popularBooks.map((book) => (
                    <div key={book.id} className="book-box">
                    <img src={book.coverImage} className='popular_img'></img>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                </div>
                ))}
            </div>
        </>
    )
}

export default Welcome;