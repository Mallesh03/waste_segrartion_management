import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setResult(null); 
    try {
      const res = await axios.post("http://localhost:5000/api/waste/classify", { name });
      setResult(res.data);
      setMessage("✅ Classification done successfully!");
      setName("");
    } catch (err) {
      setMessage("❌ Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ 
      maxWidth: "600px", 
      margin: "50px auto", 
      padding: "20px", 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "#2c3e50", 
        marginBottom: "30px", 
        fontSize: "2rem" 
      }}>
        Waste Segregation System
      </h1>

      <form 
        onSubmit={handleSubmit} 
        style={{
          display: "flex", 
          flexDirection: "column", 
          gap: "15px", 
          backgroundColor: "#f5f6fa", 
          padding: "25px", 
          borderRadius: "10px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      >
        <label style={{ fontWeight: "bold", color: "#34495e" }}>Waste Name:</label>
        <input
          type="text"
          placeholder="Enter waste product name "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <button 
          type="submit"
          style={{
            padding: "12px 20px",
            backgroundColor: "#27ae60",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2ecc71"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#27ae60"}
        >
          Submit
        </button>
      </form>

      {message && (
        <p style={{ 
          marginTop: "20px", 
          textAlign: "center", 
          fontWeight: "bold", 
          color: message.startsWith("✅") ? "#27ae60" : "#e74c3c" 
        }}>
          {message}
        </p>
      )}

      {result && (
        <div style={{
          marginTop: "25px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#ecf0f1",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>Waste Analysis Result</h3>
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Category:</strong> {result.category}</p>
          <p><strong>Biodegradable:</strong> {result.biodegradable}</p>
          <p><strong>Disposal Instructions:</strong> {result.disposalInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
