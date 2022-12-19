import "./App.css";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Payment from "./components/Payment";


function App() {
  return (
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route exact patch="/payment" component={Payment}/>
    </Switch>
  );
}  

export default App;
