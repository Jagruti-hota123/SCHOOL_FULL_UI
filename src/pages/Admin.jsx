import HeadCounts from "../components/HeadCount";
import CountRadialChart from "../components/CountRadialChart";

function Admin() {
  return (
    <div className="flex items-center justify-between overflow-y-scroll h-[70vh]">
      <div className="flex flex-col items-center w-2/3 h-full">
        {/* COUNT COMPONENTS */}
        <div className="flex justify-evenly w-full items-center mt-4">
          <HeadCounts type="Students" count="200" />
          <HeadCounts type="Teachers" count="20" />
          <HeadCounts type="Subjects" count="10" />
          <HeadCounts type="Staffs" count="35" />
        </div>
        {/* Graphs and Charts */}
        <div className="flex justify-between w-full items-center">
          <div className="w-1/3">
            <CountRadialChart />
          </div>
        </div>
      </div>
      {/*Date/Time*/}
      <div></div>
    </div>
  );
}

export default Admin;
