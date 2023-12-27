const lineChart = {
  lineChartOptions: {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    legend: {
      show: false,
    },
    responsive: [
      {
      breakpoint: undefined,
    }
  ],
    colors: ['#373651', '#E65A26', '#a1a1a1'], // Set the colors for each series
    stroke: {
      curve: "smooth",
      width: [1, 1, 1], // Set the border width for each series
    },
  },
  series: [
    {
      name: 'UI Developer',
      data: [20, 10, 5, 5, 20],
    },
    {
      name: 'Android',
      data: [2, 2, 3, 4, 1],
    },
    {
      name: 'Web Designing',
      data: [1, 3, 6, 8, 10],
    },
  ],
};
export {
  lineChart
}