import { ThemeContext } from "@/context";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const token = localStorage.getItem("token");
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex justify-between max-w-[1244px] max-h-16 mx-auto w-full hx-auto pt-16 h-screen bg-gr">
      <div className="flex items-center">
        <img src="/logo.png" alt="" className="w-[57.48px] h-[67px]" />
        <h1 className="ml-4 text-white font-bold">Lilies</h1>
      </div>
      <div className="flex items-center">
        {/* <button
          onClick={handleToggle}
          className={cn("w-5 h-5 rounded-full mr-4 bg-black dark:bg-white")}
        ></button> */}

        {token ? (
          <Link to="/dashboard">
            <button className=" border-gg bg-gg px-6 py-2 rounded-[10px] text-gr  font-bold hover:text-white transition-all duration-700 ">
              Dashboard
            </button>
          </Link>
        ) : (
          <>
            <Link to={"/login"}>
              <h1 className="mr-4 text-white hover:text-gg ease  transition-all duration-700 ">
                Login
              </h1>
            </Link>
            <Link to={"/signup"}>
              <button className=" border-gg bg-gg px-6 py-2 rounded-[10px] text-gr  font-bold hover:text-white transition-all duration-700 ">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
