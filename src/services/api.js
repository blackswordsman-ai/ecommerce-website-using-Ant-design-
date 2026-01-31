
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    return response.data;
  },
  signup: async (userData) => {
    const response = await api.post('/signup', userData);
    return response.data;
  }
};

export const productAPI = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  
  getOne: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    // If FormData, use raw axios to avoid default 'application/json' header from 'api' instance.
    // This allows the browser to correctly set 'multipart/form-data' with the boundary.
    if (data instanceof FormData) {
        const response = await axios.post(`${API_BASE_URL}/products`, data);
        return response.data;
    }
    
    const response = await api.post('/products', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  }
};

export default api;
