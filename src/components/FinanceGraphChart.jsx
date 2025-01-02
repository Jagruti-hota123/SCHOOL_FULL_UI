import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    income: 40000,
    spend: 24000,
  },
  {
    name: "FEB",
    income: 60000,
    spend: 40000,
  },
  {
    name: "MARCH",
    income: 60000,
    spend: 40000,
  },
  {
    name: "APR",
    income: 60000,
    spend: 40000,
  },
  {
    name: "MAY",
    income: 60000,
    spend: 40000,
  },
  {
    name: "JUNE",
    income: 60000,
    spend: 40000,
  },
  {
    name: "JULY",
    income: 60000,
    spend: 40000,
  },
  {
    name: "AUG",
    income: 60000,
    spend: 40000,
  },
  {
    name: "SEP",
    income: 60000,
    spend: 40000,
  },
  {
    name: "OCT",
    income: 60000,
    spend: 40000,
  },
  {
    name: "NOV",
    income: 55000,
    spend: 30000,
  },
  {
    name: "DEC",
    income: 20000,
    spend: 10000,
  },
];

const FinanceGraphChart = () => {
  return (
    <div className="w-full h-full">
      {/* title */}
      <div>
        <h1 className="text-2xl font-semibold">Finance</h1>
      </div>
      <div>
        <ResponsiveContainer minwidth="inherit" minheight="300px">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceGraphChart;
