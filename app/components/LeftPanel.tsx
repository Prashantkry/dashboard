import React from 'react'
import Eclipse from '../assets/Eclipse.svg'
import clip from '../assets/clip.svg'
import feed from '../assets/feed.svg'
import frame from '../assets/frame.svg'
import business from '../assets/business.svg'
import grid from '../assets/grid.svg'
import label from '../assets/label.svg'
import truck1 from '../assets/truck1.svg'
import truck2 from '../assets/truck2.svg'
import wallet from '../assets/wallet.svg'
import settings from '../assets/settings.svg'
import train from '../assets/train.svg'
import Image from 'next/image'
const LeftPanel = () => {
    const imageData = [grid, frame, label, clip, train, truck1, truck2, business, wallet, feed, settings]
    return (
        <>
            <div className='w-[6%] h-full flex flex-col items-center justify-start py-7 border-0 border-gray-600 shadow-lg'>
                <Image src={Eclipse} alt="Eclipse" className='mb-4' />
                {
                    imageData.map((data, index) => (
                        <Image key={index} src={data} alt="Eclipse" className='mt-3' />
                    ))
                }
            </div>
        </>
    )
}

export default LeftPanel