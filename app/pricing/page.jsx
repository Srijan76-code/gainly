
import Divider from '@/components/Divider'
import { NavbarDemo } from '@/components/NavbarDemo'
import PricingCard from '@/components/PricingCard'
import React from 'react'
const page = () => {
  return (
    <div className=" max-w-screen bg-[#050709]" >
      <NavbarDemo bg="[#050709]">
        <div className='bg-no-repeat max-w-screen bg-[#050709] mx-auto bg-cover  pt-55 space-y-10' style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>
          <h1 className='text-7xl w-xl text-center mx-auto font-extrabold' >Pricing that scales with you</h1>
          <h2 className='text-xl w-xl text-center mx-auto font-light text-neutral-300' >Our pricing is designed to grow with your needs — start small, upgrade anytime, and pay only for what you use.</h2>
        </div>
    
        
        <div className='bg-[#050709] mt-30' >
        <PricingCard />
        </div>
      
       
      </NavbarDemo>
    </div>
  )
}

export default page
