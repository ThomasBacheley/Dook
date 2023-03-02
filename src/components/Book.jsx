import redux from "../redux";

function Book(props) {
  
  function deleteBook(){
    var book =( {
    id: props.book.id,
    title: props.book.title,
    author: props.book.authors
      ? props.book.authors.join(", ")
      : "Inconnu",
  });
  redux.dispatch({ type: "userBook/deleteBook", payload: book })
  console.log(redux.getState().userbook);}
  
  function addBook(){
    var book =( {
    id: props.book.id,
    title: props.book.title,
    author: props.book.authors
      ? props.book.authors.join(", ")
      : "Inconnu",
  });
  redux.dispatch({ type: "userBook/addBook", payload: book })
  console.log(redux.getState().userbook);}
  
  return (
    <tr>
      <th scope="row">{props.book.id}</th>
      <td>{props.book.title}</td>
      <td>{props.book.authors}</td>
      <td>
        <button className="btn btn-perso" onClick={props.type =="users"?deleteBook:addBook}>{props.type =="users"?"delete":"add"}</button>
        </td>
    </tr>
  );
}

export default Book;
