import React from "react";
import Navbar from "./dashboard-components/Navbar";
import Main from "./dashboard-components/Main";
import Banners from "./banner-components/banner";
import CartPage from "./cart-components/cartPage";
import OrderPage from "./order-components/orderPage";
import HomeSlider from "./homepage-components/homeSlider";
import ProductPage from "./product-component/productPage";
import ProductPopup from "./product-component/productPopup";

const App = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <Main />
      </div>
      <Banners />
      <CartPage />
      <OrderPage />
      <HomeSlider />
      <ProductPage />
      <ProductPopup />
    </>
  );
};

export default App;
