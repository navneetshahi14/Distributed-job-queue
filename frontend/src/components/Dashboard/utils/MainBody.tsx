import React from "react";
import Header from "./Header";
import Card from "./Card";
import ChartSection from "./ChartSection";

const MainBody = () => {
  const cardData = [
    {
      name: "Total Jobs",
      val: "200+",
    },
    {
      name: "Active Workers",
      val: 12,
    },
    {
      name: "Queue Size",
      val: 1204,
    },
    {
      name: "Failed Jobs",
      val: 32,
    },
  ];

  return (
    <div
      style={{ padding: "10px", margin: "10px" }}
      className=" w-full overflow-hidden overflow-y-auto rounded "
    >
      <Header name="Dashboard" description="see your data visualization" />

      <div
        style={{ margin: "30px 10px 10px 10px", padding: "0 20px 0 20px" }}
        className="flex w-full justify-between gap-2"
      >
        {cardData.map((item, idx) => (
          <Card name={item.name} val={item.val} key={idx} />
        ))}
      </div>
      <ChartSection />
    </div>
  );
};

export default MainBody;
