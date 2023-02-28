function Book(props) {
  return (
    <tr>
      <th scope="row">{props.book.id}</th>
      <td>{props.book.name}</td>
      <td>{props.book.authorname}</td>
    </tr>
  );
}

export default Book;
