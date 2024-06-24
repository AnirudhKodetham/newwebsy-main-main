import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.js";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const userName = sessionStorage.getItem("username")
  const password = sessionStorage.getItem("password")
  const isUserlogin = userName && password
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && isUserlogin && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
