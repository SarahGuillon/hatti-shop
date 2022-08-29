// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import { useState } from "react";

const SalesForm = () => {

  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');



  return (
    // <div>
    //   <FirebaseDatabaseMutation type="push" path="/">
    //     {({ runMutation }) => {

    //       const registerSales = () => {
    //         runMutation("hello");
    //       }

          // return (
            <div className="sales-form">
              <div className="input-container">
                <input
                  placeholder="Product name"
                  type="text"
                  name="product-name"
                  required
                  id="product-name"
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
                  id="quantity"
                  value={quantity}
                  onChange={(event)=>setQuantity(event.target.value)}
                />
              </div>
              <div className="input-container">
                <span> ₹ / unit</span>
                <input
                  placeholder="Price"
                  type="text"
                  name="unit-price"
                  required
                  id="unit-price"
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
                  id="totalPrice"
                  value={totalPrice}
                  onClick={(event)=>setTotalPrice(unitPrice * quantity)}
                  onChange={(event)=>setTotalPrice(event.target.value)}
                />
              </div>
              <p> discount applied : {totalPrice - unitPrice * quantity} ₹</p>
              <button className="sales-button"> Add </button>
              {/* <p>{`${productName} : ${quantity} qty for a total price of : ${totalPrice} ₹`}</p> */}
            </div>
          // )



    //     }}
    //   </FirebaseDatabaseMutation>
    // </div>
  );
}

export default SalesForm;
