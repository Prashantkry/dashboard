import React from 'react'
import search from '../assets/search.svg'
import bell from '../assets/bell.svg'
import dot from '../assets/dot.svg'
import Image from 'next/image'

const Navbar = () => {
    const imageData = [search, bell, dot]
    return (
        <>
            <div className='w-full h-[5vh] flex items-center justify-between py-4 px-5 border-0'>
                <p className='font-bold text-2xl'>Dashboard</p>
                <div className='flex items-center justify-between bg-white px-4 w-[10vw] h-[4vh] rounded-full'>
                    <Image src={search} alt="" className='' />
                    <p className='text-gray-300'>|</p>
                    <Image src={bell} alt="" className='' />
                    <p className='text-gray-300'>|</p>
                    <Image src={dot} alt="" className='' />
                </div>
            </div>
        </>
    )
}

export default Navbar