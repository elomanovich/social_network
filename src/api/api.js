import * as axios from "axios";

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'c6d8e982-0954-4c23-a87b-3c72dfb8d4a5'
    }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
};

export const getProfile = (userId) => {
    return instance.get(`profile/` + userId)
        .then(response => {
            return response.data;
        })
};

export const getAuth = () => {
    return instance.get(baseUrl + `auth/me`)
        .then(response => {
            return response.data
        })

}

export const deleteFollowed = (u) => {
    return  instance.delete(`follow/${u.id}`)
        .then(response => {
            return response.data
        })
};

export const postFollowed = (u) => {
    return  instance.post(`follow/${u.id}`)
        .then(response => {
            return response.data
        })
};

