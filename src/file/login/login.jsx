import React from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();

  const OnSign = () => {
    localStorage.setItem("token", "token");
    navigate("/sign", { replace: true });
  };
  return (
    <main className="flex text-center "> 
      <div>
<img className="h-screen  w-[764px]" src="./public/asdf.png" alt="" />
      </div>
      <div className="m-auto">
<div className="pb-[61px]">
<h1 className="text-3xl font-semibold text-[#00302E]  ">Welcome Back!</h1>
</div>
<div className="flex flex-col gap-[48px]">
  <input className="py-[19px] border-[1px] border-[#fbddbbb7] w-[488px] rounded-[5px] flex justify-start pl-[25px] cursor-pointer list-none outline-none" type="text" placeholder="Your Email address" />
  <input className="py-[19px] border-[1px] border-[#fbddbbb7] w-[488px] rounded-[5px] flex justify-start pl-[25px] cursor-pointer list-none outline-none" type="text" placeholder=" Your Password" />
  <button className="text-center py-[19px] w-[488px] rounded-[5px] font-semibold flex justify-center bg-[#00302E] text-[#FBDDBB]">LOGIN</button>
<div className="flex gap-[229px]">
  <p onClick={OnSign}>Create an account</p>
  <p>Forgot a password</p>
</div>
</div>
      </div>
    </main>
  );
};
