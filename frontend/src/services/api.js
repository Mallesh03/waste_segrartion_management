import axios from "axios";

const API_URL = "http://localhost:5001/api"; // Backend URL

// ✅ Get all waste items
export const getAllWaste = async () => {
  try {
    const res = await axios.get(`${API_URL}/waste`);
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

// ✅ Post a new waste item
export const postWasteItem = async (waste) => {
  try {
    const res = await axios.post(`${API_URL}/waste`, waste);
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};

// ✅ Get all categories
export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  } catch (err) {
    throw err.response ? err.response.data : err;
  }
};
