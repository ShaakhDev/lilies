import { api } from "@/service";
import { useEffect, useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get("/cart");
        console.log(response);
        setCart(response.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };
    fetchCart();
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (!cart.length && !isloading) {
    return <div>No data</div>;
  }
  return (
    <>
      {cart?.map(({ foodId: { name, image, id, price, description } }) => (
        <div className="px-5  flex flex-col justify-center items-center w-[240px] h-[308px] rounded-[5px] border-[1px] border-[#00302E24]">
          <img src={image} alt="" className="w-28 h-28 mb-4 rounded-full " />
          <h3 className="text-[17px] font-bold text-darkGreen mb-1">{name}</h3>
          <p className="text-[#000000B0] text-[11px] mb-9">{description}</p>
          <div className="flex gap-5  items-center">
            <h4 className="text-[13px] font-bold text-darkGreen">${price}</h4>
          </div>
        </div>
      ))}
    </>
  );
};
