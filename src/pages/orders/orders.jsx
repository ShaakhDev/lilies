import React from "react";
import { Link } from "react-router-dom";
import meal from "../../../public/rasm3.svg";
export const Orders = () => {
  return (
    <div className="mx-[60px] my-12 w-[67vw]">
      <h2>Your Orders</h2>
      <div className="flex gap-[630px] items-center mt-6">
        <p>Item</p>
        <ul className="flex gap-[54px]">
          <li>Qty</li>
          <li>Unit Price</li>
          <li>Sub-total </li>
        </ul>
      </div>
      <div className="flex gap-[480px] items-center mt-6 my-12">
        <div className="flex items-center gap-4 ">
          <img className="w-[70px]" src={meal} alt="img" />
          <div>
            <p className="text-[17px] text-darkGreen font-[600]">
              Stir Fry Pasta
            </p>
            <button className="text-[12px] text-[#C92C33]">Remove</button>
          </div>
        </div>
        <div className="flex gap-12 ">
          <p className="text-[17px] text-darkGreen font-[700] ">3</p>
          <p className="text-[17px] text-darkGreen font-[700]">N 1,000.00</p>
          <p className="text-[#3A8F4D] text-[15px]">Delivered</p>
        </div>
      </div>

      <div className="flex gap-[480px] items-center mt-6 my-12">
        <div className="flex items-center gap-4 ">
          <img className="w-[70px]" src={meal} alt="img" />
          <div>
            <p className="text-[17px] text-darkGreen font-[600]">
              Stir Fry Pasta
            </p>
            <button className="text-[12px] text-[#C92C33]">Remove</button>
          </div>
        </div>
        <div className="flex gap-12 ">
          <p className="text-[17px] text-darkGreen font-[700] ">3</p>
          <p className="text-[17px] text-darkGreen font-[700]">N 1,000.00</p>
          <p className="text-[#3A8F4D] text-[15px]">Delivered</p>
        </div>
      </div>

      <div className="flex gap-[480px] items-center mt-6 my-12">
        <div className="flex items-center gap-4 ">
          <img className="w-[70px]" src={meal} alt="img" />
          <div>
            <p className="text-[17px] text-darkGreen font-[600]">
              Stir Fry Pasta
            </p>
            <button className="text-[12px] text-[#C92C33]">Remove</button>
          </div>
        </div>
        <div className="flex gap-12 ">
          <p className="text-[17px] text-darkGreen font-[700] ">3</p>
          <p className="text-[17px] text-darkGreen font-[700]">N 1,000.00</p>
          <p className="text-[#FF3A44] text-[15px]">Cooking</p>
        </div>
      </div>

      <div className="flex gap-[480px] items-center mt-6 my-12">
        <div className="flex items-center gap-4 ">
          <img className="w-[70px]" src={meal} alt="img" />
          <div>
            <p className="text-[17px] text-darkGreen font-[600]">
              Stir Fry Pasta
            </p>
            <button className="text-[12px] text-[#C92C33]">Remove</button>
          </div>
        </div>
        <div className="flex gap-12 ">
          <p className="text-[17px] text-darkGreen font-[700] ">3</p>
          <p className="text-[17px] text-darkGreen font-[700]">N 1,000.00</p>
          <p className="text-[#FF3A44] text-[15px]">Cooking</p>
        </div>
      </div>

      <div className="flex justify-end gap-[26px] items-center">
        <p className="text-[17px] text-[#000000B0] font-[600]">Total:</p>
        <h3 className="text-[21px] text-darkGreen font-[700]">N 30,000.00</h3>
      </div>
      <Link
        to="/checkout"
        className="flex justify-center text-[#F3C294] bg-darkGreen w-[480px] py-4 text-center mx-auto mt-10">
        Checkout
      </Link>
    </div>
  );
};
