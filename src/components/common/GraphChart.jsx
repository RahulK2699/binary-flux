import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const GraphChart = ({
  chartType,
  xAxisCategories = [],
  yAxisCategories,
  seriesData,
}) => {
  const selectGradient = (type) => {
    let chartGradient = {};
    switch (type) {
      case "areaspline":
        chartGradient = {
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
        };
        return chartGradient;

      default:
        return {};
    }
  };

  const options = {
    title: {
      text: "",
    },
    chart: {
      backgroundColor: "transparent",
      type: chartType,
      height: 100,
      width: 140,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: xAxisCategories,
      visible: false,
      gridLineWidth: 0,
      tickWidth: 0,
    },
    yAxis: {
      categories: yAxisCategories,
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

        fillColor: selectGradient(chartType),
      },
      column: {
        borderWidth: 0,
      },
    },
    legend: {
      enabled: false,
    },
    series: seriesData,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default GraphChart;
