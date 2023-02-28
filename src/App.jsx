import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'

import ListBook from "./components/ListBook";

function App() {
  const books = [
    {id:1,name:'suuu',authorname:'ywee'},
    {id:2,name:'suuu1',authorname:'ywee1'},
    {id:3,name:'suuu2',authorname:'ywee2'},
    {id:4,name:'suuu3',authorname:'ywee3'}
  ]
  return (
    <div className="App">
      <ListBook books={books}></ListBook>
    </div>
  )
}

export default App
