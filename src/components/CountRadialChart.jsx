import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 200,
    fill: "#ffffff",
  },
  {
    name: "Boys",
    count: 110,
    fill: "#8884d8",
  },
  {
    name: "Girls",
    count: 90,
    fill: "#83a6ed",
  },
];

function CountRadialChart() {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col p-4 min-w-[400px]">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-semibold text-center">Students :</h1>
      </div>
      {/* Chart */}
      <div>
        <ResponsiveContainer
          minHeight="300px"
          minWidth="300px"
          className={"bg-white"}
        >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Image */}
        <div>
          <img src="" alt="" />
        </div>
      </div>
      {/* Footer */}
      <div>
        <div className="flex justify-around py-2  items-center text-center">
          {/* Boys */}
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  rounded-full bg-orange-400 "></div>
            <h1 className="text-2xl text-slate-600 font-semibold">110</h1>
            <p className="text-gray-400">BOYS (55%)</p>
          </div>
          {/* Girls */}
          <div className="flex flex-col items-center">
            <div className="h-4 w-4  rounded-full bg-blue-400 "></div>
            <h1 className="text-2xl text-slate-600 font-semibold">90</h1>
            <p className=" text-gray-400">GIRLS (45%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountRadialChart;
