import React from 'react';

const Grid = ({ data }) => {
  // Function to check if adjacent lots have the same image
  const checkAdjacentLots = (rowIndex, colIndex) => {
    // Check if adjacent lots have the same image
    // Implement your logic here
    // Return true or false based on the condition
  };

  return (
    <div className="grid-container">
      {data.map((lot) => (
        <div
          key={lot.lot_id}
          className={`grid-item ${checkAdjacentLots(lot.rowIndex, lot.colIndex) ? 'scaled-up' : ''}`}
        >
          <img src={lot.imageURL} alt={`Lot ${lot.lot_id}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;