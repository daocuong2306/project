import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/products",
})
export const getAll = () => {
    return instance.get("")
}
export const getById = (id: any) => {
    return instance.get(`/${id}`)
}
export const getByslug = (slug: any) => {
    return instance.get(`?slug=${slug}`)
}
export const create = (data: any) => {
    return instance.post("", data)
}
export const remove = (id: any) => {
    return instance.delete(`/${id}`)
}
export const edit = (data: any) => {
    return instance.put(`/${data.id}`, data)
}

export default instance