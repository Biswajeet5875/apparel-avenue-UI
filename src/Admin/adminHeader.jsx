import React, { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdClose } from "react-icons/io";

const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <section className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg mb-8 px-16">
        <div className="flex items-center">
          <img
            className="w-24 h-24 rounded-full mr-6"
            src="https://via.placeholder.com/100"
            alt="Admin Profile"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Smruti Ranjan Nayak
            </h1>
            <p className="text-gray-600">smruti@jt.com</p>
            <p className="text-gray-600">Admin Role</p>
          </div>
        </div>

        {/* Dropdown Toggle Icon */}
        <div onClick={toggleDropdown} className="cursor-pointer">
          {isDropdownOpen ? (
            <IoMdClose className="text-2xl text-red-600" />
          ) : (
            <IoMdArrowDropdownCircle className="text-2xl text-gray-800" />
          )}
        </div>
      </section>

      {/* Dropdown Section */}
      {isDropdownOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 px-16">
          {/* Personal Details */}
          <section className="h-[450px] grid grid-cols-3 items-center justify-between">
            <section id="personal-details" className="h-full">
              <div class="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">
                  Personal Details
                </h2>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">Full Name</h3>
                  <p class="text-gray-600">Smruti Ranjan Nayak</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Date of Birth
                  </h3>
                  <p class="text-gray-600">15th May 1990</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Marital Status
                  </h3>
                  <p class="text-gray-600">Single</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Nationality
                  </h3>
                  <p class="text-gray-600">Indian</p>
                </div>
              </div>
            </section>
            <section id="contact-details" className="h-full">
              <div class="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">
                  Contact Details
                </h2>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">Email</h3>
                  <p class="text-gray-600">smruti@jt.com</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Phone Number
                  </h3>
                  <p class="text-gray-600">+91-9876543210</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Alternate Phone Number
                  </h3>
                  <p class="text-gray-600">+91-1234567890</p>
                </div>

                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-700">Address</h3>
                  <p class="text-gray-600">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </section>
            <section id="salary-details" className="h-full">
              <div class="w-[95%] mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold mb-4 text-gray-800">
                  Salary Details
                </h2>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Payment Details
                  </h2>
                  <p className="text-gray-600">Bank: SWISH Bank</p>
                  <p className="text-gray-600">Branch Name: Vegas st.</p>
                  <p className="text-gray-600">Account Number: XXXXXXXX1234</p>
                  <p className="text-gray-600">IFSC Code: HDFC0000123</p>
                </div>

                <div class=" pt-3">
                  <h3 class="text-lg font-semibold text-gray-700">
                    Net Salary
                  </h3>
                  <p class="text-gray-800 font-bold">₹56,300,000,999</p>
                  <p className="text-gray-600">Allowance: 2000585</p>
                </div>
              </div>
            </section>
          </section>

          {/* Statistic Growth Graph (Placeholder) */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Statistic Growth
            </h2>
            <div className=" flex items-center justify-center">
              <img
                className="h-60 w-[80%]"
                src="https://media.licdn.com/dms/image/C4E12AQEbtxU4l94q_Q/article-cover_image-shrink_600_2000/0/1520047578667?e=2147483647&v=beta&t=T8pY_-zwdk8evlzEsF2I_SjpGOAORw_bFlIkbvlr7bY"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
