import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
  } from "recharts";
  
  const data = [
    { name: "Mon", jobs: 40 },
    { name: "Tue", jobs: 80 },
    { name: "Wed", jobs: 60 },
    { name: "Thu", jobs: 120 },
    { name: "Fri", jobs: 90 },
    { name: "Sat", jobs: 140 },
    { name: "Sun", jobs: 110 },
  ];
  
  const ChartSection = () => {
    return (
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart  data={data}>
            
            {/* Gradient */}
            <defs>
              <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
            </defs>
  
            <XAxis dataKey="name" stroke="#888" />
  
            <Tooltip
              contentStyle={{
                backgroundColor: "#7A7474",
                border: "1px solid #333",
                borderRadius: "10px",
              }}
            />
  
            <Area
              type="monotone"
              dataKey="jobs"
              stroke="#22c55e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorJobs)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default ChartSection;