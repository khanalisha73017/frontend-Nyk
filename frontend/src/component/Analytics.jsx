import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useSelector } from "react-redux";

// Registering the ArcElement for customization with Chart.js
Chart.register(ArcElement);

export const Analytics = () => {
  const productData = useSelector((store) => store.appReducer.products);
  productData.forEach((pro) => {
    let gender = pro.gender;
    console.log(gender, "inner");
  });
  const uniqueGenders = Array.from(
    new Set(productData.map((pro) => pro.gender))
  );
  console.log(uniqueGenders);

  const chartData = uniqueGenders.map((gender) => {
    const filteredProducts = productData.filter((pro) => pro.gender === gender);
    console.log(filteredProducts, "fil");

    return {
      labels: [...gender],
      datasets: [
        {
          label: uniqueGenders,
          data: [productData.length], // Using the count of products for each gender
          backgroundColor: gender === "male" ? "#c46d92" : "#843657",
          hoverOffset: 2,
        },
      ],
    };
  });

  return (
    <div className="">
      {chartData.map((data, index) => (
        <Pie
          key={index}
          data={data}
          width={75}
          height={25}
          className="flex border-green-600"
        />
      ))}
    </div>
  );
};
