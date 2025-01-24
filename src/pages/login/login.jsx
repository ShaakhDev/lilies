import React, { useState } from "react";
import login from "../../../public/login.png?url";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/service";

export const Login = () => {
  const navigate = useNavigate();
  const [showed, setShowed] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      const response = await api.post("/sign-in", JSON.stringify(formdata));
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex bg-white">
      <img className="w-1/2" src={login} alt="" />

      <div className=" w-[448px] m-auto h-full flex flex-col justify-center items-center ">
        <h1 className="text-[27px] text-darkGreen font-[600] mb-[60px]">
          Welcome Back!
        </h1>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Your Email address "
          className="px-[25px] py-5 border-[1px] w-[488px] text-black rounded-[5px] border-[#FBDDBB82]  outline-none bg-white"
        />
        <div className="border-[1px] w-[488px] rounded-[5px]  border-[#FBDDBB82] my-[50px] flex justify-between items-center pr-[25px]">
          <input
            name="password"
            onChange={handleChange}
            type={`${showed ? "text" : "password"}`}
            placeholder="Your Password"
            className="pl-[25px] py-5 w-4/5 text-black  outline-none bg-white"
          />
          <button onClick={() => setShowed(!showed)}>show</button>
        </div>
        <button
          className="bg-darkGreen px-[25px] py-5 border-[1px] w-[488px] rounded-[5px] text-center text-[18px] font-[500] text-[#FBDDBB] mb-[35px] "
          onClick={onSubmit}
        >
          LOGIN
        </button>
        <div className="flex justify-between w-[488px]">
          <Link to={"/signup"} className="text-[#00302EE8]">
            Create an account
          </Link>
          <Link className="text-[#00302EE8]">Forgot Passoword</Link>
        </div>
      </div>
    </div>
  );
};
