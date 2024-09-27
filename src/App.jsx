import React from "react";
import Banners from "./banner-components/banner";
import CartPage from "./cart-components/cartPage";
import OrderPage from "./order-components/orderPage";
import HomeSlider from "./homepage-components/homeSlider";
import ProductPage from "./product-component/productPage";
import ProductPopup from "./product-component/productPopup";
import AdminDetails from "./Admin/adminPage";
import AdminPage from "./Admin/adminPage";
import AdminDashboard from "./admin-dashboard/AdminDashboard";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div className="ml-[15%] mt-20">
        <Banners />
        <CartPage />
        <OrderPage />
        <HomeSlider />
        <ProductPage />
        <ProductPopup />
        <AdminPage />
        <AdminDashboard />
      </div>

      <Navbar />
      <Header />
    </>
  );
};

export default App;
