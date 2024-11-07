import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import React from "react";

const Footer = () => {
  return (
    <>
    <div className="w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] font-inter bg-[#043873] gap-[200px]">
      <div className="w-[1480px] h-[289px] flex gap-[100px] text-white">
        <div className="w-[295px] h-[169px] gap-[15px]">
          <div className="w-[191px] h-[34px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="w-[240px] h-[120px]">
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
              Whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>
        </div>

        <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
          <h2 className="w-[68px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
            Product
          </h2>
          <p className="w-[70px] h-[20px] text-base leading-[20px] tracking-[-0.02em] text-[#FFE492]">
            Overview
          </p>
          <p className="w-[50px] h-[22px] text-base leading-[20px] tracking-[-0.02em] text-white">
            Pricing
          </p>
          <p className="w-[177px] h-[22px] text-base leading-[20px] tracking-[-0.02em] text-white">
            Customer stories
          </p>
        </div>

        <div className="w-[295px] h-[130px] gap-4 flex flex-col">
          <h2 className="w-[91px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
            Resources
          </h2>
          <p className="w-[33px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            Overview
          </p>
          <p className="w-[128px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            Guides & tutorials
          </p>
          <p className="w-[130px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            Help center
          </p>
        </div>

        <div className="w-[295px] h-[130px] gap-4 flex flex-col">
          <h2 className="w-[83px] h-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-white">
            Company
          </h2>
          <p className="w-[66px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            About us
          </p>
          <p className="w-[62px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            Careers
          </p>
          <p className="w-[99px] h-[20px] font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
            Media kit
          </p>
        </div>
        </div>
      <div className="w-[1480px] h-0 border-t rotate-0 border-[#2E4E73]"></div>

      <div className="w-[1480px] h-[20px] flex justify-between items-center">
  <div className="w-[169px] h-[20px] flex justify-center items-center gap-[60px]">
    <p className="font-normal text-base leading-[20px] tracking-[-0.02em]  text-white">
      ©2021 Whitepace LLC.
    </p>
  </div>
</div>

 </div>
 </>
  );
};

export default Footer;


