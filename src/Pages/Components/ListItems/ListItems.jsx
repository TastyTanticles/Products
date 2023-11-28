/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./ListItems.css";
import Local from "./../../../Uitils/LocalStoredge";
export default function ListItems({ products, setProducts }) {
  const handleDelete = (value) => {
    const filteredProducts = products.filter(
      (product, index) => product.id !== value.id
    );
    setProducts(filteredProducts);
    ``;
  };

  return (
    <>
      <h1>All Product list items will show up here</h1>
      <div className="single">
        {products.map((value, id) => (
          <div className="align">
            <div
              key={id}
              className="listing"
            >
              <p>Price: {value.price}</p>
              <p>Product Name: {value.productName} </p>
              <p>Quantity = {value.quantity} </p>
              <p>Price: {value.price} </p>

              <p>Id: {value.id} </p>
              <p>Color: {value.color}</p>
              <p>Date: {value.date}</p>
              <button onClick={() => handleDelete(value)}>
                Remove
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
