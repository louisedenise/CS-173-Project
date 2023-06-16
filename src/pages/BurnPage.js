import React, { useState, useEffect } from 'react';
import { getOwnedTokens, burnToken } from './api';
import { Link } from 'react-router-dom';
import './Homepage.css';

const BurnPage = () => {
  const [ownedTokens, setOwnedTokens] = useState([]);
  const [tokenID, setTokenID] = useState('');

  useEffect(() => {
    fetchOwnedTokens();
  }, []);

  const fetchOwnedTokens = () => {
    getOwnedTokens()
      .then((response) => {
        setOwnedTokens(response.data);
      })
      .catch((error) => {
        console.log('Error fetching owned tokens:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    burnToken(tokenID)
      .then(() => {
        fetchOwnedTokens();
        setTokenID('');
      })
      .catch((error) => {
        console.log('Error burning token:', error);
      });
  };

  return (
    <div className="transfer-page-container">
      <Link to="/" className="back-button">Back</Link>
      <h1 className="transfer-page-title">Burn Page</h1>
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
      <div className="transfer-form-container">
        <h2 className="transfer-form-heading">Burn Token</h2>
        <form onSubmit={handleSubmit} className="transfer-form">
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
          <button type="submit" className="transfer-button">Burn</button>
        </form>
      </div>
    </div>
  );
};

export default BurnPage;
