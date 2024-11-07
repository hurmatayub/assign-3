import React from "react";

const Work = () => {
  return (
    <>
      <div className="w-[1921px] h-[574px] top-[4080px] py-[140px] px-[220px] font-inter bg-[#043873] ">
        <div className="w-[1481px] h-[294px] gap-[60px] flex justify-center">
          <div className="w-[1064px] h-[171px] gap-[24px]">
            <div className="w-[1064px] h-[87px]">
              <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-white">
                Your work, everywhere you are
              </h1>
            </div>
            <div className="w-[1064px] h-[60px]">
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] justify-between text-white">
                Access your notes from your computer, phone or tablet by
                synchronising with various services, including whitepace,
                Dropbox and OneDrive. The app is available on Windows, macOS,
                Linux, Android and iOS. A terminal app is also available!
              </p>
            </div>
            
            <br />
            <div className="flex justify-center w-full h-[63px]">
              <button className="w-[195px] py-5 px-10 rounded-lg bg-[#4F9CF9] flex justify-center items-center gap-[10px]">
                <p className="font-medium text-lg leading-[23px] tracking-[0.02px] text-white">Try Taskey</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
