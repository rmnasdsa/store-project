import { products } from "./Data";
import { useState } from "react";
const Main = () => {

  return (
    <>
      <div className="container">
        {products.map(({ img, name, cost, id }) => (
          <div className="product" key={id}>
            <img src={img} style={{ width: '250px',height:'240px' }}></img>
            <h1>{name}</h1>
            <h3>{cost} $</h3>  
          </div>
        ))}
      </div>

    </>
  )
 }
export default Main;