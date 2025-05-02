import React from 'react'
import {

    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {
    return (

        <div className='fixed top-0'>

            <nav className='w-64 h-64 bg-red ' >
                <Link href="/" >
                    <Image  className=' w-64 h-auto object-contain ' width={500} height={500} src={"/logo.png"} />
                </Link>
            </nav>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Header
