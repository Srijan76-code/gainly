import Image from 'next/image'
import React from 'react'
import Button from './styleComponent/Button'
import { ContainerScroll } from './ui/container-scroll-animation'


const Hero = () => {
    return (

        <div className='h-[120vh]' >

            <div className="max-w-screen  h-[70vh] mx-auto bg-[#07080A] bg-no-repeat bg-cover text-white flex   flex-col space-y-8 items-center justify-center"
                style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>
                <div className='flex justify-center flex-col items-center text-7xl font-bold' >
                    <p className="text-7xl bg-gradient-to-r from-white via-[#A881FF] to-[#3A3565] bg-clip-text text-transparent">Your Financial Freedom</p>
                    <p>Starts Here</p>
                </div>
                <div className='flex pt-8 flex-col justify-center items-center' >

                    <Image src={"/hero/spotlight.png"} width={1500} height={1500} className='absolute bottom-1  blur-3xl w-1/2 ' />
                    <Button>Get Started</Button>
                </div>

            </div>
            <div className='max-w-screen h-[30vh]  mx-auto bg-[#07080A] bg-no-repeat bg-cover text-white flex   flex-col gap-4   items-center justify-center' style={{ backgroundImage: "url('./hero/bg-lines.png')" }}>
                <ContainerScroll className="absolute">
                    <img className='w-full ' src="./hero/dashboard.png" alt="" />
                </ContainerScroll>
            </div>
        </div>
    )
}

export default Hero
