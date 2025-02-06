import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const onDashboard = () => {
    localStorage.setItem("token", "token");
    navigate("/dashboard", { replace: true });
  };  

  const onProfile = () => {
    localStorage.setItem("token", "token");
    navigate("/profile", { replace: true });
  };

  const onCart = () => {
    localStorage.setItem("token", "token");
    navigate("/cart", { replace: true });
  };

  const onOrders = () => {
    localStorage.setItem("token", "token");
    navigate("/orders", { replace: true });
  };
  const handleChangeStyle = (index) => {
    setActive((prevActive) => (prevActive === index ? null : index));
  };
  const additionalAction = (index) => {
    console.log(` ${index} `);
  };

  const handleClick1 = (index) => {
    handleChangeStyle(index);
    onDashboard(index);
    additionalAction(index);
  };
  const handleClick2 = (index) => {
    handleChangeStyle(index);
    onProfile(index);
    additionalAction(index);
  };
  const handleClick3 = (index) => {
    handleChangeStyle(index);
    onOrders(index);
    additionalAction(index);
  };
  const handleClick4 = (index) => {
    handleChangeStyle(index);
    onCart(index);
    additionalAction(index);
  };

  const baseClass =
    "flex gap-5 items-center rounded-2xl mx-7 py-[13px] pl-[15px] pr-[107px] cursor-pointer transition-all duration-300      ";
  return (
    <>
      <div className="w-[320px] h-screen bg-[#FBFBFB] sticky top-0">
        <div className="flex gap-5 items-center px-14 py-28">
          <img src="./group2.svg" alt="" />
          <h1 className="text-4xl font-bold text-[#00302E] ">Lilies</h1>
        </div>
        <nav className="flex flex-col gap-5">
          <ul>
            <div
              onClick={() => handleClick1(0)}
              className={`${baseClass} ${
                active === 0
                  ? "bg-[#EFEFEF] text-[#000000]"
                  : "bg-[#FBFBFB] text-[#707070]"  
              }`}
            >
              <img src="./ii.svg" alt="" />
              <li>Dashboard</li>
            </div>
            <div
              onClick={() => handleClick2(1)}
              className={`${baseClass} ${
                active === 1
                  ? "bg-[#EFEFEF] text-[#000000]"
                  : "bg-[#FBFBFB] text-[#707070]"
              }`}
            >
              <img src="./i.svg" alt="" />
              <li>Your Profile</li>
            </div>
            <div
              onClick={() => handleClick3(2)}
              className={`${baseClass} ${
                active === 2
                  ? "bg-[#EFEFEF] text-[#000000]"
                  : "bg-[#FBFBFB] text-[#707070]"
              }`}
            >
              <img src="./iii.svg" alt="" />
              <li>Orders</li>
            </div>
            <div
              onClick={() => handleClick4(3)}
              className={`${baseClass} ${
                active === 3
                  ? "bg-[#EFEFEF] text-[#000000]"
                  : "bg-[#FBFBFB] text-[#707070]"
              }`}
            >
              <img src="./Group.svg" alt="" />
              <li>Your Cart</li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
