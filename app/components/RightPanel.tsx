"use client";
import React, { useState } from 'react';

const RightPanel: React.FC = () => {
  const [view, setView] = useState({ completed: true, scheduled: true })
  const handleView = (type: string) => {
    if (type === 'Completed') {
      setView((prevState) => ({ ...prevState, completed: !prevState.completed }))
    } else if (type === 'Scheduled') {
      setView((prevState) => ({ ...prevState, scheduled: !prevState.scheduled }))
    }
  }

  return (
    <div className="w-[24%] border-0 border-red-600 h-full shadow-lg py-10 px-5">
      {/* Heading */}
      <p className="text-[#000000] font-bold">Today&apos;s Highlights (14)</p>

      {/* Date */}
      <p className="text-[#676666] text-xs">19 Mar 2024</p>

      {/* Payment Boxes */}
      <div className="flex items-center justify-between my-5">
        <div className="border font-semibold p-2 mx-1 w-[155px] h-[83px]">
          <p className="text-xs">Income</p>
          <p className="text-lg text-[#148714]">100000 CAD</p>
          <p className="text-xs text-[#676666]">2 payments received</p>
        </div>
        <div className="border font-semibold p-2 mx-1 w-[155px] h-[83px]">
          <p className="text-xs">Expenses</p>
          <p className="text-lg text-[#D04141]">50000 CAD</p>
          <p className="text-xs text-[#676666]">5 payments made</p>
        </div>
      </div>

      {/* Completed Activities */}
      <div className="flex items-center justify-between font-bold my-5">
        <p>Completed Activities (14)</p>
        <button onClick={() => handleView('Completed')} className="text-[#111111] font-semibold text-xs underline underline-offset-2">View All</button>
      </div>
      {view.completed && (
        <div className="text-xs rounded font-semibold border-2 border-b-0 border-[#CBCBCB]">
          <p className='border-b-2 border-[#CBCBCB] px-2 py-1'><span className='text-[#1A3875]'>Gurpreet Singh</span> <span className='text-[#676666]'>(Dispatch team) has created</span> Load No. I-I-AAA-1325</p>
          <p className='border-b-2 border-[#CBCBCB] px-2 py-1'>Aman (Driver) Picked Up <span className='text-[#676666]'>goods at</span> Location_Name <span className='text-[#676666]'>for</span> Load No. I-I-AAA-1325</p>
          <p className='border-b-2 border-[#CBCBCB] px-2 py-1'><span className='text-[#1A3875]'>Gurpreet Singh</span> <span className='text-[#676666]'>(Dispatch team) has created</span> Load No. I-I-AAA-132</p>
          <p className='border-b-2 border-[#CBCBCB] px-2 py-1'>Load No. I-I-AAA-1325 <span className='text-[#676666]'>will start added by</span> <span className='text-[#1A3875]'>Gurpreet Singh</span></p>
        </div>
      )}

      {/* Scheduled Activities */}
      <div className="flex items-center justify-between font-bold my-5">
        <p>Scheduled Activities (14)</p>
        {/* <button onClick={() => handleView('Scheduled')} className="text-[#111111]  font-semibold text-sm  underline underline-offset-2"> {view.completed ? 'Hide' : 'View All'}</button> */}
        <button onClick={() => handleView('Scheduled')} className="text-[#111111]  font-semibold text-xs  underline underline-offset-2">View All</button>
      </div>
      {view.scheduled && (
        <div className="text-xs rounded font-semibold border-2 border-b-0 border-[#CBCBCB]">
          <p className='border-b-2 px-2 py-1 border-[#CBCBCB]' >Load No. I-I-AAA-1325 will be delivered by <span className='text-[#1A3875]'>Aman (Driver)</span></p>
          <p className='border-b-2 px-2 py-1 border-[#CBCBCB]' ><span className='text-[#1A3875]'>Aman</span> (Driver) will Pick Up <span className='text-[#676666]'>goods at</span> Location_Name for Load No. I-I-AAA-1325</p>
          <p className='border-b-2 px-2 py-1 border-[#CBCBCB]' >Load No. I-I-AAA-1325 <span className='text-[#676666]'>will start added by</span> <span className='text-[#1A3875]'>Gurpreet Singh</span></p>
          <p className='border-b-2 px-2 py-1 border-[#CBCBCB]' >Load No. I-I-AAA-1325 <span className='text-[#676666]'>will start added by</span> <span className='text-[#1A3875]'>Gurpreet Singh</span></p>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
