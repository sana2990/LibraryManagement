import { useParams } from "react-router-dom";
import { fictionalBooks } from "../utils/fictionalBooks";
import { motivationalBooks } from "../utils/motivationalBooks";
import { sciFiBooks } from "../utils/sciFiBooks";
import { thrillerBooks } from "../utils/thrillerBooks";

function BookDetails() {

    const {genre, id} = useParams();

      let books = [];

        if (genre === "fiction") {
            books = fictionalBooks;
        } else if (genre === "scifi") {
            books = sciFiBooks;
        } else if (genre === "thriller") {
            books = thrillerBooks;
        } else if (genre === "motivational") {
            books = motivationalBooks;
        }

        const book = books.find((b) => b.id === Number(id));

          if (!book) {
    return <h1>Book Not Found</h1>;
  }

    return(
        <>
         <h1>{book.title}</h1>

      <img src={book.coverImage} alt={book.title} width="200" />

      <h3>Author: {book.author}</h3>

      <p>{book.description}</p>
                 
        </>
    )
}

export default BookDetails;