// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import { useState } from "react";
import { db } from "../initFirebase";
import { collection, addDoc, Timestamp } from "firebase/firestore/lite";

const SalesForm = () => {

  const [date, setDate] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = Timestamp.fromDate(new Date());
    setDate(currentDate);
    console.log(date);
    if(productName=== "" || quantity==="" || unitPrice==="" || totalPrice==="") {
      return ("")
    };
    const datas = collection(db, "sales");
    addDoc(datas, {
      date: currentDate,
      product: productName,
      quantity: quantity,
      unitPrice: unitPrice,
      totalPrice: totalPrice,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
  }

  return (
    <div className="sales-form-card">
      <div className="sales-form-card-width">
        <h2 className="header-form-card"> Add new Sales</h2>
        <div className="sales-form">
          <div className="input-container product-input">
            <input
              placeholder="Product name"
              type="text"
              name="product"
              required
              id="productName"
              value={productName}
              onChange={(event)=>setProductName(event.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Quantity"
              type="number"
              name="quantity"
              required
              id="quantity"
              value={quantity}
              onChange={(event)=>setQuantity(event.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Price"
              type="number"
              name="unitPrice"
              required
              id="unitPrice"
              value={unitPrice}
              onChange={(event)=>setUnitPrice(event.target.value)}
            />
            <span> ₹ / unit</span>
          </div>
          <div className="input-container">
            <input
              placeholder="Total Price"
              type="number"
              name="totalPrice"
              required
              id="totalPrice"
              value={totalPrice}
              onClick={(event)=>setTotalPrice(unitPrice * quantity)}
              onChange={(event)=>setTotalPrice(event.target.value)}
            />
            <span> ₹ </span>
          </div>
          <button className="sales-button" onClick={e => handleSubmit(e)}> + </button>
        </div>
      </div>
      {/* <div><p> discount applied : {totalPrice - unitPrice * quantity} ₹</p></div> */}
    </div>
  );
}

export default SalesForm;
