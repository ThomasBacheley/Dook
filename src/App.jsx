import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListBook from "./components/ListBook";
import UserLibrairy from "./components/UserLibrairy";
import FormLog from "./components/FormLog";

import axios from "axios";

function App() {
  var books = [];
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=$%7Bexample%7D&maxResults=20"
    )
    .then((response) => {
      response.data.items.forEach((book) => {
        var book = {
          id: book.id,
          name: book.volumeInfo.title,
          authorname: "Inconnu",
        };
        books = [...books, book];
      });
    });
  console.log(books);

  return (
    <div>
      <h1>Dook !</h1>
      <div className="d-flex justify-content-around">
        <div>
          <h1>Book List</h1>
          <ListBook books={books}></ListBook>
        </div>
        <div>
          <h1>User Librairy</h1>
          <UserLibrairy
            books={[{ name: "ywee", authors: "jean", id: 3 }]}
          ></UserLibrairy>
        </div>
      </div>
      <FormLog></FormLog>
    </div>
  );
}

export default App;
