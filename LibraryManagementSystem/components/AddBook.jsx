import "./AddBook.css";

import { useState } from "react";

import { useDispatch } from "react-redux";

import { addBook } from "../src/redux/booksSlice";

function AddBook() {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      description: formData.description,
      genre: formData.genre,
      image: formData.image,
      popular: false,
      isNew:true
    };

    console.log(newBook);

    dispatch(addBook(newBook));

    setFormData({
      title: "",
      author: "",
      description: "",
      genre: "",
      image: ""
    });
  };

  return (
    <>
      <h1>Add Book</h1>

      <div className="add-book">

        <input
          type="text"
          name="title"
          placeholder="Book Name"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        >
          <option value="">
            Select Genre
          </option>

          <option value="fictional">
            Fictional
          </option>

          <option value="thriller">
            Thriller
          </option>

          <option value="motivational">
            Motivational
          </option>

          <option value="sci-fi">
            Sci-Fi
          </option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="Cover Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Add Book
        </button>

      </div>
    </>
  );
}

export default AddBook;