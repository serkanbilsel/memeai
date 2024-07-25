import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const data = {
  labels: ['Main Wallet', 'Team Wallet', 'Burn', 'Circulation'],
  datasets: [
    {
      label: 'Token Distribution',
      data: [76, 14, 5, 5],
      backgroundColor: [
        '#86efac', // Main Wallet
        '#2dd4bf', // Team Wallet
        '#0891b2', // Burn
        '#1f77b4'  // Circulation
      ],
      hoverBackgroundColor: [
        '#059669',
        '#22d3ee',
        '#93c5fd',
        '#93c5fd'
      ],
      hoverOffset: 4,
      borderWidth: 1,
      borderColor: '#fff'
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.label + ': ' + tooltipItem.raw + '%';
        }
      }
    },
    datalabels: {
      display: true,
      formatter: (value, context) => value + '%',
      color: '#fff',
      anchor: 'top',
      align: 'top',
      offset: 10,
      backgroundColor: '#222',
      borderRadius: 1,
      padding: 9,
    }
  }
};

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="bg-gradient-to-t from-sky-900 via-gray-900 to-sky-800 py-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-36">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mr-0 lg:mr-4 mb-4 lg:mb-0">MemeAI</h2>
          <h2 className='text-4xl lg:text-6xl font-bold text-green-600'>Tokenomics</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-md">
            <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
