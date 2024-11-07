import Image from 'next/image'
import React from 'react'
import Img from '@/app/assets/img.jpg';

const Manegment = () => {
  return (
 <>
   <div className='w-[1920px] h-[1588px] top-[921px] py-[140px] px-[220px] font-inter'>
    <div className='w-[1480px] h-[547px] gap-[60px] flex items-center'>
        <div className='w-[672px] h-[411px]'>
            <div className='w-[627px] h-[288px]'>
                <div className='w-[627px] h-[174px]'>
                    <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529]'>Project Management</h1>
                </div>
                <br />
            <div className='w-[672px] h-[90px]'>
                <p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
            </div>
            <div className='w-[201px] h-[63px]'></div>
                <button className='py-5 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center '>
                   <p className='w-[97px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white'>Get Started</p>
                   <span className='text-white text-lg'> → </span>
                </button>
            </div>
        </div>
        <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
    </div>
    <br />
    <br />
    <br />


   {/* 3rd page */}
    <div className='w-[1480px] h-[661px] gap-[100px] flex items-center'>
         <div className='w-[710px] h-[661px] '>
            <Image src={Img} alt='' />
         </div>
     <div className='w-[670px] h-[294px]'>
            <div className='w-[670px] h-[171px]'>
                <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529]'>Work together</h1>
            </div>
            <div className='w-[670px] h-[60px]'>
                <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529]'>With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.
                </p>
            </div>
            <div className='w-[189px] h-[63px]'></div>
            <button className='py-5 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center'>
                <p className='w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white'>Try it now</p>
                <span className='text-white text-lg'> → </span>
            </button>
        </div>
    </div>

 </div>
 </>
  )
}

export default Manegment
