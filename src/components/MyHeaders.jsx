import SearchbookForm from "./SearchBookForm";

function MyHeaders(props) {
    return (
    <header className="d-flex justify-content-between">
        <h1>Dook !</h1>
        <div className="d-flex h-50">
            <SearchbookForm editResearch={props.editResearch}></SearchbookForm>
        </div>
    </header>
    );
  }
  
  export default MyHeaders;
  