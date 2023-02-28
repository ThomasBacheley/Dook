import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import data from './data.json';

import ListBook from "./components/ListBook";

import axios from "axios";

function App() {
  const apikey = "AIzaSyCJ4CtX0Bz0ONtdgzyUCohSsx5RKV9IZL0";

  var books = [{
    id:'U0nxVnZlsosC',
    name:'Business development',
    authors:'Jérôme Gayet'
  }];
  
  /* await axios
    .get("https://www.googleapis.com/books/v1/volumes?q=development&key=" + apikey)
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
 */
    console.log(books);

  return (
    <div className="App">
      <ListBook books={books}></ListBook>
    </div>
  );
}

export default App;
