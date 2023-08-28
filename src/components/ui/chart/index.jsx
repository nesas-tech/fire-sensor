"use client";

// "@ant-design/charts": "^1.4.2",
// import { Area } from "@ant-design/plots";
import { useState, useEffect } from "react";

const Chart = () => {
  const time = new Date();
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };
  return <section>{/* <Area {...config} /> */}</section>;
};

export default Chart;
