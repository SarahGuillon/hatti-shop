import { useState } from "react";
import { db } from "../initFirebase";
// import collection and getDocs method (getDoc method is for an individual item)
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";


const ListSales = () => {

  const [ sales, setSales ] = useState([]);

  useEffect(() => {
    getSales();
  }, [])

  const getSales = () => {
    const salesCollection = collection(db, 'sales');
    getDocs(salesCollection)
      .then(response => {
        // console.log(response.docs);
        const datas = response.docs.map( doc => {
          return {
            data: doc.data(),
            id: doc.id
          };
        });
        setSales(datas);
        console.log(sales);
      })
      .catch(error => console.log(error.message));
  }

  return (
    <div>
      <ul>
        { sales.map(sale => {
          return (
            <li key={sale.id}>{sale.data.product}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default ListSales;
