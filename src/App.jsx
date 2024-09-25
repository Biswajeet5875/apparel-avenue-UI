import React from "react";
import Navbar from "./dashboard-components/Navbar";
import Main from "./dashboard-components/Main";
import Banners from "./banner-components/banner";
import CartPage from "./cart-components/cartPage";
import OrderPage from "./order-components/orderPage";
import HomeSlider from "./homepage-components/homeSlider";

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
    </>
  );
};

export default App;
