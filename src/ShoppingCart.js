import { products } from "./Data";
import { useState, useEffect } from "react";

const ShoppingCart = () => { 

  const btns = document.querySelectorAll('.btns');
  const [productName, setProductName] = useState([]);
  const [productImage, setProductImage] = useState();
  const [productCost, setProductCost] = useState([]);
  let [sum, setSum] = useState(0);
  const [status, setStatus] = useState(false);
  const handleClick = (id) => {
    if (id == 1) {
      setProductName([...productName, products[0].name]);
      setProductImage([products[0].img]);
      setProductCost([...productCost, products[0].cost]);
      setStatus(true);
    }
    if (id == 2) {
      setProductName([...productName, products[1].name]);
      setProductImage([products[1].img]);
      setProductCost([...productCost, products[1].cost]);
      setStatus(true);
    }
    if (id == 3) {
      setProductName([...productName, products[2].name]);
      setProductImage([products[2].img]);
      setProductCost([...productCost, products[2].cost]);
      setStatus(true);
    }
    if (id == 4) {
      setProductName([...productName, products[3].name]);
      setProductImage([products[3].img]);
      setProductCost([...productCost, products[3].cost]);
      setStatus(true);
    }
    if (id == 5) {
      setProductName([...productName, products[4].name]);
      setProductImage([products[4].img]);
      setProductCost([...productCost, products[4].cost]);
      setStatus(true);
    }
    console.log(productName)
    console.log(productCost)
  }

  // console.log(btns[0].__reactProps$jclumx9nnq9.onClick)
  // btns[0].addEventListener('click', () => {
  //   handleClick('h')
  // })
  return (
    <>
      <h1>shop</h1>
      <h3>please choose your favorite products below</h3>
      <button className="products-btns" onClick={() => handleClick(1)}>duffel bag</button>
      <button className="products-btns" onClick={() => handleClick(2)}>work bag</button>
      <button className="products-btns" onClick={() => handleClick(3)}>baseball bag</button>
      <button className="products-btns" onClick={() => handleClick(4)}>travel bag</button>
      <button className="products-btns" onClick={() => handleClick(5)}>women's bag</button>
     
      {/* <img src={status ? productImage : ""} style={{width: '250px',height:'240px'}}></img> */}
      {status ? <h1 style={{width:'200px'}}>{`${[...productName]}`}</h1> : null}
      <p>{status ? `${productCost} $` : null}</p>
      <button className="btns" onClick={() => {
        productCost.map((cost) => {
          sum += cost;
          setSum(sum)
          })
        // console.log(sum)
      }}>sum</button>
      <h4>{ sum} $</h4>
      {/* {products.map(() => (
        <> 
          
        </>
      )
       
      )} */}
      
    </>
  )

  setStatus(false)
}
export default ShoppingCart;