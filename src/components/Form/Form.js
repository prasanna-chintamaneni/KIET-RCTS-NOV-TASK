import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import './Form.css';
import carsDataset from '../../assets/CarsData';

const Form = () => {
  const carKeys = ['Brand', 'Model', 'Type', 'Fuel Type', 'Price', 'Mileage'];

  const initialFormData = carKeys.reduce((acc, key) => {
    acc[key] = key === 'Type' ? [] : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState({
    ...initialFormData,
    selectedDay: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? (checked ? [...prevData[name], value] : prevData[name].filter(skill => skill !== value))
        : value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ['Brand', 'Model', 'Type', 'Fuel Type', 'Price', 'Mileage'];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill out the ${field} field.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mock API call or any other submission logic
      // For now, let's just set the submitted data
      alert('Thank you for filling the form');
      setFormData({ ...initialFormData, selectedDay: null }); // Reset form data
    }
  };

  const renderCaption = ({ date, localeUtils }) => {
    const months = localeUtils.getMonths();

    return (
      <div>
        <select
          value={date.getMonth()}
          onChange={(e) => {
            const newDate = new Date(date.getFullYear(), e.target.value, 1);
            setFormData({ ...formData, selectedDay: newDate });
          }}
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="form-container">
      <div className="day-picker-container">
        <h2>Select a Day</h2>
        <DayPicker
          selected={formData.selectedDay}
          onDayClick={(day) => setFormData({ ...formData, selectedDay: day })}
          captionElement={renderCaption}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="brand-model-group">
            <div className="brand-group">
              <label htmlFor="Brand">Brand:</label>
              <select
                name="Brand"
                value={formData.Brand}
                onChange={handleChange}
                required
              >
                <option value="">Select Brand</option>
                {carsDataset.map((car, index) => (
                  <option key={index} value={car.Brand}>
                    {car.Brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="model-group">
              <label htmlFor="Model">Model:</label>
              <select
                name="Model"
                value={formData.Model}
                onChange={handleChange}
                required
              >
                <option value="">Select Model</option>
                {carsDataset.map((car, index) => (
                  <option key={index} value={car.Model}>
                    {car.Model}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {carKeys
          .filter((key) => key !== 'Brand' && key !== 'Model' && key !== 'Year')
          .map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key}:</label>
              {key === 'Type' ? (
                <div>
                  {carsDataset.reduce((types, car) => {
                    if (!types.includes(car[key])) {
                      types.push(car[key]);
                    }
                    return types;
                  }, []).map((type, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        name={key}
                        value={type}
                        checked={formData[key].includes(type)}
                        onChange={handleChange}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              ) : key === 'Fuel Type' ? (
                <div>
                  {carsDataset.reduce((fuels, car) => {
                    if (!fuels.includes(car[key])) {
                      fuels.push(car[key]);
                    }
                    return fuels;
                  }, []).map((fuel, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={key}
                        value={fuel}
                        checked={formData[key] === fuel}
                        onChange={handleChange}
                        required
                      />
                      {fuel}
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type={key === 'Price' || key === 'Mileage' ? 'number' : 'text'}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
          ))}

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
