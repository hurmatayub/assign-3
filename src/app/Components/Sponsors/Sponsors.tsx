import Image from 'next/image'
import React from 'react'
import Apple from '@/app/assets/Apple-.png'
import Micro from '@/app/assets/Microsoft-.png'
import Slack from '@/app/assets/Slack-.png'
import Google from '@/app/assets/Google-.png'

const Sponsors = () => {
  return (
    <>
    <div className='w-[1922px] h-[538px] top-[4654px] py-[140px] font-inter px-[220px] gap-[100px] flex flex-col '>
        <div className='w-[1482px] h-[87px] '>
            <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center text-[#212529]'>
                Our sponsors
            </h1>
        </div>

        <div className='w-[1482px] h-[71px] flex justify-between items-center'>
            <div className='w-[150px] h-[68px]  gap-1'>
              <Image src={Apple} alt='' />
            </div>
            <div className='w-[287px] h-[62px]'>
              <Image src={Micro} alt='' />
            </div>
            <div className='w-[200px] h-[71px]'>
              <Image src={Slack} alt='' />
            </div>
            <div className='w-[150px] h-[69.81px] pt-7 gap-1'>
              <Image src={Google} alt='' />
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Sponsors
