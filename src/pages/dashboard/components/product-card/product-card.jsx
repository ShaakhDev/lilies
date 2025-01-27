import { api } from "@/service";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, name, description, price, key }) => {
  const [isLoading, setIsloading] = useState(false);
  const handleAddToCart = async (event) => {
    try {
      event.preventDefault();
      const body = {
        foodId: id,
        quantity: 1,
      };
      setIsloading(true);
      const response = await api.post("/add-cart", JSON.stringify(body));
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <Link to={`/product/${id}`}>
      <div className="px-5  flex flex-col justify-center items-center w-[240px] h-[308px] rounded-[5px] border-[1px] border-[#00302E24]">
        <img src={image} alt="" className="w-28 h-28 mb-4 rounded-full " />
        <h3 className="text-[17px] font-bold text-darkGreen mb-1">{name}</h3>
        <p className="text-[#000000B0] text-[11px] mb-9">{description}</p>
        <div className="flex gap-5  items-center">
          <h4 className="text-[13px] font-bold text-darkGreen">${price}</h4>
          <button
            onClick={handleAddToCart}
            className="text-[#06E775] text-[13px]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center w-5 h-5">
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "Add to cart"
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};
