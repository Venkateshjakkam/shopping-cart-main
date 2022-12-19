// import React from "react";
// import { TiArrowBack } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {Modal} from "reactstrap";


// export const Modal = () => {
// 	const cart = useSelector((state) => state);
//   console.log(cart);
//   const dispatch = useDispatch();
//   return (
// 	<Modal>
// 		<div className="cart"> 
//         {.map((item) => {
//           return (
//             <div className="cartcad" key={item.id}>
//               <div>
//                 <img src={` ../images/${item.image}`} alt="cart" />
//                  <h4>{item.name}</h4>
//                 <p> price: Rs {item.price}</p>
//                 <p>amount : Rs {item.price * item.quantity}</p>

//                 <button
//                   onClick={() => dispatch({ type: "REMOVE", payload: item })}
//                 >
//                   remove
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={() => dispatch({ type: "INCREASE", payload: item })}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => {
//                     if (item.quantity > 1) {
//                       dispatch({ type: "DECREASE", payload: item });
//                     } else {
//                       dispatch({ type: "REMOVE", payload: item });
//                     }
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
           
//           );
//           })}
//       </div>
// 	</Modal>
	
//   )
// }
