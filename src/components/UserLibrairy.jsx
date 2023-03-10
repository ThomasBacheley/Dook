import ListBook from "./ListBook";

function UserLibrairy(props) {
  return (
    <ListBook books={props.books} type="users"  refreshin={props.refreshin}></ListBook>
  );
}

export default UserLibrairy;
