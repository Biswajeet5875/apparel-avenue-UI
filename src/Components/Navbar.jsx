import { AiFillProduct } from "react-icons/ai";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { PiFlagBannerFill } from "react-icons/pi";
import { SiTask } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <section
        id="sidebar"
        className="fixed top-0 left-0 w-[15%] h-full bg-green-100 z-50 transition-all "
      >
        <div className=" text-lg text-orange-600 w-20 h-20 rounded-full bg-white p-4 m-8">
          logo
        </div>

        <ul className="mt-12 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold no-underline text-black "
            >
              <i className="bx bxs-dashboard">
                <FaHome />
              </i>
              <span className="ml-4">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold no-underline text-black "
            >
              <i className="bx bxs-shopping-bag-alt">
                <MdDashboard />
              </i>
              <span className="ml-4">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold   no-underline text-black "
            >
              <i className="bx bxs-doughnut-chart">
                <PiFlagBannerFill />
              </i>
              <span className="ml-4">Banner</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold   no-underline text-black "
            >
              <i className="bx bxs-message-dots">
                <SiTask />
              </i>
              <span className="ml-4">Order</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold   no-underline text-black "
            >
              <i className="bx bxs-group">
                <AiFillProduct />
              </i>
              <span className="ml-4">Product</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-base font-bold   no-underline text-black "
            >
              <i className="bx bxs-cog">
                <FaShoppingCart />
              </i>
              <span className="ml-4">Cart</span>
            </a>
          </li>
        </ul>
        <ul className="mt-8 bottom-4 fixed">
          <li>
            <a
              href="#"
              className="flex items-center px-6 py-3 no-underline font-bold text-red-500"
            >
              <i className="bx bxs-log-out-circle font-extrabold">
                <FiLogOut className="text-xl" />
              </i>
              <span className="ml-4">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      ;
    </>
  );
};

export default Navbar;
