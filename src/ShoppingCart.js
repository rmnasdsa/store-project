import { products } from "./Data";
import { useState, useEffect } from "react";


const ShoppingCart = () => { 

  const btns = document.querySelectorAll('.btns');
  const [productName, setProductName] = useState([]);
  const [productImage, setProductImage] = useState();
  const [productCost, setProductCost] = useState([]);
  let [sum, setSum] = useState(0);
  let [count, setCount] = useState([0,0,0,0,0]);
  let [status, setStatus] = useState([true,true,true,true,true]);

  const remove = (id) => {
    if (id == 1) {

      // const find = productName.find((name) => {
      //   return name == count[0];
      // })
      // // console.log(find);
      // const index = productName.findIndex((name) => {
      //   return name == products[0].name;
      // });
      // console.log(index);
      const indexOf = productName.indexOf(count[0]);
      console.log(indexOf);
      const filterProductName = productName.filter((name) => {
        // console.log(name[0]);
        // const counter = productName.includes(count[0]);
        // console.log(counter);
        count[0] = 0;
        return (name !== products[0].name && name !== productName[indexOf]);
        // && name !== productName[index + 1]
      })
      // console.log(filter);
      setProductName(filterProductName);
      // setProductName([...productName ,null, null]);
      const filterProductCost = productCost.filter((cost) => {
        return cost !== products[0].cost;
      });
      setProductCost([filterProductCost, 0]);
     
     
    }
    if (id == 2) {
      const indexOf = productName.indexOf(count[1]);
      const filterProductName = productName.filter((name) => {
        count[1] = 0;
        return (name !== products[1].name && name !== productName[indexOf]);
      })
      setProductName([]);
      const filterProductCost = productCost.filter((cost) => {
        return cost !== products[1].cost;
      });
      setProductCost([filterProductCost, 0]);
    }
    if (id == 3) {
      const indexOf = productName.indexOf(count[2]);
      const filterProductName = productName.filter((name) => {
        count[2] = 0;
        return (name !== products[2].name && name !== productName[indexOf]);
      })
      setProductName(filterProductName);
      const filterProductCost = productCost.filter((cost) => {
        return cost !== products[2].cost;
      });
      setProductCost([filterProductCost, 0]);
     
    }
    if (id == 4) {
      const indexOf = productName.indexOf(count[3]);
      const filterProductName = productName.filter((name) => {
        count[3] = 0;
        return (name !== products[3].name && name !== productName[indexOf]);
      })
      setProductName(filterProductName);
      const filterProductCost = productCost.filter((cost) => {
        return cost !== products[3].cost;
      });
      setProductCost([filterProductCost, 0]);
    }
    if (id == 5) {
      const indexOf = productName.indexOf(count[4]);
      const filterProductName = productName.filter((name) => {
        count[4] = 0;
        return (name !== products[4].name && name !== productName[indexOf]);
      })
      setProductName(filterProductName);
      const filterProductCost = productCost.filter((cost) => {
        return cost !== products[4].cost;
      });
      setProductCost([filterProductCost, 0]);
    }
  }
  const reduce = (id) => {
    if (id == 1) {
      
      const lastItem = productName[productName.length - 1];
      // const index = productName.indexOf((name) => {
      //   return 0
      // });
      // console.log(index);
      //  productName.splice(productName.length - 1, lastItem, count[0]--);
      count[0]--;
      setProductName([...productName, products[0].name, count[0]]);
      if (count[0] < 1) {  
        setProductName([...productName]);
      
      }
      const index = productCost.findIndex((cost) => {
        return cost === products[0].cost;
      });
      productCost.splice(index, 1);
    }
    if (id == 2) {
      count[1]--;
      setProductName([...productName, products[1].name, count[1]]);
      if (count[1] < 1) {
        setProductName([...productName]);
      
      };
      const index = productCost.findIndex((cost) => {
        return cost === products[1].cost;
      });
      // console.log(index)
      // const filter = productCost.filter((cost) => {
      //   return cost !== productCost[index];
      // });
      // setProductCost(filter);
      productCost.splice(index, 1);
    }
    if (id == 3) {
      count[2]--;
      setProductName([...productName, products[2].name, count[2]]);
      if (count[2] < 1) {  
        setProductName([...productName]);
      
      }
      const index = productCost.findIndex((cost) => {
        return cost === products[2].cost;
      });
      productCost.splice(index, 1);
    }
    if (id == 4) {
      count[3]--;
      setProductName([...productName, products[3].name, count[3]]);
      if (count[3] < 1) {  
        setProductName([...productName]);
      
      }
      const index = productCost.findIndex((cost) => {
        return cost === products[3].cost;
      });
      productCost.splice(index, 1);
    }
    if (id == 5) {
      count[4]--;
      setProductName([...productName, products[4].name, count[4]]);
      if (count[4] < 1) {  
        setProductName([...productName]);
      
      }
      const index = productCost.findIndex((cost) => {
        return cost === products[4].cost;
      });
      productCost.splice(index, 1);
    }
  }
  const handleClick = (id) => {
    if (id == 1) {
      count[0]++;
      if (count[0] == 0) {
        count[0]++;
        setProductName([ products[0].name, count[0]]);
      }
      setProductName([ products[0].name, count[0]]);
      setProductImage([products[0].img]);
      setProductCost([...productCost, products[0].cost]);
      
    }
    if (id == 2) {
      count[1]++;
      if (count[1] == 0) {
        count[1]++;
        setProductName([ products[1].name, count[1]]);
      }
      setProductName([ products[1].name, count[1]]);
      setProductImage([products[1].img]);
      setProductCost([...productCost, products[1].cost]);
      
    }
    if (id == 3) {
      count[2]++;
      if (count[2] == 0) {
        count[2]++;
        setProductName([ products[2].name, count[2]]);
      }
      setProductName([ products[2].name, count[2]]);
      setProductImage([products[2].img]);
      setProductCost([...productCost, products[2].cost]);
      
    }
    if (id == 4) {
      count[3]++;
      if (count[3] == 0) {
        count[3]++;
        setProductName([ products[3].name, count[3]]);
      }
      setProductName([ products[3].name, count[3]]);
      setProductImage([products[3].img]);
      setProductCost([...productCost, products[3].cost]);
      
    }
    if (id == 5) {
      count[4]++;
      if (count[4] == 0) {
        count[4]++;
        setProductName([ products[4].name, count[4]]);
      }
      setProductName([ products[4].name, count[4]]);
      setProductImage([products[4].img]);
      setProductCost([...productCost, products[4].cost]);
      
    }
    console.log(productName)
  }


  const findProducts = (e) => {
    if (e.target.value.toLowerCase() === products[0].name) {
      setStatus([true, false, false, false, false]);  
    }
    if (e.target.value.toLowerCase() === products[1].name) {
      setStatus([false, true, false, false, false]);  
    }
    if (e.target.value.toLowerCase() === products[2].name) {
      setStatus([false, false, true, false, false]);  
    }
    if (e.target.value.toLowerCase() === products[3].name) {
      setStatus([false, false, false, true, false]);  
    }
    if (e.target.value.toLowerCase() === products[4].name) {
      setStatus([false, false, false, false, true]);  
    }
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
    <>
    <div className="header-img"></div>
    <div className="shop">
        <h1 className="same-changes header-width">shop</h1>
        <input type="text" onChange={findProducts}/>
        <h3 className="same-changes guide-text">please choose your favorite products below</h3>
       {status[0] ? <button className="products-btns" onClick={() => handleClick(1)}>duffel bag</button> : null}
        {status[1] ?<button className="products-btns" onClick={() => handleClick(2)}>work bag</button> : null} 
       {status[2] ? <button className="products-btns" onClick={() => handleClick(3)}>baseball bag</button> : null}
        {status[3] ? <button className="products-btns" onClick={() => handleClick(4)}>travel bag</button>:null}
        {status[4]? <button className="products-btns" onClick={() => handleClick(5)}>women's bag</button>:null}<br></br>
      {products.map(({id}) => (<>
       {id ===1 && status[0] === true ?( <>
          <button className="change-items" style={{fontSize:"18px"}} onClick={() => reduce(id)}>-</button>
          <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>) : null}
         { id ===2 && status[1] === true ?( <>
            <button className="change-items" style={{fontSize:"18px"}} onClick={() => reduce(id)}>-</button>
            <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>) : null}
        { id ===3 && status[2] === true ?( <>
            <button className="change-items" style={{fontSize:"18px"}} onClick={() => reduce(id)}>-</button>
            <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>) : null}
        { id ===4 && status[3] === true ?( <>
            <button className="change-items" style={{fontSize:"18px"}} onClick={() => reduce(id)}>-</button>
            <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>) : null}
        { id ===5 && status[4] === true ?( <>
            <button className="change-items" style={{fontSize:"18px"}} onClick={() => reduce(id)}>-</button>
            <button className="change-items" style={{fontSize:"15px"}} onClick={() => remove(id)}>X</button>
        </>) : null}
        </>
      ))}
      {/* <img src={status ? productImage : ""} style={{width: '250px',height:'240px'}}></img> */}
      {status ? <h1 style={{ width: '300px' }} className="same-changes">{`${productName}`} </h1> : null}
      
      <p className="">{status ? `${productCost} $` : null}</p>
      <button className="btns" onClick={() => {
        productCost.map((cost) => {
          sum += cost;
          setSum(sum)
          })
        // console.log(sum)
      }}>sum</button>
      <h4 className="same-changes payments">{ sum} $</h4>
    </div>
    </>
  )


}
export default ShoppingCart;