import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenList } from './api'; // Assuming you have an API function to fetch the token list
import './Homepage.css'; // Import the CSS file for TransferPage styles

const TransferPage = () => {
  const [ownedTokens, setOwnedTokens] = useState([]); // State to hold the list of owned tokens
  const [destination, setDestination] = useState('');
  const [tokenID, setTokenID] = useState('');

  useEffect(() => {
    fetchOwnedTokens();
  }, []);

  // Function to fetch the list of owned tokens
  const fetchOwnedTokens = () => {
    // Call your API function to fetch the token list
    getTokenList()
      .then((response) => {
        setOwnedTokens(response.data);
      })
      .catch((error) => {
        console.log('Error fetching owned tokens:', error);
      });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the transfer logic here, e.g., call an API endpoint
    // with the destination and token ID values

    // Reset the form fields
    setDestination('');
    setTokenID('');
  };

  return (
    <div className="transfer-page-container">
      <div className="transfer-page-container">
        <Link to="/" className="back-button">Back</Link>
        <h1 className="transfer-page-title">Transfer Page</h1>
        {/* Rest of the component */}
        {/* ... */}
        </div>
      {/* Display owned tokens */}
      <div className="owned-tokens-container">
        <h2 className="owned-tokens-heading">Owned Tokens</h2>
        {ownedTokens.length > 0 ? (
          <table className="owned-tokens-table">
            <thead>
              <tr>
                <th>Token ID</th>
                <th>Metadata</th>
              </tr>
            </thead>
            <tbody>
              {ownedTokens.map((token) => (
                <tr key={token.tokenID}>
                  <td>{token.tokenID}</td>
                  <td>{token.metadata}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tokens owned.</p>
        )}
      </div>

      {/* Transfer Form */}
      <div className="transfer-form-container">
        <h2 className="transfer-form-heading">Transfer Token</h2>
        <form onSubmit={handleSubmit} className="transfer-form">
          <div className="form-field">
            <label htmlFor="destination" className="form-label">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="tokenID" className="form-label">
              Token ID:
            </label>
            <input
              type="text"
              id="tokenID"
              value={tokenID}
              onChange={(event) => setTokenID(event.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="transfer-button">Transfer</button>
        </form>
      </div>
    </div>
  );
};

export default TransferPage;
