import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Your Pie chart data
const data = {
  labels: [],
  datasets: [
    {
      label: 'Payments',
      data: [63, 37],
      backgroundColor: ['#6366F1', '#60A5FA'],
      borderWidth:2,
    }
  ]
};

// Your provided options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Pie Chart',
    },
  },
};

const PieChart = () => {
  return (
    <div className="h-57 flex items-center justify-center">
      <Pie data={data} options={options} height={200} />
    </div>
  );
};

export default PieChart;