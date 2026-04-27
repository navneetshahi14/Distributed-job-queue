import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const queueData = [
  { time: "10AM", jobs: 40 },
  { time: "11AM", jobs: 80 },
  { time: "12PM", jobs: 65 },
  { time: "1PM", jobs: 120 },
  { time: "2PM", jobs: 90 },
  { time: "3PM", jobs: 140 },
];

const successData = [
  { time: "10AM", success: 35, failed: 5 },
  { time: "11AM", success: 70, failed: 10 },
  { time: "12PM", success: 55, failed: 10 },
  { time: "1PM", success: 110, failed: 10 },
  { time: "2PM", success: 80, failed: 10 },
  { time: "3PM", success: 130, failed: 10 },
];

const ChartSection = () => {
  return (
    <div style={{paddingLeft:"30px"}} className="grid md:grid-cols-2 gap-8 ">

      {/* 🔥 Queue Growth */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-lg mb-4 text-gray-300">Queue Growth</h3>

        <div className="h-50">
          <ResponsiveContainer width="100%" height="220%">
            <AreaChart data={queueData}>
              
              <defs>
                <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis dataKey="time" stroke="#888" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                }}
              />

              <Area
                type="monotone"
                dataKey="jobs"
                stroke="#22c55e"
                fill="url(#colorJobs)"
                strokeWidth={2}
                isAnimationActive
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ⚡ Success vs Failed */}
      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-lg mb-4 text-gray-300">Success vs Failed</h3>

        <div className="h-50">
          <ResponsiveContainer width="100%" height="220%">
            <LineChart data={successData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" stroke="#888" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                }}
              />

              <Line
                type="monotone"
                dataKey="success"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="failed"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default ChartSection;