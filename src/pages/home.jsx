import '../styles/home.css';
import '../styles/salesForm.css';
import SalesForm from '../components/salesForm';
import ListSales from '../components/listSales';


const Home = () => {

  return (
      <div className="home">
        <SalesForm />
        <ListSales />
      </div>
  );
}

export default Home;
