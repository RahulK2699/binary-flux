import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [options, setOptions] = React.useState({
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth", // can be 'smooth' or 'straight'
      // an array of colors to apply to the line
      width: 4, // the thickness of the line
    },

    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      xaxisTicks: {
        show: false,
      },
      yaxisTicks: {
        show: false,
      },
    },
    markers: {
      show: false,
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: "Sales",
      data: [2, 40, 80, 25, 49],
      type: "area",
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shade: "light",
      //     type: "vertical",
      //     shadeIntensity: 0.5,
      //     //gradientToColors: ["#ABE5A1", "#63C7FD", "#FFB64D"],
      //     inverseColors: true,
      //     opacityFrom: 0.7,
      //     opacityTo: 0.3,
      //     colorStops: [0, 50, 100],
      //   },
      // },
      fill: {
        colors: ["#ABE5A1", "#63C7FD", "#FFB64D"],
        opacity: 0.5,
      },
      markers: {
        show: false,
      },
    },
  ]);

  return <Chart options={options} series={series} type="line" height="100" />;
};

export default LineChart;
