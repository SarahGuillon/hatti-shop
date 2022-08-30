import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
// import "firebase/auth";
// import firebase from 'firebase/compat/app';
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import { auth } from "./initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";


function App() {

  const [currentUser, setCurrentUser] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser);
    // console.log(currentUser);
  });


  return (
    <>
      { !currentUser && <LoginPage/> }
      { currentUser &&
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
