import React from "react";

export const Cart = () => {
  return (
    <main className="mx-auto w-[900px] flex flex-col gap-9">
      <h1 className="text-start pt-[60px] text-[#00302E] text-[20px] font-semibold">
        Your Cart
      </h1>
      <div className="flex gap-[565px] ">
        <p className="text-[15px] text-[#000000B0] font-medium">Item</p>
        <div className="flex gap-[55px]">
          <p className="text-[15px] text-[#000000B0] font-medium">Qty</p>
          <p className="text-[15px] text-[#000000B0] font-medium">Unit Price</p>
          <p className="text-[15px] text-[#000000B0] font-medium">Sub-total</p>
        </div>
      </div>
     <div className="flex flex-col gap-[71px]">
     <div className="flex gap-[419px]">
        <div className="flex items-center gap-[15px] text-center">
          <div> 
            <img src="./gg.svg" alt="" />
          </div>
          <div className=" text-start">
            <h1 className="text-[#00302E] text-[17px] font-semibold">
              Stir Fry Pasta
            </h1>
            <span className="text-[#C92C33] text-[13px] font-medium">Remove</span>
          </div>
        </div>
        <div className="flex gap-8 text-center items-center">
          <h1 className="text-[#00302E] text-[17px] font-bold">3</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 1,000.00</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 3,000.00</h1>
        </div>
      </div>
      <div className="flex gap-[419px]">
        <div className="flex items-center gap-[15px] text-center">
          <div>
            <img src="./gg.svg" alt="" />
          </div>
          <div className=" text-start">
            <h1 className="text-[#00302E] text-[17px] font-semibold">
              Stir Fry Pasta
            </h1>
            <span className="text-[#C92C33] text-[13px] font-medium">Remove</span>
          </div>
        </div>
        <div className="flex gap-8 text-center items-center">
          <h1 className="text-[#00302E] text-[17px] font-bold">3</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 1,000.00</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 3,000.00</h1>
        </div>
      </div>
      <div className="flex gap-[419px]">
        <div className="flex items-center gap-[15px] text-center">
          <div>
            <img src="./gg.svg" alt="" />
          </div>
          <div className=" text-start">
            <h1 className="text-[#00302E] text-[17px] font-semibold">
              Stir Fry Pasta
            </h1>
            <span className="text-[#C92C33] text-[13px] font-medium">Remove</span>
          </div>
        </div>
        <div className="flex gap-8 text-center items-center">
          <h1 className="text-[#00302E] text-[17px] font-bold">3</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 1,000.00</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 3,000.00</h1>
        </div>
      </div>
      <div className="flex gap-[419px]">
        <div className="flex items-center gap-[15px] text-center">
          <div>
            <img src="./gg.svg" alt="" />
          </div>
          <div className=" text-start">
            <h1 className="text-[#00302E] text-[17px] font-semibold">
              Stir Fry Pasta
            </h1>
            <span className="text-[#C92C33] text-[13px] font-medium">Remove</span>
          </div>
        </div>
        <div className="flex gap-8 text-center items-center">
          <h1 className="text-[#00302E] text-[17px] font-bold">3</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 1,000.00</h1>
          <h1 className="text-[#00302E] text-[17px] font-bold">N 3,000.00</h1>
        </div>
      </div>
     </div>
     <div className="flex justify-end gap-[]">
      <p>total:</p>j
      <h1>N 30,000.00</h1>
     </div>
     <button className="mx-auto border-none text-center py-[15px] items-center text-[#F3C294] bg-[#00302E] text-[25px] font-semibold w-[500px] h-[60px] ">Checkout</button>
    </main>
  );
};
