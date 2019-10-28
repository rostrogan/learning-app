import api from './api.config';

export const checkAuth = () => api.get('auth/me').then(response => response.data);