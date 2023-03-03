import Book from "./Book";

function ListBook(props) {
  return (
    <table className="table bg-perso2">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author Name</th>
          <th scope="col">{props.type =="users"?"delete":"add"}</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
            <Book key={book.id} book={book} type={props.type}></Book>
        ))}
      </tbody>
    </table>
  );
}

export default ListBook;
