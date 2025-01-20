import React from "react";
import signup from "../../../public/signup.png";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <div className="w-full h-screen flex ">
        <img className="w-1/2" src={signup} alt="" />

        <div className=" w-[448px] m-auto h-full flex flex-col justify-center items-center ">
          <h1 className="text-[27px] text-darkGreen font-[600] mb-[60px]">
            Welcome to Lilies!
          </h1>
          <input
            type="text"
            placeholder="Your First Name "
            className="px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82] mb-[50px]  outline-none"
          />
          <input
            type="email"
            placeholder="Your Email address "
            className="px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82]  outline-none"
          />
          <div className="border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82] my-[50px] flex justify-between items-center pr-[25px]">
            <input
              type="password"
              placeholder="Your Password"
              className="pl-[25px] py-5 w-4/5  outline-none"
            />
            <button>show</button>
          </div>
          <Link
            to={"/dashboard"}
            className="bg-darkGreen px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] text-center text-[18px] font-[500] text-[#FBDDBB] mb-[35px] ">
            SIGN UP
          </Link>
          <div className="flex justify-between  gap-1">
            <p className="text-[#00302EE8] font-[400]">
              Already have an account.{" "}
            </p>
            <Link to={"/login"} className="text-[#00302EE8] font-[700]">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
