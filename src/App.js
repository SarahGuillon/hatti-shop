import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import {firebaseConfig} from "./firebaseConfig.js";
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";


function App() {

const logout = () => {
  firebase.auth().signOut();
}

  return (
    <>
      <Router>
        <FirebaseAuthProvider { ...firebaseConfig } firebase={firebase}>
          <IfFirebaseUnAuthed>
            <LoginPage/>
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            <NavBar/>
            <div>
              <button onClick={logout}>Se déconnecter</button>
            </div>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </IfFirebaseAuthed>
        </FirebaseAuthProvider>
      </Router>
    </>
  );
}

export default App;
