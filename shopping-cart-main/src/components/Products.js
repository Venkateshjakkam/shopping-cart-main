import React from "react";
import { Data } from "./Data";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



const Products = () => {
  const cart = useSelector((state) => state);
  const cartItem = (acc,currentitem) => {
    return acc + currentitem.quantity 
  }
   const totalItem = cart.reduce(cartItem,0)
  console.log(cart);
  const dispatch = useDispatch();
 

  return (
    <div>
      <div className="nav">
			<ul>
				<li><a class="active" href="/Home">Home</a></li>
				<li><a href="Electronics">Electronics</a></li>
				<li><a href="/Clothes">Clothes</a></li>
				<li><a href="/Contact">Contact</a></li>
        <h1 style={{color:'rgb(233, 233, 233)'}}>S STORE</h1>
			</ul>
    
		
    <div className="productConatiner">

      <div className="navigation">
        
        <Link to="/cart">
          {totalItem}
          <GiShoppingBag ></GiShoppingBag>
        </Link>
      </div>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p>Rs. {item.price}</p>
              <p>discount:{item.discount*0.01*item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Products;  
