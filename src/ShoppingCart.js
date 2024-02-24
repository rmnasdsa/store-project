import { products } from "./Data";
import { useState, useEffect } from "react";


const ShoppingCart = () => { 

  const btns = document.querySelectorAll('.btns');
  const [productName, setProductName] = useState([]);
  const [productImage, setProductImage] = useState();
  const [productCost, setProductCost] = useState([]);
  let [sum, setSum] = useState(0);
  let [count, setCount] = useState([0,0,0,0,0]);
  const [status, setStatus] = useState(false);

  const remove = (id) => {
    if (id == 1) {
      const filter = productName.filter((name) => {
        // console.log(name[0])
        return name !== products[0].name;
      })
      console.log(filter);
      setProductName(filter);
      // setProductName([...productName ,null, null])
      const index = productName.findIndex((name) => {
        return name == products[0].name;
      });
      console.log(index);
    }
    if (id == 2) {
      const filter = productName.filter((name) => {
        return name !== products[1].name;
      })
      setProductName(filter);
    }
    if (id == 3) {
      const filter = productName.filter((name) => {
        return name !== products[2].name;
      })
      setProductName(filter);
    }
    if (id == 4) {
      const filter = productName.filter((name) => {
        return name !== products[3].name;
      })
      setProductName(filter);
    }
    if (id == 5) {
      const filter = productName.filter((name) => {
        return name !== products[4].name;
      })
      setProductName(filter);
    }
  }
  const handleClick = (id) => {
    if (id == 1) {
      count[0]++;
      setProductName([...productName, products[0].name, count[0]]);
      setProductImage([products[0].img]);
      setProductCost([...productCost, products[0].cost]);
      setStatus(true);
    }
    if (id == 2) {
      count[1]++;
      setProductName([...productName, products[1].name, count[1]]);
      setProductImage([products[1].img]);
      setProductCost([...productCost, products[1].cost]);
      setStatus(true);
    }
    if (id == 3) {
      count[2]++;
      setProductName([...productName, products[2].name, count[2]]);
      setProductImage([products[2].img]);
      setProductCost([...productCost, products[2].cost]);
      setStatus(true);
    }
    if (id == 4) {
      count[3]++;
      setProductName([...productName, products[3].name, count[3]]);
      setProductImage([products[3].img]);
      setProductCost([...productCost, products[3].cost]);
      setStatus(true);
    }
    if (id == 5) {
      count[4]++;
      setProductName([...productName, products[4].name, count[4]]);
      setProductImage([products[4].img]);
      setProductCost([...productCost, products[4].cost]);
      setStatus(true);
    }
    console.log(productName)
    // console.log(productCost)
  }


  // for (let i = 0; i < productName.length; i++){
  //   if (productName.includes(products[0].name)) {
  //     count++;
  //     console.log(count);
  //   }
  //   // if (count > 1) {
  //   //   productName.pop();
  //   // }
  // }


  // console.log(btns[0].__reactProps$jclumx9nnq9.onClick)
  // btns[0].addEventListener('click', () => {
  //   handleClick('h')
  // })
  return (
    <div className="shop">
      <h1 className="same-changes">shop</h1>
      <h3 className="same-changes">please choose your favorite products below</h3>
      <button className="products-btns" onClick={() => handleClick(1)}>duffel bag</button>
      <button className="products-btns" onClick={() => handleClick(2)}>work bag</button>
      <button className="products-btns" onClick={() => handleClick(3)}>baseball bag</button>
      <button className="products-btns" onClick={() => handleClick(4)}>travel bag</button>
      <button className="products-btns" onClick={() => handleClick(5)}>women's bag</button><br></br>
      {products.map(({id}) => (
        <>
          <button className="change-items" style={{fontSize:"18px"}} >-</button>
          <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>
      ))}
      {/* <img src={status ? productImage : ""} style={{width: '250px',height:'240px'}}></img> */}
      {status ? <h1 style={{ width: '300px' }} className="same-changes">{`${[...productName]}`} </h1> : null}
      
      <p className="same-changes">{status ? `${productCost} $` : null}</p>
      <button className="btns" onClick={() => {
        productCost.map((cost) => {
          sum += cost;
          setSum(sum)
          })
        // console.log(sum)
      }}>sum</button>
      <h4 className="same-changes">{ sum} $</h4>
    </div>
  )

  setStatus(false)
}
export default ShoppingCart;