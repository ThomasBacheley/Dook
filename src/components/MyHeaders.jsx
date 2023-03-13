import SearchbookForm from "./SearchBookForm";
import reduxLog from "../reduxLog";


function MyHeaders(props) {
    return (
    <header className="d-flex justify-content-between">
        <h1>Dook !</h1>
        <h3>Salut {reduxLog.getState().log.name} !</h3>
        <div className="d-flex h-50">
            <SearchbookForm editResearch={props.editResearch}></SearchbookForm>
        </div>
    </header>
    );
  }
  
  export default MyHeaders;
  