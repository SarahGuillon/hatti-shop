import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar";
// import firebase from "firebase";
// import "firebase/auth";
// import {FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed} from "@react-firebase/auth";
// import { FirebaseDatabaseProvider } from "@react-firebase/database";
// import { firebaseConfig } from './firebaseConfig.js';
import Home from "./pages/home";
// import LoginPage from "./pages/loginPage";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
