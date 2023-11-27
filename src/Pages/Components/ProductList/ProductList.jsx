import { useEffect, useState } from "react";
import "./ProductList.css";
import ListItems from "../ListItems/ListItems";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    const formObject = {};
    const elements = [...event.target.elements];
    const existingID = products.reduce((pre, cur) => {
      pre.push(cur.id);
      return pre;
    }, []);
    elements.forEach((element) => {
      if (element.tagname !== "BUTTON")
        formObject[element.name] = element.value;

      element.value = "";
    });
    if (existingID.includes(formObject.id)) {
      alert("Please input unique number");
    } else {
      setProducts([...products, formObject]);
    }
  };
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <div className="allProducts">
          <label>
            Please input your name:
            <input
              type="text"
              name="userName"
            />
          </label>
          <label>
            Input product name:
            <input
              type="text"
              name="productName"
            />
          </label>
          <label>
            Input your quantity:
            <input
              type="number"
              name="quantity"
            />
          </label>
          <label>
            Input your price:
            <input
              type="number"
              name="price"
            />
          </label>
          <label>
            Input your Product ID:
            <input
              type="text"
              name="id"
              placeholder="Must Be unique"
            />
          </label>
          <label>
            Choose your color:
            <select
              name="color"
              id=""
            >
              <option value={"Green"}>Green</option>
              <option value={"Blue"}>Blue</option>
              <option value={"Red"}>Red</option>
              <option value={"Yellow"}>Yellow</option>
              <option value={"Hula"}>Hula</option>
            </select>
          </label>

          {/* <label>
            <input
              type="date"
              name="date"
            />
          </label> */}

          <button className="btn" type="submit">
        Submit
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
        <span className="fourth"></span>
      </button>
        </div>
      </form>

      <ListItems
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
}
