import axios from "axios";
import {UserType} from "../state/usersReducer";
import {ProfileType} from "../state/profileReducer";

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
    setUsers(currentPage: number, pagesCount: number):any  {
        return  instance.get(`users?page=${currentPage}&count=${pagesCount}`).then(res => res.data)
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
    async getStatus(userId:number){
        return await instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    async setStatus(status:string){
        return await  instance.put(`profile/status`, {status}).then(res => res.data)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)

    }
}