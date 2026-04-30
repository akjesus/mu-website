import axios from "axios";

const API_BASE_URL = "api.cms.madukauniversity.edu.ng/api/v1/post";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/auth/logout`);
  } catch (error) {
    throw new Error("Logout failed");
  }
};
