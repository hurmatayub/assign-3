import Image from "next/image";
import Logo from '@/app/assets/Logo.png'
const Navbar = () => {
  return (
     <>
     <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] font-inter flex justify-between items-center">
      <div className="w-[191px] h-[34px]">
      <Image src={Logo} alt="Logo" />
      </div>
      <div className="w-[737.5px] h-[60px] flex justify-between items-center text-white">
         <div className="w-[549px] h-[23px]">
          <ul className="flex justify-between ">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>

         </div>
         <div className="w-[126px] h-[60px] text-black">
          <button className="bg-[#FFE492] py-4 px-10 rounded-lg">Login</button>
         </div>
      </div>

     </div>
     </>
  );
}

export default Navbar;
