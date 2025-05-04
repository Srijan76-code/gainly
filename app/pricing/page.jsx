
import { NavbarDemo } from '@/components/NavbarDemo'
import PricingCard from '@/components/PricingCard'
import React from 'react'
import { Carousel } from '@/components/ui/apple-cards-carousel'
const page = () => {
  return (
    <div className=" max-w-screen " >
      <NavbarDemo>
        <div className='bg-no-repeat max-w-screen  mx-auto bg-cover  pt-45 space-y-10' style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>
          <h1 className='text-7xl w-xl text-center mx-auto font-extrabold' >Pricing that scales with you</h1>
          <h2 className='text-xl w-xl text-center mx-auto font-light text-neutral-300' >Our pricing is designed to grow with your needs — start small, upgrade anytime, and pay only for what you use.</h2>
        </div>
      {/* <Carousel items={PricingCard}/> */}
      </NavbarDemo>
    </div>
  )
}

export default page
