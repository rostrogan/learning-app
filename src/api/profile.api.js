import api from './api.config';

export const profileApi = {
    getCurrentProfile: (userId) => api.get(`profile/${userId}`).then(response => response.data)
};