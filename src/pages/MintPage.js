import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css';

const MintPage = () => {
  const [formData, setFormData] = useState({
    lot_id: '',
    owner_title: '',
    description: '',
    image_url: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('your-api-url', formData); // Replace with your API endpoint to handle minting
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      setError('Error occurred: ' + error.message);
    }
  };

  return (
    <div className="transfer-page-container">
      <h1 className="transfer-page-title">Mint Page</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="transfer-form">
        <div className="form-field">
          <label htmlFor="lot_id" className="form-label">
            Lot ID:
          </label>
          <input
            type="text"
            id="lot_id"
            name="lot_id"
            value={formData.lot_id}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="owner_title" className="form-label">
            Owner Title:
          </label>
          <input
            type="text"
            id="owner_title"
            name="owner_title"
            value={formData.owner_title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="image_url" className="form-label">
            Image URL:
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="transfer-button">Mint</button>
      </form>
      <Link to="/" className="back-button">Back</Link>
    </div>
  );
};

export default MintPage;
