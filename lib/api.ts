import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://kingdom-spices-herbs-backend-dashbo.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAssetUrl = (path: string | null | undefined) => {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://kingdom-spices-herbs-backend-dashbo.vercel.app/api').replace('/api', '');
  return baseUrl + path;
};

export const apiService = {
  getProducts: async (params: any = {}) => {
    try {
      const res = await api.get('/products', { params });
      return res.data?.data || res.data || [];
    } catch {
      return [];
    }
  },
  getProductById: async (id: string | number) => {
    try {
      const res = await api.get(`/products/${id}`);
      return res.data?.data || res.data;
    } catch {
      return null;
    }
  },
  getProductsByCategory: async (categoryId: string | number) => {
    try {
      const res = await api.get('/products', { params: { category_id: categoryId } });
      return res.data?.data || res.data || [];
    } catch {
      return [];
    }
  },
  getCategories: async (params: any = {}) => {
    try {
      const res = await api.get('/categories', { params });
      return res.data?.data || res.data || [];
    } catch {
      return [];
    }
  },
  getCertificates: async (params: any = {}) => {
    try {
      const res = await api.get('/certificates', { params });
      return res.data?.data || res.data || [];
    } catch {
      return [];
    }
  },
  getTeamMembers: async (params: any = {}) => {
    try {
      const res = await api.get('/team', { params });
      return res.data?.data || res.data || [];
    } catch {
      try {
        const res2 = await api.get('/team-members', { params });
        return res2.data?.data || res2.data || [];
      } catch {
        return [];
      }
    }
  },
  getTeam: async (params: any = {}) => {
    try {
      const res = await api.get('/team', { params });
      return res.data?.data || res.data || [];
    } catch {
      try {
        const res2 = await api.get('/team-members', { params });
        return res2.data?.data || res2.data || [];
      } catch {
        return [];
      }
    }
  },
  getContactInfo: async (params: any = {}) => {
    const res = await api.get('/contact', { params });
    return res.data?.data || res.data || [];
  },
  getContact: async (params: any = {}) => {
    const res = await api.get('/contact', { params });
    return res.data?.data || res.data || [];
  },
  sendMessage: async (data: { name: string; email: string; phone?: string; subject: string; message: string }) => {
    const res = await api.post('/messages', data);
    return res.data;
  },
  sendContactMessage: async (data: { name: string; email: string; phone?: string; subject: string; message: string }) => {
    const res = await api.post('/messages', data);
    return res.data;
  },
};

export default api;
