import { fictionalBooks } from '../utils/fictionalBooks';
import { motivationalBooks } from '../utils/motivationalBooks';
import { thrillerBooks } from '../utils/thrillerBooks';
import { sciFiBooks } from '../utils/sciFiBooks';
import { Link } from 'react-router-dom';

function BookList(genre) {
    return(
        <>
          <h1>Browse Books</h1>
          <div>
            <h3>Search: </h3>
            <input type="text" placeholder="enter book or author name"></input>
            <h3>Filter: </h3>
            <select id="category">
                <option>Select an option</option>
                <option>Fictional Books</option>
                <option>Motivational Books</option>
                <option>Sci-Fi Books</option>
                <option>Thriller Books</option>

            </select>
          </div>

          <div className='box'>
                <div className="book-box">
                    <h3>Fiction Books...</h3>
                    <div className='book'>
                        {fictionalBooks.map((book) => (
                            <Link to={`/BookDetails/fiction/${book.id}`} key={book.id}>
                                <div className='each_book' key={book.id}>
                                    <img src={book.coverImage} alt={book.title} width="100" />
                                    <h4>{book.title}</h4>
                                    <p>{book.author}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                        
                </div>
                <div className="book-box">
                    <h3>Sci-Fi Books...</h3>
                    <div className='book'>
                        {sciFiBooks.map((book) => (
                            <Link to={`/BookDetails/scifi/${book.id}`} key={book.id} >
                                <div className='each_book' key={book.id}>
                                    <img src={book.coverImage} alt={book.title} width="100" />
                                    <h4>{book.title}</h4>
                                    <p>{book.author}</p>
                                </div>
                            </Link>
                        
                        ))}
                    </div>
                </div>
                <div className="book-box">
                    <h3>Thriller Books...</h3>
                    <div className='book'>
                        {thrillerBooks.map((book) => (
                            <Link to={`/BookDetails/thriller/${book.id}`} key={book.id}>
                                <div className='each_book' key={book.id}>
                                    <img src={book.coverImage} alt={book.title} width="100" />
                                    <h4>{book.title}</h4>
                                    <p>{book.author}</p>
                                </div>
                            </Link>
                        
                        ))}
                    </div>
                </div>
                <div className="book-box">
                    <h3>Motivational Books...</h3>
                           <div className='book'>
                        {motivationalBooks.map((book) => (
                            <Link to={`/BookDetails/motivational/${book.id}`} key={book.id}>
                                <div className='each_book' key={book.id}>
                                    <img src={book.coverImage} alt={book.title} width="100" />
                                    <h4>{book.title}</h4>
                                    <p>{book.author}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookList;