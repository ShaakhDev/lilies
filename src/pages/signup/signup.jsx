import React, { useState } from "react";
import signup from "../../../public/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/service";

export const Signup = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const response = await api.post("/sign-up", JSON.stringify(formdata));
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex ">
        <img className="w-1/2" src={signup} alt="" />

        <div className=" w-[448px] m-auto h-full flex flex-col justify-center items-center ">
          <h1 className="text-[27px] text-darkGreen font-[600] mb-[60px]">
            Welcome to Lilies!
          </h1>
          <input
            name="name"
            value={formdata.name}
            onChange={handleInput}
            type="text"
            placeholder="Your First Name"
            className="px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82] mb-[50px]  outline-none"
          />
          <input
            name="email"
            value={formdata.email}
            onChange={handleInput}
            type="email"
            placeholder="Your Email address "
            className="px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82]  outline-none"
          />
          <div className="border-[1px] w-[488px] rounded-[5px] border-[#FBDDBB82] my-[50px] flex justify-between items-center pr-[25px]">
            <input
              name="password"
              value={formdata.password}
              onChange={handleInput}
              type="password"
              placeholder="Your Password"
              className="pl-[25px] py-5 w-4/5  outline-none"
            />
            <button>show</button>
          </div>
          <button
            onClick={onSubmit}
            to={"/dashboard"}
            className="bg-darkGreen px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] text-center text-[18px] font-[500] text-[#FBDDBB] mb-[35px] "
          >
            SIGN UP
          </button>
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
