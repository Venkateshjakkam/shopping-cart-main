import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";


const Payment = () => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);


  const cartItem = (acc,currentitem) => {
    return acc + currentitem.quantity 
  }
   const totalItem = cart.reduce(cartItem,0)
     
  
  return (
	<div>
    <div className="cartcontainer">
    <Link to="/products">
        <TiArrowBack />
      </Link>
      </div>
   <center>
    {<h3> You have placed the order successfuly and <br></br><h1>The total Amount is:{total}</h1> <br></br><h1>Total items in cart is: {totalItem}</h1></h3>}
    </center>
    
  </div>
  )
}

export default Payment;
