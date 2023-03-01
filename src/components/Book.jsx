function Book(props) {
  return (
    <tr>
      <th scope="row">{props.book.id}</th>
      <td>{props.book.title}</td>
      <td>{props.book.authors}</td>
    </tr>
  );
}

export default Book;
