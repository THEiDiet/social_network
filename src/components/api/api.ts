import axios from "axios";
import {FilterType, UserType} from "../state/usersReducer";
import {ProfileType} from "../state/profileReducer";
import {loginValuesType} from "../Forms/LoginForm";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6341a09b-ce0f-4598-967f-d5535213e3c7'
    }
})

export type SetUsersPromiseType = {
    items: UserType[]
    totalCount: number
    error: string
}
export const usersAPI = {
    async setUsers(currentPage: number = 1, pagesCount: number = 10,filter:FilterType) {
        return await instance.get(`users?page=${currentPage}&count=${pagesCount}${filter.term !== '' ? `&term=${filter.term}`: ''}${filter.friend !== null ? `&friend=${filter.friend}`: ''}`).then(res => res.data)
    },
    unfollowUser(userId:number) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    },
    followUser(userId:number) {
        return instance.post(`follow/${userId}`).then(res=>res.data)
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    },
    async updateProfile(userInfo:ProfileType){
        return await instance.put(`/profile`,userInfo)
    },
    async updatePhoto(file:FormData){
        return await instance.put(`/profile/photo`,file,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    async updateStatus(status:string){
        return await instance.put(`profile/status`, {status:status}).then(res => res)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login(values:loginValuesType){
        return instance.post(`auth/login`,values).then(res => res.data)
    },
    captcha(){
        return instance.get(`security/get-captcha-url`).then(res => res.data)
    },
    logout (){
        return instance.delete('auth/login').then(res=> res.data)
    }
}