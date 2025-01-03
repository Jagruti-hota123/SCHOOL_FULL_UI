import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiMenuKebab } from "react-icons/ci";

const EventCalender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex flex-col w-full h-full bg-white rounded-md shadow-md p-2 items-center">
      <Calendar className="react-calender" onChange={onChange} value={value} />

      {/* events */}
      <div className="flex flex-col gap-4 w-full p-4">
        {/* title */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold items-center">Events</h1>
          <CiMenuKebab className="rotate-90 text-4xl text-gray-500" />
        </div>
        {/* events list */}
        <div>
          {/* 1 */}
          <div className=" border-2 min-h-28 border-t-4 border-t-blue-300 flex flex-col items-center justify-center gap-2 p-2">
            {/*Header*/}
            <div className="flex w-full justify-between">
              <h1 className="font-semibold text-xl">SAMPLE HEADING</h1>
              <p className="text-xs text-gray-400">12:00 PM - 2:00 PM</p>
            </div>
            {/* body */}
            <div className="">
              <p className="text-sm text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis illo sit reprehenderit molestiae accusantium similique
                alias repellendus aut nisi deserunt, quidem cumque perspiciatis
                saepe, iste magni, odio quos dolores. Sapiente!
              </p>
            </div>
          </div>
          <div className=" border-2 min-h-28 border-t-4 border-t-blue-300 flex flex-col items-center justify-center gap-2 p-2">
            {/*Header*/}
            <div className="flex w-full justify-between">
              <h1 className="font-semibold text-xl">SAMPLE HEADING</h1>
              <p className="text-xs text-gray-400">12:00 PM - 2:00 PM</p>
            </div>
            {/* body */}
            <div className="">
              <p className="text-sm text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis illo sit reprehenderit molestiae accusantium similique
                alias repellendus aut nisi deserunt, quidem cumque perspiciatis
                saepe, iste magni, odio quos dolores. Sapiente!
              </p>
            </div>
          </div>
          <div className=" border-2 min-h-28 border-t-4 border-t-blue-300 flex flex-col items-center justify-center gap-2 p-2">
            {/*Header*/}
            <div className="flex w-full justify-between">
              <h1 className="font-semibold text-xl">SAMPLE HEADING</h1>
              <p className="text-xs text-gray-400">12:00 PM - 2:00 PM</p>
            </div>
            {/* body */}
            <div className="">
              <p className="text-sm text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis illo sit reprehenderit molestiae accusantium similique
                alias repellendus aut nisi deserunt, quidem cumque perspiciatis
                saepe, iste magni, odio quos dolores. Sapiente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
