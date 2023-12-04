import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthWrapper } from "./auth/AuthWrapper";

const BookList = () => {
  //first we create an array for our books and a way to add to the books
  const [list, setList] = useState(["Harry", "Bill", "Constitution"]);
  const [name, setName] = useState("");
  //create a way to add books to the library inventory
  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Return Books</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="App">
        <BookList />
      </div>
      <div className="App">
        <BrowserRouter>
          <AuthWrapper />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

// # Create react routers for the following:
//   /books
// we have to create an array of books(id, subject, return date)
//   /books/:id
//   /login and /register
//we create a form for the user to create a library id
//   /account
//     (username or email logged in user)
//     (List of all books a user has checked out)

// # Authentic users can
//   check out available books
//   return books they have currently checked out
//add books back into the array of books in the library (.push)

//   view their own account page

// # No one should be able to
//   view the accounts of users other than themselves
//   checkout/return books to the other users

// # Everyone should be able to
//   view  list of all the library's books
//display all books at the library if available
//   filter books with a simple text matcher
//array.filter the books by the (id, subject, return date)
//   view details of an individual book
//   sign up for an account with username and password
