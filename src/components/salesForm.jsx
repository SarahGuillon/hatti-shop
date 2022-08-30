// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import { useState } from "react";
import { db } from "../initFirebase";
import { collection, addDoc } from "firebase/firestore";

const SalesForm = () => {

  const [date, setDate] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const currentDate = new Date();
  //   setDate(currentDate.toISOString().substring(0, 10));
  //   console.log(date);
  //   if(productName=== "" || quantity==="" || unitPrice==="" || totalPrice==="") {
  //     return ("")
  //   };
  //   const datas = collection(db, "sales");
    // addDoc(datas, [{
    //   // date: {date},
    //   product: {productName},
    //   unitPrice: {unitPrice},
    //   quantity: {quantity},
    //   totalPrice: {totalPrice},
    // }])
    // .then(response => console.log(response))
    // .catch(error => console.log(error.message));
  // }

  return (
    <div className="sales-form">
      <form>
        <div className="input-container">
          <input
            placeholder="Product name"
            type="text"
            name="productName"
            required
            // id="product-name"
            value={productName}
            onChange={(event)=>setProductName(event.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Quantity"
            type="text"
            name="quantity"
            required
            // id="quantity"
            value={quantity}
            onChange={(event)=>setQuantity(event.target.value)}
          />
        </div>
        <div className="input-container">
          <span> ₹ / unit</span>
          <input
            placeholder="Price"
            type="text"
            name="unitPrice"
            required
            // id="unit-price"
            value={unitPrice}
            onChange={(event)=>setUnitPrice(event.target.value)}
          />
        </div>
        <div className="input-container">
          <span> ₹ </span>
          <input
            placeholder={unitPrice * quantity}
            type="text"
            name="totalPrice"
            required
            // id="totalPrice"
            value={totalPrice}
            onClick={(event)=>setTotalPrice(unitPrice * quantity)}
            onChange={(event)=>setTotalPrice(event.target.value)}
          />
        </div>

        <p> discount applied : {totalPrice - unitPrice * quantity} ₹</p>
        <button type="submit" className="sales-button"> Add </button>
      </form>
    </div>
  );
}

export default SalesForm;
