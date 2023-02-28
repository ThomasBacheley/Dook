import Book from "./Book";

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
        {props.books.map((book) => (
            <Book key={book.id} book={book}></Book>
        ))}
      </tbody>
    </table>
  );
}

export default ListBook;
