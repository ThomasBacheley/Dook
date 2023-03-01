import Book from "./Book";
import redux from "../redux";

function ListBook(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author Name</th>
        </tr>
      </thead>
      <tbody>
        {/* {redux.getState().map((book)=>(
          <Book key={book.id} book={book}></Book>
        ))} */}
      </tbody>
    </table>
  );
}

export default ListBook;
