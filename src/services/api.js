const API_BASE_URL = 'http://localhost:5001/api';

export const productAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/products/`);
    return response.json();
  },
  
  getOne: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },
  
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/products/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
};
