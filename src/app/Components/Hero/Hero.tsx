import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-[1920px] h-[829px] bg-[#043873] text-white font-inter top-[92px] py-[140px] px-[220px] flex items-center'>
        <div className='w-[656px] h-[361px]'>
            <div className='w-[656px] h-[238]'>
                <div className='w-[656px] h-[154px]'>
                <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em]'>Get More Done with whitepace</h2>
                </div>

                <div className='w-[656px] h-[60px]'>
                <p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>
                
                <div className='w-[219px] h-[63px]'></div>
                <button className='rounded-lg px-5 py-5 bg-[#4F9CF9]'>
                    <p className='w-[159px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em]'>Try Whitepace free</p>
                </button>
            </div> 
       </div>
       <div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>
    </div>
    </>
  )
}

export default Hero;
