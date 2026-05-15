import "./AddBook.css";

function AddBook() {
    return (
        <>
          <h1>Add Book</h1>
          <div className="add-book">
            <h3>Form</h3>
            <input type="text" placeholder="Book Name"></input>
            <input type="text" placeholder="Author"></input>
            <textarea placeholder="description"></textarea>
            <input type="text" placeholder="cover image url"></input>
            <button>Add Book</button>
          </div>
        </>
    )
}

export default AddBook;