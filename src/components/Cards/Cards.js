import React from 'react';
import './Cards.css';
import carsDataset from '../../assets/CarsData';

const getRandomBrands = (dataset, count) => {
  const shuffled = dataset.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Card = ({ title, content, imageUrl }) => (
  <div className="card-container">
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  </div>
);

const Cards = () => {
  const selectedBrands = getRandomBrands(carsDataset, 4);

  return (
    <div className="card-list">
      {selectedBrands.map((car, index) => (
        <Card
          key={index}
          title={`${car.Brand} ${car.Model}`}
          content={`Year: ${car.Year}, Type: ${car.Type}, Price: $${car.Price}`}
          imageUrl={car.ImageURL}
        />
      ))}
    </div>
  );
};

export default Cards;
