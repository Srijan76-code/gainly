import Community from '@/components/Community'
import Divider from '@/components/Divider'
import { NavbarDemo } from '@/components/NavbarDemo'
import React from 'react'

const page = () => {
  return (
    <div className=" w-full " >
    <NavbarDemo>
        <Community/>
        <Divider/>
    </NavbarDemo>
</div>
  )
}

export default page
