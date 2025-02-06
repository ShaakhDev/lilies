import React from "react";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const navigate = useNavigate();

  const OnLogin = () => {
    localStorage.setItem("token", "token");
    navigate("/login", { replace: true });
  };
  return (
    <main className="flex text-center">
      <div>
        <img className="w-[764px] h-screen" src="./public/gruppo.png" alt="" />
      </div>
      <div className="m-auto">
        <div className="pb-[61px]">
          <h1 className="text-3xl font-semibold text-[#00302E]  ">
            Welcome to Lilies!
          </h1>
        </div>
        <div className="flex flex-col gap-[48px]">
          <input
            className="py-[19px] border-[1px] border-[#fbddbbb7] w-[488px] rounded-[5px] flex justify-start pl-[25px] cursor-pointer list-none outline-none"
            type="text"
            placeholder="Your First Name"
          />
          <input
            className="py-[19px] border-[1px] border-[#fbddbbb7] w-[488px] rounded-[5px] flex justify-start pl-[25px] cursor-pointer list-none outline-none"
            type="text"
            placeholder="Your Email address"
          />
          <input
            className="py-[19px] border-[1px] border-[#fbddbbb7] w-[488px] rounded-[5px] flex justify-start pl-[25px] cursor-pointer list-none outline-none"
            type="text"
            placeholder=" Your Password"
          />
          <button className="text-center font-semibold py-[19px] w-[488px] rounded-[5px] flex justify-center bg-[#00302E] text-[#FBDDBB]">
            SIGN UP
          </button>
          <div onClick={OnLogin} className="text-center ">
            <p>
              Already have an account.
              <span className="text-[#00302E] font-bold">LOGIN</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
