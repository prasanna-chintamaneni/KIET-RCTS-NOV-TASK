import React, { useState, useEffect } from 'react';
import Cars from '../../assets/CarsData';
import './Table.css'; 

function Table() {
  const [sampledCars, setSampledCars] = useState([]);

  useEffect(() => {
    const shuffledCars = Cars.sort(() => 0.5 - Math.random());
    const selectedCars = shuffledCars.slice(0, 4);
    setSampledCars(selectedCars);
  }, []);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>CAR NAME</th>
            <th>YEAR</th>
            <th>PRICE</th>
            <th>FUEL TYPE</th>
            <th>MILEAGE</th>
          </tr>
        </thead>
        <tbody>
          {sampledCars.map((car) => (
            <tr key={car["Brand"]}>
              <td>{car["Brand"]}</td>
              <td>{car["Year"]}</td>
              <td>{car["Price"]}</td>
              <td>{car["Fuel Type"]}</td>
              <td>{car["Mileage"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
