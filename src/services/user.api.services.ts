import axios from "axios";
import IUser from "../module/IUser";

// fetch
// const baseUrl = 'https://jsonplaceholder.typicode.com/users';
//
// const getUsers = (): Promise<IUser[]> => {
//     return fetch(baseUrl)
//         .then(value => value.json())
// }
//
// const getUser = async (id: number): Promise<IUser> => {
//     return await fetch(baseUrl + '/' + id)
//         .then(value => value.json())
// }
//
// export {
//     getUsers, getUser
// }

axios.create({
    baseURL:""
})