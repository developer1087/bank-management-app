import axios from "axios";

const API_URL = "https://6674623075872d0e0a964225.mockapi.io/api/v1/clients";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
