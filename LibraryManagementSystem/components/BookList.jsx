import { fictionalBooks } from "../src/utils/fictionalBooks";
import { motivationalBooks } from "../src/utils/motivationalBooks";
import { sciFiBooks } from "../src/utils/sciFiBooks";
import { thrillerBooks } from "../src/utils/thrillerBooks";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./bookList.css";

function BookList() {

 const reduxBooks = useSelector(
  (state) => state.books.books
);

const books = [
  ...fictionalBooks,
  ...sciFiBooks,
  ...thrillerBooks,
  ...motivationalBooks,
  ...reduxBooks
];

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [searchText, setSearchText] = useState("");

const [searchType, setSearchType] =
  useState("book");

const searchedBooks = books.filter((book) => {

  if (searchText === "") {
    return true;
  }

  if (searchType === "book") {

    return book.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

  }

  return book.author
    .toLowerCase()
    .includes(searchText.toLowerCase());

});

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const newBooks = books.filter(
    (book) => book.isNew
  );
  

  return (
    <>
      
      <h1>Browse Books</h1>

      <div className="book">

        <h3>Search:</h3>

        <input
          type="text"
          placeholder="enter book or author name"
          value={searchText} onChange={(e) => setSearchText(e.target.value)}
        />
<select value={searchType}
  onChange={(e) =>
    setSearchType(e.target.value)
  }
>

  <option value="book">
    Book Name
  </option>

  <option value="author">
    Author
  </option>
    
</select>

        <h3>Filter:</h3>

        <select
          id="category"
          onChange={handleCategory}
        >

          <option value="">
            Select an option
          </option>

          <option value="fictional">
            Fictional Books
          </option>

          <option value="motivational">
            Motivational Books
          </option>

          <option value="sci-fi">
            Sci-Fi Books
          </option>

          <option value="thriller">
            Thriller Books
          </option>

        </select>

      </div>

      <div className="box">

        {/* Fictional */}

        {(selectedCategory === "" ||
          selectedCategory === "fictional") && (

          <div className="book-box">

            <h3>Fictional Books...</h3>

            <div className="book">

              {searchedBooks.filter((book) => book.genre === "fictional").map ((book) => (

                <Link
                  to={`/BookDetails/fictional/${book.id}`}
                  key={book.id}
                >

                  <div className="each_book">

                    <img
                      src={book.coverImage}
                      alt={book.title}
                      width="100"
                    />

                    <h4>{book.title}</h4>

                    <p>{book.author}</p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

        {/* Sci-Fi */}

        {(selectedCategory === "" ||
          selectedCategory === "sci-fi") && (

          <div className="book-box">

            <h3>Sci-Fi Books...</h3>

            <div className="book">

              {searchedBooks.filter((book) => book.genre === "sci-fi").map((book) => (

                <Link
                  to={`/BookDetails/scifi/${book.id}`}
                  key={book.id}
                >

                  <div className="each_book">

                    <img
                      src={book.coverImage}
                      alt={book.title}
                      width="100"
                    />

                    <h4>{book.title}</h4>

                    <p>{book.author}</p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

        {/* Thriller */}

        {(selectedCategory === "" ||
          selectedCategory === "thriller") && (

          <div className="book-box">

            <h3>Thriller Books...</h3>

            <div className="book">

              {searchedBooks.filter((book) => book.genre === "thriller").map((book) => (

                <Link
                  to={`/BookDetails/thriller/${book.id}`}
                  key={book.id}
                >

                  <div className="each_book">

                    <img
                      src={book.coverImage}
                      alt={book.title}
                      width="100"
                    />

                    <h4>{book.title}</h4>

                    <p>{book.author}</p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

        {/* Motivational */}

        {(selectedCategory === "" ||
          selectedCategory === "motivational") && (

          <div className="book-box">

            <h3>Motivational Books...</h3>

            <div className="book">

              {searchedBooks.filter((book) => book.genre === "motivational").map((book) => (

                <Link
                  to={`/BookDetails/motivational/${book.id}`}
                  key={book.id}
                >

                  <div className="each_book">

                    <img
                      src={book.coverImage}
                      alt={book.title}
                      width="100"
                    />

                    <h4>{book.title}</h4>

                    <p>{book.author}</p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

        {/* Newly Added Books */}

        <h1>Newly Added Books</h1>

        <div className="book-box">

          {newBooks.map((book) => (

            <div
              key={book.id}
              className="each_book"
            >

              <h3>{book.title}</h3>

              <p>{book.author}</p>

              <p>{book.genre}</p>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default BookList;