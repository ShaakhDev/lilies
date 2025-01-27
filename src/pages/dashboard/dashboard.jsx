import { useEffect, useState } from "react";
import profile from "../../../public/profile.png";
import { api } from "@/service";
import { ProductCard } from "./components";

export const Dashboard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await api.get("/foods");
        console.log(response);
        setFoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  const isLoded = foods?.length;

  return (
    <div className="bg-[#fff] text-black ">
      <div className="flex justify-between px-[70px] py-[70px] ">
        <div>
          <h2 className="text-darkGreen font-bold text-[23px]">
            Good morning, Oghenevwede!
          </h2>
          <p className="text-[14px]  text-[#000000B0]">
            What delicious meal are you craving today?
          </p>
        </div>
        <div className="w-[50px]">
          <img src={profile} alt="profile image" />
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-y-[45px] gap-x-[95px] ml-[68px]">
        {isLoded ? (
          foods?.map((food) => (
            <ProductCard
              id={food._id}
              key={food._id}
              price={food.price}
              description={food.description}
              image={food.image}
              name={food.name}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
