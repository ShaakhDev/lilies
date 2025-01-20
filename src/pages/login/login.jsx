import React, { useState } from "react";
import login from "../../../public/login.png";
import { Link } from "react-router-dom";
export const Login = () => {
  const [showed, setShowed] =useState(false);
  const handleShow=()=>{
    setShowed(!showed)
  }
  return (
    <div className="w-full h-screen flex ">
      <img className="w-1/2" src={login} alt="" />

      <div className=" w-[448px] m-auto h-full flex flex-col justify-center items-center ">
        <h1 className="text-[27px] text-darkGreen font-[600] mb-[60px]">
          Welcome Back!
        </h1>
        <input
          type="email"
          placeholder="Your Email address "
          className="px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82]  outline-none"
        />
        <div className="border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82] my-[50px] flex justify-between items-center pr-[25px]">
          <input
            type={`${showed ? "text" : "password"}` }
            placeholder="Your Password"
            className="pl-[25px] py-5 w-4/5  outline-none"
          />
          <button onClick={()=>setShowed(!showed)}>show</button>
        </div>
        <Link
          to={"/dashboard"}
          className="bg-darkGreen px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] text-center text-[18px] font-[500] text-[#FBDDBB] mb-[35px] ">
          LOGIN
        </Link>
        <div className="flex justify-between w-[488px]">
          <Link to={"/signup"} className="text-[#00302EE8]">Create an account</Link>
          <Link className="text-[#00302EE8]">Forgot Passoword</Link>
        </div>
      </div>
    </div>
  );
};
