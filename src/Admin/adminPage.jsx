import React from "react";
import AdminHeader from "./adminHeader";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* AdminHeader */}
        <AdminHeader />

        {/* Dashboard Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Orders Panel */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            <p className="text-gray-600">Total Orders: 150</p>
            <p className="text-gray-600">Pending Orders: 10</p>
            <p className="text-gray-600">Completed Orders: 130</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              View Orders
            </button>
          </div>

          {/* Products Panel */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <p className="text-gray-600">Total Products: 350</p>
            <p className="text-gray-600">Active Products: 320</p>
            <p className="text-gray-600">Out of Stock: 30</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              View Products
            </button>
          </div>

          {/* Users Panel */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <p className="text-gray-600">Total Users: 1200</p>
            <p className="text-gray-600">New Users: 50</p>
            <p className="text-gray-600">Active Users: 1100</p>
            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
              View Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
