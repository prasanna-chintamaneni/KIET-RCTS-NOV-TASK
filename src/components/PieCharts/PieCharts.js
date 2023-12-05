import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './PieCharts.css';
import carsDataset from '../../assets/CarsData';

const PieCharts = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  useEffect(() => {
    // Shuffle the array to get a random order
    const shuffledCars = [...carsDataset].sort(() => Math.random() - 0.5);
    const randomCars = shuffledCars.slice(0, 5);
    setSelectedCars(randomCars);
  }, []);

  useEffect(() => {
    return () => {
      if (window.Chart) {
        window.Chart.helpers.each(window.Chart.instances, (instance) => {
          instance.destroy();
        });
      }
    };
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  const gradientColors = [
    'rgba(158, 236, 231, 0.8)', // Light blue
    'rgba(137, 178, 220, 0.8)', // Light purple
    'rgba(172, 137, 220, 0.8)', // Light lavender
    'rgba(220, 137, 150, 0.8)', // Light pink
    'rgba(242, 240, 161, 0.8)', // Light yellow
  ];

  return (
    <div>
      <center>
      </center>
      <div className="pie-chart-container">
        {/* Pie chart for car names */}
        <div className="pie-chart">
          <h2>Car Brand</h2>
          <Pie
            data={{
              labels: selectedCars.map((car) => `${car.Brand} ${car.Model}`),
              datasets: [
                {
                  data: Array(selectedCars.length).fill(1),
                  backgroundColor: gradientColors,
                  hoverBackgroundColor: gradientColors,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>

        {/* Pie chart for mileage */}
        <div className="pie-chart">
          <h2>Mileage</h2>
          <Pie
            data={{
              labels: selectedCars.map((car) => `${car.Brand} ${car.Model}`),
              datasets: [
                {
                  data: selectedCars.map((car) => car.Mileage),
                  backgroundColor: gradientColors,
                  hoverBackgroundColor: gradientColors,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>

        {/* Pie chart for year */}
        <div className="pie-chart">
          <h2>Year of Manufacture</h2>
          <Pie
            data={{
              labels: selectedCars.map((car) => `${car.Brand} ${car.Model}`),
              datasets: [
                {
                  data: selectedCars.map((car) => car.Year),
                  backgroundColor: gradientColors,
                  hoverBackgroundColor: gradientColors,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>

        {/* Pie chart for price */}
        <div className="pie-chart">
          <h2>Price</h2>
          <Pie
            data={{
              labels: selectedCars.map((car) => `${car.Brand} ${car.Model}`),
              datasets: [
                {
                  data: selectedCars.map((car) => car.Price),
                  backgroundColor: gradientColors,
                  hoverBackgroundColor: gradientColors,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
