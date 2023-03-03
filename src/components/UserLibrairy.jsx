import ListBook from "./ListBook";

function UserLibrairy(props) {
  return (
    <ListBook books={props.books} type="users"></ListBook>
  );
}

export default UserLibrairy;
