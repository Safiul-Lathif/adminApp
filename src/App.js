import React from "react";
import Sidebar from "./components/sideBar/SideBar";
import Topbar from "./components/topBar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import NotificationPage from "./pages/notificationPage/NotificationPage";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/users" component={UserList} />
          <Route path="/user/:userID" component={User} />
          <Route path="/newuser" component={NewUser} />
          <Route path="/products" component={ProductList}/>
          <Route path="/product/:ProductID" component={Product} />
          <Route path="/newProduct" component={NewProduct} />
          <Route path="/NotificationPage" component={NotificationPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
