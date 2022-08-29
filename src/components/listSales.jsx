// import { useState } from "react";
import { db } from "../initFirebase";
// import collection and getDocs method (getDoc method is for an individual item)
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";


const ListSales = () => {

  // const [ sales, setSales ] = useState("");

  useEffect(() => {
    getSales();
  }, [])

  const getSales = () => {
    const salesCollection = collection(db, 'sales');
    getDocs(salesCollection)
      .then(response => console.log(response))
      .catch(error => console.log(error.message));
  }

  return (
    <div>
      <h1> hello </h1>
    </div>
  );
}

export default ListSales;
