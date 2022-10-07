import "../styles/listSales.css";
import { useState } from "react";
import { db } from "../initFirebase";
// import collection and getDocs method (getDoc method is for an individual item)
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";


const ListSales = () => {

  const [ sales, setSales ] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

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
        // console.log(sales);
      })
      .catch(error => console.log(error.message));
  }

  return (
    <div className="sales-table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th> Date </th>
            <th> Product </th>
            <th> Unit Price </th>
            <th> Quantity </th>
            <th> Total Price </th>
          </tr>
        </thead>
        <tbody>
          { sales.map(sale => {
            // console.log(sale.data.product);
            return (
              <tr key={sale.id}>
                <td>{new Date(sale.data.date.seconds * 1000).toISOString().substring(0, 10)}</td>
                <td>{sale.data.product} </td>
                <td> <span> ₹ </span> {sale.data.unitPrice}</td>
                <td>{sale.data.quantity}</td>
                <td> <span> ₹ </span> {sale.data.totalPrice}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListSales;
