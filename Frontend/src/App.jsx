
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import ProductList from "./pages/ProductList";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
//import { HomeMax } from "@mui/icons-material";

import Success from "./pages/Success";

const App = () => {
  const user = useSelector((state) => state.user.currentUser); 
  const userinfo = JSON.parse(localStorage.getItem("persist:root"))?.user;
  console.log(userinfo.username);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
            <Route path="/login">{user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        <Route path="*"> <ErrorPage/> </Route>
      </Switch>
    </Router>
  );
};

export default App;
