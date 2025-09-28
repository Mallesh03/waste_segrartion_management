import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import WasteResult from "../components/WasteResult";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Waste Segregation System</h1>
      <UploadForm setResult={setResult} />
      <WasteResult result={result} />
    </div>
  );
};

export default Home;
