import { api } from "@/service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      try {
        // fetch product by id
        const response = await api.get(`/food/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product?._id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-5  flex flex-col justify-center items-center w-[240px] h-[308px] rounded-[5px] border-[1px] border-[#00302E24]">
      <img
        src={product?.image}
        alt=""
        className="w-28 h-28 mb-4 rounded-full "
      />
      <h3 className="text-[17px] font-bold text-darkGreen mb-1">
        {product?.name}
      </h3>
      <p className="text-[#000000B0] text-[11px] mb-9">
        {product?.description}
      </p>
      <div className="flex gap-5  items-center">
        <h4 className="text-[13px] font-bold text-darkGreen">
          ${product?.price}
        </h4>
      </div>
    </div>
  );
};
