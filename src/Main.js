import { products } from "./Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImHeart } from "react-icons/im";
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
      <Link to='/shop' target="_black" className="link">click for shopping here</Link>
      <p style={{ textAlign: 'center', fontSize: '20px' }}> 
            thanks for your trust <ImHeart /><ImHeart /> </p>
      
    </>
  )
 }
export default Main;