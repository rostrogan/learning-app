import api from './api.config';

export const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return api.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow: userId => {
        return api.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow: userId => {
        return api.delete(`follow/${userId}`).then(response => response.data);
    }
};