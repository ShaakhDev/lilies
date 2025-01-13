export const Foods = () => {
    return(
        <>
        <div className="w-full h-screen max-h-full bg-[#00302E]">
        <div className="flex flex-col w-full justify-center  items-center">
            <p className="text-[#FFFFFFDE] font-[700] text-[36px] font-sans mb-[35px]">
              Special Meals of the day!
            </p>
            <p className="font-[400] text-[18px] text-[#FFFFFFDE] mb-[96px] max-w-[609px] mx-auto text-center">
              Check our sepecials of the day and get discounts on all our meals
              and swift delivery to what ever location within Ilorin.
            </p>
          </div>
          <div className="flex mb-[269px] justify-around w-full">
            <div className="flex flex-col justify-center items-center">
              <img
                className="mb-[5px] animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500"
                src="/rasm3.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Stir fry Pasta
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500 mb-[5px]"
                src="/rasm2.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Meat Balls
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                className="animate-[RotateAnimation_50s_linear_infinite] transition-all ease-in-out duration-500 mb-[5px]"
                src="/rasm1.svg"
                alt="Rasm bor"
              />
              <p className="text-[#FBDDBB] mb-[14px] font-[700] text-[27px]">
                Burger Meal
              </p>
              <p className="font-[400] text-[18px] text-[#FFFFFFD4] max-w-[288px] text-center">
                Stir fry pasta yada yada yada because of Sesan
              </p>
            </div>
            </div>
            </div>
        </>
    )
}