import redux from "../redux";
import axios from "../axios";
import { toast } from "react-toastify";

function Book(props) {

  function deleteBook(){
    props.refreshin();
    var book =( {
    id: props.book.id,
    title: props.book.title,
    author: props.book.authors
      ? props.book.authors.join(", ")
      : "Inconnu",
  });
  axios.post('/api/library/delete', {
    bid: book.id
  })
  .then(function (response) {
    console.log(response);
    redux.dispatch({ type: "userBook/deleteBook", payload: book });
  });
  }
  
  
  function addBook(){
    props.refreshin();
    var book =( {
    id: props.book.id,
    title: props.book.title,
    author: props.book.authors
      ? props.book.authors.join(", ")
      : "Inconnu",
  });
  axios.post('/api/library/add', {
    bid: book.id
  })
  .then(function (response) {
    console.log(response);
    redux.dispatch({ type: "userBook/addBook", payload: book });
  });
  }
  
  return (
    <tr>
      <th scope="row">{props.book.id}</th>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>
        <button className="btn btn-perso" onClick={props.type =="users"?deleteBook:addBook}>{props.type =="users"?"delete":"add"}</button>
        </td>
    </tr>
  );
}

export default Book;
