import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListBook from "./components/ListBook";
import UserLibrairy from "./components/UserLibrairy";
import FormLog from "./components/FormLog";
import MyHeaders from "./components/MyHeaders";

import axios from "./axios";
import redux from "./redux";
import reduxLog from "./reduxLog";
import { useEffect, useState } from "react";
async function getBooksAPI(url) {
  redux.dispatch({
    type: "book/clearBook",
  });
  axios.get(url).then((response) => {
    response.data.forEach((res) => {
      var book = {
        id: res.id,
        title: res.title,
        author: res.author,
      };
      redux.dispatch({ type: "book/addBook", payload: book });
    });
  });
}

function App() {
  const [refresh, setRefresh] = useState();

  const logout = () => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post("/logout")
        .then((response) => {
          reduxLog.dispatch({type:"log/logout"});
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const isLogged = () => {
    if(reduxLog.getState().log.name != ""){
      <MyHeaders editResearch={editResearch} />
    }
  }

  const connecter = () => {
    console.log(reduxLog.getState().log.id);
  }

  const refreshin = () => {
    setRefresh(!refresh);
  };
  const [research, setResearch] = useState();

  useEffect(() => {
    getBooksAPI("/api/books");
  });

  const editResearch = (research) => {
    setResearch(research);
  };

  return (
    <div className="pt-3">
      <div className="container">
        {isLogged()}
        <div className="d-flex justify-content-between">
          <div className="pe-3">
            <h1>Book List</h1>
            <ListBook
              type="search"
              books={redux.getState().book}
              refreshin={refreshin}
            ></ListBook>
          </div>
          <div>
            <h1>User Librairy</h1>
            <UserLibrairy
              books={redux.getState().userbook}
              refreshin={refreshin}
            ></UserLibrairy>
          </div>
        </div>
        <FormLog refreshin={refreshin}></FormLog>
        <a href="https://github.com/ThomasBacheley/Dook">
          https://github.com/ThomasBacheley/Dook
        </a>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout Perdu
        </button>
        <button
          onClick={() => {
            connecter();
          }}
        >
          Connecter ?
        </button>
      </div>
      <div className="bg-ecran"></div>
    </div>
  );
}

export default App;
