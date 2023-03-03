import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListBook from "./components/ListBook";
import UserLibrairy from "./components/UserLibrairy";
import FormLog from "./components/FormLog";
import MyHeaders from "./components/MyHeaders";

import axios from "axios";
import redux from "./redux";
import { useEffect, useState } from "react";

import ReduxLog from './reduxLog';

async function getBooksAPI(url) {
  axios.get(url).then((response) => {
    response.data.items.forEach((book) => {
      var book = {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Inconnu",
      };
      redux.dispatch({ type: "book/addBook", payload: book });
    });
  });
}

function App() {
  const [research, setResearch] = useState("book");

  useEffect(() => {
    getBooksAPI(
      research?"https://www.googleapis.com/books/v1/volumes?q=" +
        research +
        "&maxResults=30":""
    );
  });

  const editResearch = (research) => {
    setResearch(research);
  };

  return (
    <div className="pt-3">
      <div className="container">
        <MyHeaders editResearch={editResearch} />
        <div className="d-flex justify-content-between">
          <div>
            <h1>Book List</h1>
            <ListBook type="search" books={redux.getState().book}></ListBook>
          </div>
          <div>
            <h1>User Librairy</h1>
            <UserLibrairy
               books={redux.getState().userbook}
            ></UserLibrairy>
          </div>
        </div>
        <FormLog></FormLog>
      </div>
      <div className="bg-ecran"></div>
    </div>
  );
}

export default App;
