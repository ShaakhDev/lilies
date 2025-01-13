import React from 'react'

export const Hero = () => {
  return <>
    <section className="bg-[#00302E] h-auto  flex pt-[161px] ">
        <div className=" mx-auto flex gap-[197px]">
          <div className="flex flex-col gap-[21px] pt-[74px] w-[650px] ">
            <div>
              <p className="text-6xl font-medium text-white">
                Order <span className="text-[#E2B887] ">food</span> anytime,{" "}
                <br /> anywhere
              </p>
            </div>
            <div>
              <p className="text-lg text-[rgba(255,255,255,0.74)]">
                Browse from our list of specials to place your order and have
                food <br />
                delivered to you in no time. Affordable, tasty and fast!
              </p>
            </div>
            <div className="flex gap-3">
              <img className="w-[135px]" src="./img/Layer.png" alt="" />
              <img className="w-[135px]" src="./img/app.png" alt="" />
            </div>
          </div>
          <div>
            <div>
              <img className="w-[400px]" src="./img/img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#00302E] h-auto justify-center flex pt-[180px] "></section>
  </>
}
