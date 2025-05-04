"use client"
import { pricingPlans } from '@/data/pricing'

import React from 'react'
import Button from './styleComponent/Button'
import { Check } from 'lucide-react';
const PricingCard = () => {
    return (
        <div className='max-w-6xl h-auto bg-[#07080A] mx-auto space-x-4 '>
            <div className='  bg-cover bg-no-repeat' style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>

            </div>
            <div className='w-6xl mx-auto space-y-50 flex flex-wrap justify-center items-center' >
                {pricingPlans.map(({ id, title, price, image, video, subtitle, features, buttonText, isPopular }, index) => (
                    <div className='relative mx-auto w-6xl h-240 overflow-hidden ' >

                        <video className="absolute inset-0 w-full mx-auto  h-full object-cover " playsInline autoPlay muted loop src={video}></video>


                        <div className="w-80 pr-10  absolute inset-0 flex flex-col justify-center mx-auto space-y-8">
                            <div className=' space-y-1' >

                                <h1 className="font-semibold text-xl md:text-3xl  text-white  ">
                                    {title}
                                </h1>
                                <p className=" font-extralight text-white  ">
                                    {subtitle}
                                </p>
                            </div>
                            <p className="font-bold text-3xl md:text-5xl   ">
                                {price}
                            </p>
                            <div className=' '>
                                <Button bg="transparent" >{buttonText}</Button>
                            </div>

                            <div className='font-light space-y-1 text-white'>
                                {features.map((v, i) => (
                                    <div className='flex items-center  space-x-3'>
                                        <Check className='w-4 h-4' />
                                        <p key={i} >{v}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default PricingCard
