import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListBook from "./components/ListBook";
import UserLibrairy from "./components/UserLibrairy";
import FormLog from "./components/FormLog";
import MyHeaders from "./components/MyHeaders";

import axios from "axios";
import redux from "./redux";

function App() {
  var go = false;
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=$%7Bexample%7D&maxResults=20"
    )
    .then((response) => {
      response.data.items.forEach((book) => {
        var book = {
          id: book.id,
          title: book.volumeInfo.title,
          author: "Inconnu",
        };
        redux.dispatch({type:'book/addBook',payload:book});
      });
    });

  return (
    <div className="container mt-3">
      <MyHeaders/>
      <div className="d-flex justify-content-between">
        <div>
          <h1>Book List</h1>
          <ListBook books={redux.getState().book}></ListBook>
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
