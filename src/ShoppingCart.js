import { products } from "./Data";
import { useState, useEffect } from "react";


const ShoppingCart = () => { 

  const btns = document.querySelectorAll('.btns');
  const [productName, setProductName] = useState([]);
  const [productImage, setProductImage] = useState();
  const [productCost, setProductCost] = useState([]);
  let [sum, setSum] = useState(0);
  let [count, setCount] = useState([0, 0, 0, 0, 0]);
  let [mount, setMount] = useState([0, 0, 0, 0, 0]);
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
      // const indexOf = productName.indexOf(products[0].name);
      // console.log(indexOf);
      // const indexOfCount = productName.indexOf(count[0]);
      // const different = indexOfCount - indexOf;
      // productName.splice(indexOf, different)
      // const filterProductName = productName.filter((name) => {
      //   // console.log(name[0]);
      //   // const counter = productName.includes(count[0]);
      //   // console.log(counter);
      //   count[0] = 0;
      //   return (name !== products[0].name);
      //   // && name !== productName[index + 1]
      // })
      // console.log(filter);
     
      // setProductName(filterProductName);
      // productName.splice(indexOf, 1);
      productName.map(({ name }) => {
        if (name === products[0].name) {
          count[0] = 0;
          name = 'item removed';
          setProductName([{ name: name, count: '' }])
        }
        //console.log(name);
      })
  
      // const filterProductCost = productCost.filter((cost) => {
      //   return cost !== products[0].cost;
      // });
      // setProductCost([filterProductCost]);
      // productCost.filter(({ cost ,count}) => {
      //   return cost !== products[0].cost;
      // })

      // const index = productCost.findIndex((product) => {
      //   return product.cost === products[0].cost;
      // })
      // console.log(index);
      // productCost.splice(index, 1);

      const filter = productCost.filter((product) => {
        mount[0] = 0;
        return product.cost !== products[0].cost;
      })
      setProductCost(filter);
      console.log(productCost);
    }
    if (id == 2) {
      productName.map(({ name }) => {
        if (name === products[1].name) {
          count[1] = 0;
          name = 'item removed';
          setProductName([{name:name, count:''}])
        }
      })
      const filter = productCost.filter((product) => {
        mount[1] = 0;
        return product.cost !== products[1].cost;
      })
      setProductCost(filter);
    }
    if (id == 3) {
      productName.map(({ name }) => {
        if (name === products[2].name) {
          count[2] = 0;
          name = 'item removed';
          setProductName([{name:name, count:''}])
         }
      })
      const filter = productCost.filter((product) => {
        mount[2] = 0;
        return product.cost !== products[2].cost;
      })
      setProductCost(filter);
     
    }
    if (id == 4) {
      productName.map(({ name }) => {
        if (name === products[3].name) {
          count[3] = 0;
          name = 'item removed';
          setProductName([{name:name, count:''}])
         }
      })
      const filter = productCost.filter((product) => {
        mount[3] = 0;
        return product.cost !== products[3].cost;
      })
      setProductCost(filter);
    }
    if (id == 5) {
      productName.map(({ name }) => {
        if (name === products[4].name) {
          count[4] = 0;
          name = 'item removed';
          setProductName([{name:name, count:''}])
         }
      })
      const filter = productCost.filter((product) => {
        mount[4] = 0;
        return product.cost !== products[4].cost;
      })
      setProductCost(filter);
    }
  }
  const reduce = (id) => {
    if (id == 1) {
      
      //const lastItem = productName[productName.length - 1];
      // const index = productName.indexOf((name) => {
      //   return 0
      // });
      // console.log(index);
      //  productName.splice(productName.length - 1, lastItem, count[0]--);
      if (count[0] > 1) {
        count[0]--;
        setProductName([{name: products[0].name,count: count[0]}]);
      }
      const filter = productCost.filter((product) => {
        console.log(product);
        return product.cost !== products[0].cost;
      })
      console.log(filter);
      //console.log(mount[0])
       if (mount[0] > 1) {
         mount[0]--;
         filter.push({ cost: products[0].cost, count: mount[0] });
        setProductCost(filter);
      }
      // if (count[0] < 1) {  
      //   console.log('please press remove button...')
        
      // }
      // const index = productCost.findIndex((cost) => {
      //   return cost === products[0].cost;
      // });
      // productCost.splice(index, 1);
    }
    if (id == 2) {
      if (count[1] > 1) {
        count[1]--;
        setProductName([{name: products[1].name,count: count[1]}]);
      }
      
      const filter = productCost.filter((product) => {
        console.log(product);
        return product.cost !== products[1].cost;
      })
       if (mount[1] > 1) {
         mount[1]--;
         filter.push({ cost: products[1].cost, count: mount[1] });
        setProductCost(filter);
      }
      // console.log(index)
      // const filter = productCost.filter((cost) => {
      //   return cost !== productCost[index];
      // });
      // setProductCost(filter);
      //productCost.splice(index, 1);
    }
    if (id == 3) {
      if (count[2] > 1) {
        count[2]--;
        setProductName([{name: products[2].name,count: count[2]}]);
      }
      const filter = productCost.filter((product) => {
        console.log(product);
        return product.cost !== products[2].cost;
      })
       if (mount[2] > 1) {
         mount[2]--;
         filter.push({ cost: products[2].cost, count: mount[2] });
        setProductCost(filter);
      }
    }
    if (id == 4) {
      if (count[3] > 1) {
        count[3]--;
        setProductName([{name: products[3].name,count: count[3]}]);
      }
      const filter = productCost.filter((product) => {
        console.log(product);
        return product.cost !== products[3].cost;
      })
       if (mount[3] > 1) {
         mount[3]--;
         filter.push({ cost: products[3].cost, count: mount[3] });
        setProductCost(filter);
      }
    }
    if (id == 5) {
      if (count[4] > 1) {
        count[4]--;
        setProductName([{name: products[4].name,count: count[4]}]);
      }
      const filter = productCost.filter((product) => {
        console.log(product);
        return product.cost !== products[4].cost;
      })
       if (mount[4] > 1) {
         mount[4]--;
         filter.push({ cost: products[4].cost, count: mount[4] });
        setProductCost(filter);
      }
    }
  }
  const handleClick = (id) => {
    if (id == 1) {
      count[0]++;
      mount[0]++;
      if (count[0] == 0) {
        count[0]++;
        setProductName([ {name :products[0].name, count: count[0]}]);
      }
      setProductName([  {name :products[0].name, count: count[0]}]);
      setProductImage([products[0].img]);
      const filter = productCost.filter((product) => {
        return product.cost !== products[0].cost;
      })
      filter.push({cost:products[0].cost,count:mount[0]})
      setProductCost(filter);
      
    }
    if (id == 2) {
      mount[1]++;
      count[1]++;
      if (count[1] == 0) {
        count[1]++;
        setProductName([  {name :products[1].name, count: count[1]}]);
      }
      setProductName([  {name :products[1].name, count: count[1]}]);
      setProductImage([products[1].img]);
      const filter = productCost.filter((product) => {
        return product.cost !== products[1].cost;
      })
      filter.push({cost:products[1].cost,count:mount[1]})
      setProductCost(filter);
      
    }
    if (id == 3) {
      mount[2]++;
      count[2]++;
      if (count[2] == 0) {
        count[2]++;
        setProductName([ {name :products[2].name, count: count[2]}]);
      }
      setProductName([  {name :products[2].name, count: count[2]}]);
      setProductImage([products[2].img]);
      const filter = productCost.filter((product) => {
        return product.cost !== products[2].cost;
      })
      filter.push({cost:products[2].cost,count:mount[2]})
      setProductCost(filter);
      
    }
    if (id == 4) {
      mount[3]++;
      count[3]++;
      if (count[3] == 0) {
        count[3]++;
        setProductName([  {name :products[3].name, count: count[3]}]);
      }
      setProductName([ {name :products[3].name, count: count[3]}]);
      setProductImage([products[3].img]);
      const filter = productCost.filter((product) => {
        return product.cost !== products[3].cost;
      })
      filter.push({cost:products[3].cost,count:mount[3]})
      setProductCost(filter);  
    }
    if (id == 5) {
      mount[4]++;
      count[4]++;
      if (count[4] == 0) {
        count[4]++;
        setProductName([  {name :products[4].name, count: count[4]}]);
      }
      setProductName([ {name :products[4].name, count: count[4]}]);
      setProductImage([products[4].img]);
      const filter = productCost.filter((product) => {
        return product.cost !== products[4].cost;
      })
      filter.push({cost:products[4].cost,count:mount[4]})
      setProductCost(filter); 
    }
    //console.log(productName)
    console.log(productCost);
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
        <input type="text" onChange={findProducts} placeholder="search products..." className="search-input"/>
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
        {productName.map(({name, count}) => {
          return <>
            <h1 style={{ width: '300px' }} className="same-changes">{`${name} ${count}`} </h1>
          
          </>
        })}
        <div style={{ display: "flex",marginLeft:'25%'}}>
          {productCost.map(({cost,count}) => (
            <>
              <p style={{margin:'10px'}}>{`${cost} $ ${count}x`}</p>
            </>
          ))}
        </div>
        <button className="btns" onClick={() => {
          sum = 0;
          productCost.map(({ cost, count }) => {
          sum += cost * count;
          setSum(sum);
          })
          
        // console.log(sum)
      }}>sum</button>
      <h4 className="same-changes payments">{ sum} $</h4>
    </div>
    </>
  )


}
export default ShoppingCart;