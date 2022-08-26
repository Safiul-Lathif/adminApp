import React from "react";
import Sidebar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/TopBar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productlist/productList";
import Product from "./pages/productlist/productList";
import NotificationPage from "./pages/notificationpage/NotificationPage";
import Orders from "./pages/orderlist/order";
import NewProducts from "./pages/newproduct/NewProduct";
import ProductEdit from "./pages/productedit/productEdir";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/users" component={Orders} />
          <Route path="/products" component={ProductList}/>
          <Route path="/product/:ProductID" component={Product} />
          <Route path="/newProduct" component={NewProducts} />
          <Route path="/NotificationPage" component={NotificationPage}/>
          <Route path="/ProductEdit" component={ProductEdit}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
