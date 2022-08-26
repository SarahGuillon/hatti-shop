import '../styles/home.css';
import '../styles/salesForm.css';
import SalesForm from '../components/salesForm';
import firebase from 'firebase/compat/app';
import { FirebaseDatabaseMutation, FirebaseDatabaseProvider } from "@react-firebase/database";
import { firebaseConfig } from "../firebaseConfig.js";

const Home = () => {

  return (
    <FirebaseDatabaseProvider { ...firebaseConfig } firebase={firebase}>
      <FirebaseDatabaseMutation>
        
      </FirebaseDatabaseMutation>
      <div className="home">
        <h1>Sales register</h1>
        <div className="form-card">
          <SalesForm/>
        </div>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default Home;
