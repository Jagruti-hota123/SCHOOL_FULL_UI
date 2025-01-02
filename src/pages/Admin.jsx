import HeadCounts from "../components/HeadCount";
import CountRadialChart from "../components/CountRadialChart";
import { AttendanceChart, FinanaceGraphChart } from "../components";

function Admin() {
  return (
    <div className="flex items-center justify-between overflow-y-auto h-fit">
      <div className="flex flex-col items-center w-2/3  gap-4">
        {/* COUNT COMPONENTS */}
        <div className="flex justify-evenly w-full items-center mt-4">
          <HeadCounts type="Students" count="200" />
          <HeadCounts type="Teachers" count="20" />
          <HeadCounts type="Subjects" count="10" />
          <HeadCounts type="Staffs" count="35" />
        </div>
        {/* Graphs and Charts */}
        <div className="flex flex-col gap-5 mt-4  w-full items-center">
          {/* top */}
          <div className="flex gap-6 w-full  items-center">
            {/* count Chart */}
            <div className="h-full">
              <CountRadialChart />
            </div>
            {/* attendance Chart */}
            <div className=" flex-1 h-full">
              <AttendanceChart />
            </div>
          </div>
          {/* bottom */}
          <div className="w-full bg-white rounded-md shadow-md p-4 min-w-[400px] h-full flex-1">
            {/* FinanaceGraphChart */}
            <FinanaceGraphChart />
          </div>
        </div>
      </div>
      {/*Date/Time*/}
      <div></div>
    </div>
  );
}

export default Admin;
