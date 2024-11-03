import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ----- Funciones para interactuar con el backend -----

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/productos');
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};