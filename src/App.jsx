import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import data from './data.json';

import ListBook from "./components/ListBook";

import axios from "axios";

async function App() {
  
  await axios
    .get("https://www.googleapis.com/books/v1/volumes?q=$%7Bexample%7D&maxResults=20")
    .then((response) => {
      console.log(response.data)
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
    <div className="App">
      <ListBook books={books}></ListBook>
    </div>
  );
}

export default App;
