import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Popup = () => {
	const cart = useSelector((state) => state);
	console.log(cart);
	const dispatch = useDispatch();
	const addition = (acc, currentvalue) => {
		return acc + ((currentvalue.price - (currentvalue.price * 0.01 * currentvalue.discount)) * currentvalue.quantity);
	};
	const total = cart.reduce(addition, 0);

	const cartItem = (acc, currentitem) => {
		return acc + currentitem.quantity
	}
	const totalItem = cart.reduce(cartItem, 0)
	console.log(cart);
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">

				</div>
				<div>
				<div className="cart">
        {cart.map((item) => {
          return (     
            <div className="cartcad" key={item.id}>
              <div>
                <img src={` ../images/${item.image}`} alt="cart" />
                <h4>{item.name}</h4>
                <p> price: Rs {item.price}</p>
                <p>amount : Rs {(item.price-(item.price*0.01*item.discount ))* item.quantity}</p>

                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
           
          );
          })}
      </div>
				</div>
				<div>
					<h5>Total-price :Rs.{total}</h5>
					<h5>Total-item :{totalItem}</h5>
				<Link to="/products">
					<button onClick={()=>{alert("Trancation Successful")}} style={{backgroundColor:'rgb(101, 207, 14)',width:'150px',height:'45px',cursor:'pointer',color:'white',borderRadius:'8px',marginLeft:'155px'}}> Confirm </button>
				</Link>
				</div>
			</div>
		</div>

	);
}

export default Popup;