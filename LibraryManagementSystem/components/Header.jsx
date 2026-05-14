import "./Header.css";

function Header() {
    return (
        <>
          <div className="header">
             <ul>
                <a href="/"><li>Home</li></a>
                <a href="/BookList"><li>Browse Books</li></a>
                <a href="/AddBook"><li>Add Book</li></a>
             </ul>
          </div>
        </>
    )
}

export default Header;