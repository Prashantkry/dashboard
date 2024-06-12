import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import eclipseMiddlepanel from '../assets/eclipseMiddlepanel.svg'
import truck1 from '../assets/truck1.svg'
import label from '../assets/label.svg'
import Trailer from '../assets/Trailer.svg'
import stamp from '../assets/stamp.svg'
import line from '../assets/line.svg'
import temp from '../assets/temp.svg'
import Chart from './Chart'
import right from '../assets/right.svg'


// interface MiddlePanel 
interface Features {
  imageData: string
  types: string
}

interface HighPriorityDataTypes {
  imageHighPriority: string
  typesHighPriority: string
  date: string
  content: string
  btn1: string
  btn2: string
}

const MiddlePanel: React.FC = () => {
  const Data: Features[] = [
    {
      imageData: eclipseMiddlepanel,
      types: 'Orders',
    },
    {
      imageData: eclipseMiddlepanel,
      types: 'Trips',
    },
    {
      imageData: eclipseMiddlepanel,
      types: 'Revenue',
    },
  ]

  const QuickActions = {
    imageData: [truck1, line, label, line, Trailer, line, stamp],
    types: ['Create Indents', ' ', 'Add Vehicle', ' ', 'Add Trailer', ' ', 'Add Indents'],
  }

  const HighPriorityContent: HighPriorityDataTypes[] = [
    {
      imageHighPriority: stamp,
      typesHighPriority: 'Driver Raised Concern',
      date: '13 Fab 24',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
      btn1: 'Ignore',
      btn2: 'Resolve',
    },
    {
      imageHighPriority: temp,
      typesHighPriority: 'Reefer Temp. out of range',
      date: '13 Fab 24',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua',
      btn1: 'Ignore',
      btn2: 'Resolve',
    },
  ]
  return (
    <>
      <div className='w-[70%] h-full bg-blue-50 pt-5'>
        <Navbar />
        <div className='w-[100%] border-0 border-yellow-600'>
          {/* all types of event start like orders trips revenue expenses */}
          <div className='w-full flex items-center justify-around my-10'>
            {Data.map((e, index) => (
              <div key={index} className='shadow-lg w-[220px]  bg-white rounded-lg border-0 py-3 px-2'>
                <p className='text-start text-xs font-bold flex items-start justify-start'>{e.types}</p>
                <div className='flex flex-col items-center justify-center'>
                  <div className='w-[150px] h-[150px]'>
                    <Chart />
                  </div>
                  <div className='flex flex-col items-center text-sm justify-between w-full px-5 mt-3'>
                    <p className='my-1 px-1 rounded upcomingBg flex items-center justify-between w-full'>Upcoming <span>50</span></p>
                    <p className='my-1 px-1 rounded OngoingBg flex items-center justify-between w-full'>Ongoing <span>100</span></p>
                    <p className='my-1 px-1 rounded CompletedBg flex items-center justify-between w-full'>Completed <span>50</span></p>
                  </div>
                </div>
              </div>
            ))}
            <div className='shadow-lg w-[220px] bg-white rounded-lg py-3 px-2'>
              <p className='text-start text-xs font-bold flex items-start justify-start'>Expences</p>
              <div className='flex flex-col items-center justify-center'>
                {/* <Image src={eclipseMiddlepanel} alt='' /> */}
                <div className='w-[150px] h-[150px]'>
                  <Chart />
                </div>
                <div className='flex flex-col items-center text-sm justify-between w-full px-5 mt-3'>
                  <p className='my-1 px-1 rounded upcomingBg flex items-center justify-between w-full'>Freight Charge <span>50</span></p>
                  <p className='my-1 px-1 rounded OngoingBg flex items-center justify-between w-full'>Driver Charge <span>100</span></p>
                  <p className='my-1 px-1 rounded CompletedBg flex items-center justify-between w-full'>Other Charges <span>50</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* end */}

          {/* quick actions */}
          <div className='w-full flex flex-col items-start justify-start border-0 px-4 my-10'>
            <p className='text-xl font-semibold mb-3'>Quick Actions</p>
            <div className='flex items-center justify-around border-0 bg-white rounded-md w-full shadow-lg px-10'>
              {
                QuickActions.imageData.map((data, index) => (
                  <div key={index} className='flex flex-col items-center justify-center border-0 font-semibold h-[80px] w-[150px]'>
                    <Image src={data} alt='' />
                    <p className='mt-2'>{QuickActions.types[index]}</p>
                  </div>
                ))
              }
            </div>
          </div>
          {/* end */}

          {/* High Priority alerts */}
          <div className='w-full border-0 px-4 my-10'>
            <div className='flex items-center justify-between'>
              <p className='text-xl font-semibold mb-3'>High Priority alerts (14)</p>
              <button className='flex items-center justify-center'>
                <p className='text-sm'>View All</p>
                <Image src={right} alt='' className='ml-2' />
              </button>
            </div>
            <div className='flex items-center justify-between'>
              {HighPriorityContent.map((data, index) => (
                <div key={index} className='bg-white p-5 rounded-xl my-3 w-[45%]'>
                  <div className='flex items-start justify-between'>
                    <div className='flex items-start justify-start'>
                      <Image src={data.imageHighPriority} alt='' className='w-[30px] h-[30px] bg-[#E0EAFF] p-1 rounded mr-2' />
                      <div className='flex flex-col items-start justify-start text-xs'>
                        <p className='font-bold text-sm'>{data.typesHighPriority}</p>
                        <p className=" text-xs">Load No : 12454, <span>Bill To : RoaDo demo Bangalore</span></p>
                      </div>
                    </div>
                    <p className='text-xs'>{data.date}</p>
                  </div>
                  <p className='text-xs font-normal my-2'>{data.content}</p>
                  <div className='flex items-center justify-end w-full mt-3'>
                    <button className='underline underline-offset-4 mr-9 text-sm text-[#1A3875]'>{data.btn1}</button>
                    <button className='bg-[#1A3875] text-white py-1 px-2 text-sm rounded'>{data.btn2}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end */}
        </div>
      </div >
    </>
  )
}

export default MiddlePanel