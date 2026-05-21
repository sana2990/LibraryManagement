// Importing useParams hook to get URL parameters
import { useParams } from "react-router-dom";
import { fictionalBooks } from "../src/utils/fictionalBooks";
import { motivationalBooks } from "../src/utils/motivationalBooks";
import { sciFiBooks } from "../src/utils/sciFiBooks";
import { thrillerBooks } from "../src/utils/thrillerBooks";

function BookDetails() {

    // Getting genre and id from URL
    const {genre, id} = useParams();

     // Empty array to store selected category books
      let books = [];

       // Checking which genre is selected
        if (genre === "fiction") {
            books = fictionalBooks;
        } else if (genre === "scifi") {
            books = sciFiBooks;
        } else if (genre === "thriller") {
            books = thrillerBooks;
        } else if (genre === "motivational") {
            books = motivationalBooks;
        }

        // Finding the selected book using id
        const book = books.find((b) => b.id === Number(id));

        // If no book is found
          if (!book) {
    return <h1>Book Not Found</h1>;
  }

    return(
        // Book details container
        <div className="book-details">
         <h1>{book.title}</h1>

      <img src={book.coverImage} alt={book.title} />

      <h3>Author: {book.author}</h3>

      <p>{book.description}</p>
                 
        </div>
    )
}

export default BookDetails;