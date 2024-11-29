import axios, { AxiosResponse } from "axios"
import IPost from "../types/IPost"

export const fetchPosts = async () => {
    const res = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    return res.data
} 