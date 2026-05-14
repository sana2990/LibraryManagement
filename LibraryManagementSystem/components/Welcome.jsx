import './Welcome.css';

function Welcome(){
    return(
        <>
            <h1>Welcome to Online Library System</h1>
            <div className='box'>
                <div className="book-box">
                    <h3>Fiction Books...</h3>
                    <button>Show Books</button>
                </div>
                <div className="book-box">
                    <h3>Sci-Fi Books...</h3>
                    <button>Show Books</button>
                </div>
                <div className="book-box">
                    <h3>Thriller Books...</h3>
                    <button>Show Books</button>
                </div>
                <div className="book-box">
                    <h3>Motivational Books...</h3>
                    <button>Show Books</button>
                </div>
            </div>

        </>
    )
}

export default Welcome;