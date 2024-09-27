import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { IoFilter, IoNotifications, IoPersonCircle } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { SiTask } from "react-icons/si";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* CONTENT */}
      <section id="content" className="w-full">
        {/* MAIN */}

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold m-8">Dashboard</h1>
        </div>

        {/* Box Info */}
        <ul className="w-[95%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto">
          <li className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="bx bxs-calendar-check text-blue-600 bg-blue-100 p-3 rounded-full">
              <AiFillProduct className="text-3xl" />
            </i>

            <div className="ml-4">
              <h3 className="text-xl font-semibold">1020</h3>
              <p>Total Products</p>
            </div>
          </li>

          <li className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="bx bxs-group text-yellow-600 bg-yellow-100 p-3 rounded-full">
              <SiTask className="text-3xl" />
            </i>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">2834</h3>
              <p>Total Orders</p>
            </div>
          </li>

          <li className="flex items-center bg-white p-6 rounded-lg shadow">
            <i className="bx bxs-dollar-circle text-orange-600 bg-orange-100 p-3 rounded-full">
              <FaShoppingCart className="text-3xl" />
            </i>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">543</h3>
              <p>Cart</p>
            </div>
          </li>
        </ul>
        <div className="flex w-[95%] mx-auto">
          {/*Recent Orders Table */}
          <div className="m-8 w-[60%]">
            <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Recent Orders</h3>
                <div className="flex items-center space-x-2">
                  <i>
                    <FcSearch />
                  </i>
                  <i>
                    <IoFilter />
                  </i>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th>User id</th>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className=" py-3">
                      <p>12345 : </p>
                    </td>
                    <td className="py-3">
                      <p>Biswajeet</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="text-green-600 bg-green-100 py-1 px-3 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className=" py-3">
                      <p>67890 :</p>
                    </td>
                    <td className=" py-3">
                      <p>Biswajeet</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="text-yellow-600 bg-yellow-100 py-1 px-3 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                  {/* Add more rows as necessary */}
                </tbody>
              </table>
            </div>
          </div>
          {/* New User */}
          <div className="mt-8 w-[40%] ">
            <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
              <h3 className="text-xl font-semibold">New Users</h3>

              <section className="w-full my-8 ">
                <div className="flex flex-col justify-center gap-12 my-4">
                  <div className="flex items-center justify-around gap-4">
                    <div>
                      <i className=" text-yellow-600 bg-yellow-100 p-3 rounded-full">
                        pic
                      </i>
                    </div>
                    <div>Biswajeet</div>
                    <div>UUID1234</div>
                  </div>
                  <div className="flex items-center justify-around gap-4">
                    <div>
                      <i className=" text-green-600 bg-green-100 p-3 rounded-full">
                        pic
                      </i>
                    </div>
                    <div>Biswajeet</div>
                    <div>UUID5875</div>
                  </div>
                  <div className="flex items-center justify-around gap-4">
                    <div>
                      <i className=" text-red-600 bg-red-100 p-3 rounded-full">
                        pic
                      </i>
                    </div>
                    <div>Biswajeet</div>
                    <div>UUID5875</div>
                  </div>
                  {/* Add more rows as necessary */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
