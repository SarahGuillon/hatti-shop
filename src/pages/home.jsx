import '../styles/home.css';
import '../styles/salesForm.css';
import SalesForm from '../components/salesForm';
import ListSales from '../components/listSales';


const Home = () => {

  return (
      <div className="home">
        <h1>Sales register</h1>
        <div className="form-card">
          <SalesForm />
        </div>
        <div className="table-card">
          <ListSales />
        </div>
      </div>
  );
}

export default Home;
