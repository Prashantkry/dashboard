import React from 'react';

interface Activity {
  des: string;
}

const RightPanel: React.FC = () => {
  const activities: Activity[] = [
    { des: 'Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325' },
    { des: 'Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325' },
    { des: 'Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-132' },
    { des: 'Load No. I-I-AAA-1325 will start added by Gurpreet Singh' },
  ];

  const scheduledActivities: Activity[] = [
    { des: 'Load No. I-I-AAA-1325 will be delivered by Aman (Driver)' },
    { des: 'Aman (Driver) will Pick Up goods at Location_Name for Load No. I-I-AAA-1325' },
    { des: 'Load No. I-I-AAA-1325 will start added by Gurpreet Singh' },
    { des: 'Load No. I-I-AAA-1325 will start added by Gurpreet Singh' },
  ];

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

      {/* Activities */}
      <div className="flex items-center justify-between font-bold my-5">
        <p>Completed Activities (14)</p>
        <button className="text-blue-500 font-semibold text-sm underline underline-offset-2">View All</button>
      </div>
      <div className="text-sm">
        {activities.map((activity, index) => (
          <p className='border px-2 py-1 my-1' key={index}>{activity.des}</p>
        ))}
      </div>

      {/* Scheduled Activities */}
      <div className="flex items-center justify-between font-bold my-5">
        <p>Scheduled Activities (14)</p>
        <button className="text-blue-500  font-semibold text-sm  underline underline-offset-2">View All</button>
      </div>
      <div className="text-sm">
        {scheduledActivities.map((activity, index) => (
          <p key={index}>{activity.des}</p>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
