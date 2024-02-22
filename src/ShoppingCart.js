import { products } from "./Data";
import { useState, useEffect } from "react";

const ShoppingCart = () => { 

  const btns = document.querySelectorAll('.btns');
  const [productName, setProductName] = useState([]);
  // const [array, setArray] = useState([]);
  const handleClick = (id) => {
    if (id == 1) setProductName([...productName,products[0].name]);
    if (id == 2) setProductName([...productName,products[1].name]);
    console.log(productName)
  }

  // console.log(btns[0].__reactProps$jclumx9nnq9.onClick)
  // btns[0].addEventListener('click', () => {
  //   handleClick('h')
  // })
  return (
    <>
      <button className="btns" onClick={() => handleClick(1)}>select</button>
      <button className="btns" onClick={() => handleClick(2)}>select</button>
      <h1>shop</h1>
      <h2>{`${[...productName]}`}</h2> 

    </>
  )
}
export default ShoppingCart;