import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

// Chart data
const data = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  datasets: [
    {
      label: 'Payments',
      data: [50, 80, 160, 120, 140, 180],
      fill: false,
      borderColor: '#6366F1',
      tension: 0.4,
    }
  ]
};

// Chart options - NO grid, NO labels
const options = {
  responsive: true,
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false
    }
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      }
    }
  }
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;