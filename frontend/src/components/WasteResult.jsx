import React from "react";

const WasteResult = ({ result }) => {
  if (!result) return null;

  if (result.message) {
    return <div style={{ color: "red" }}>{result.message}</div>;
  }

  return (
    <div>
      <h3>Waste Info:</h3>
      <p><strong>Name:</strong> {result.name}</p>
      <p><strong>Category:</strong> {result.category?.name || result.category}</p>
      <p><strong>Description:</strong> {result.description}</p>
    </div>
  );
};

export default WasteResult;
