import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListBook from "./components/ListBook";
import UserLibrairy from "./components/UserLibrairy";
import FormLog from "./components/FormLog";
import MyHeaders from "./components/MyHeaders";

import axios from "./axios";
import redux from "./redux";
import reduxLog, { login } from "./reduxLog";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const connecter = () => {
    return axios
      .get("/api/currentuser")
      .then((response) => {
        console.log({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        })
        reduxLog.dispatch(
          login({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
          })
        );

        return response.data.name
      })
      .catch((error) => {
        toast.error(error.response.statusText);
      });
  };

  const refreshin = () => {
    setRefresh(!refresh);
  };

  const [research, setResearch] = useState();

  useEffect(() => {
    connecter();
    getBooksAPI("/api/books");
  });

  const editResearch = (research) => {
    setResearch(research);
  };

  const logout = () => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post("/logout")
        .then((response) => {
          reduxLog.dispatch({ type: "log/logout" });
          toast.info("Logout!");
        })
        .catch((error) => {
          console.log(error.response.data);
          toast.error(
            `${error.message} : ${
              error.response.data.message
                ? error.response.data.message
                : error.response.statusText
            }`
          );
        });
    });
  };

  return (
    <div className="pt-3">
      <div className="container">
        <MyHeaders editResearch={editResearch} />
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

        <a href="https://github.com/ThomasBacheley/Dook">
          https://github.com/ThomasBacheley/Dook
        </a>
        {reduxLog.getState().log.name ? (
          <button
            className="btn btn-perso"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : (
          <FormLog refreshin={refreshin} />
        )}
        <button
          className="btn btn-perso"
          onClick={() => {
            connecter();
          }}
        >
          Connecter ?
        </button>
      </div>
      <ToastContainer />
      <div className="bg-ecran"></div>
    </div>
  );
}

export default App;
