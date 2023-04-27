import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  const options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "transparent",
      type: "areaspline",
      height: 100,
      width: 140,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      visible: false,
      gridLineWidth: 0,
      tickWidth: 0,
    },
    yAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      visible: false,
      title: {
        text: "",
        tickWidth: 0,
      },
      legend: {
        enabled: false,
      },
      // gridLineWidth: 0,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
        },
        marker: {
          enabled: false,
        },

        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#3C92FF"],
            [0.8, "#3C92FF3D"],
          ],
        },
      },
      column: {
        pointPadding: 0, // controls the padding between individual data points
        groupPadding: 0, // controls the padding between groups of data points
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [6, 4, 3, 1, 5],
        lineWidth: 4,
        color: "#3C92FF",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
