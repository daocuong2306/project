import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/comments",
})
export const getAllComments = () => {
    return instance.get("")
}
export const getByslugComments = (slug: any) => {
    return instance.get(`?slug=${slug}`)
}
export const createComments = (data: any) => {
    return instance.post("", data)
}
export const removeComments = (id: any) => {
    return instance.delete(`/${id}`)
}
export const editComments = (data: any) => {
    return instance.put(`/${data.id}`, data)
}

export default instance