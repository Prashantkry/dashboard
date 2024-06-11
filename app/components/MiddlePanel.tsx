import React from 'react'
import eclipseMiddlepanel from '../assets/eclipseMiddlepanel.svg'
import Image from 'next/image'
import Navbar from './Navbar'

// interface MiddlePanel 
interface Features {
  imageData: string
  types: string
  event: string[]
  eventAmount: string[]
}

const MiddlePanel: React.FC = () => {
  const Data: Features[] = [
    {
      imageData: eclipseMiddlepanel,
      types: 'Orders',
      event: ['Upcoming', 'Ongoing', 'Completed'],
      eventAmount: ['50', '100', '50'],
    },
    {
      imageData: eclipseMiddlepanel,
      types: 'Trips',
      event: ['Upcoming', 'Ongoing', 'Completed'],
      eventAmount: ['50', '100', '50'],
    },
    {
      imageData: eclipseMiddlepanel,
      types: 'Revenue',
      event: ['Upcoming', 'Ongoing', 'Completed'],
      eventAmount: ['50', '100', '50'],
    },
    {
      imageData: eclipseMiddlepanel,
      types: 'Expenses',
      event: ['Upcoming', 'Ongoing', 'Completed'],
      eventAmount: ['50', '100', '50'],
    }
  ]
  return (
    <>
      <div className='w-full h-full bg-blue-50 pt-5'>
        <Navbar />
        <div className='w-[70%] border-0 border-yellow-600 h-full flex items-center justify-around'>
          {
            Data.map((e, index) => (
              <div key={index} className='flex flex-col items-center justify-between'>
                <p>{e.types}</p>
                <Image src={e.imageData} alt='' />
                {
                  e.event.map((event, ind) => (
                    <p key={ind}>{event}</p>
                  ))
                }
                {
                  e.eventAmount.map((amount, ind) => (
                    <p key={ind}>{amount}</p>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MiddlePanel