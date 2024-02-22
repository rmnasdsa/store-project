import { products } from "./Data";
const Main = () => {

  return (
    <>
      <div className="container">
        {products.map(({ img, name, cost, id }) => (
          <div className="product">
            <img src={img} style={{ width: '250px',height:'240px' }}></img>
            <h1>{name}</h1>
            <h3>{cost} $</h3>
            <button className="btns">select</button>
          </div>
        ))}
      </div>

    </>
  )
 }
export default Main;