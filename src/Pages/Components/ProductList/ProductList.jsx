import { useEffect, useState } from "react";
import "./ProductList.css";
import ListItems from "../ListItems/ListItems";
import Local from "./../../../Uitils/LocalStoredge";
export default function ProductList() {
  const [products, setProducts] = useState(Local());
  const [selectedSize, setSelectedSize] = useState("");

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
      return alert("Please input unique id number");
    }
     else {
      setProducts([...products, formObject]);
      formObject.radio = selectedSize;
      selectedSize("");
    }
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  const sizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <div className="allProducts">
          <label>
            Please input your name:
            <input
            required
              type="text"
              name="userName"
            />
          </label>
          <label>
            Input product name:
            <input
            required
              type="text"
              name="productName"
            />
          </label>
          <label>
            Input your quantity:
            <input
            max='50'
            required
              type="number"
              name="quantity"
            />
          </label>
          <label>
            Input your price:
            <input
            required
              type="number"
              name="price"
            />
          </label>

          <label>
            Input your Product ID:
            <input
            required
              type="text"
              name="id"
              placeholder="Must Be unique"
            />
          </label>

        

          <label>
            Choose your color:
            <select
            required
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
          <label>
            <input
              type="date"
              name="date"
            />
          </label>

          <label>
            M-Size
            <input
            
              onChange={sizeChange}
              type="radio"
              name="radio"
              value="M-Size"
              checked={selectedSize === "M-Size"}
            />
          </label>
          <label>
            L-Size
            <input
              onChange={sizeChange}
              type="radio"
              name="radio"
              value="L-Size"
              checked={selectedSize === "L-Size"}
            />
          </label>
          <label>
            XL-Size
            <input
              onChange={sizeChange}
              type="radio"
              name="radio"
              value="XL-Size"
              checked={selectedSize === "XL-Size"}
            />
          </label>

          <label>
            Product Description:
            <textarea
            placeholder="Optional"
            // maxLength='11'
              name="text"
              rows="3"
              cols="30"
              style={{ resize: "none" 
              }}
              wrap="hard"
            ></textarea>
          </label>
          <label>
            Terms&Conditions
            <input
            required
             type="checkBox"
            />
          </label>

          <button
            className="btn"
            type="submit"
          >
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
