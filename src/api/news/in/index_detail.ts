import axios from "@/utils/request";

export function getItem() {
    return axios({
        url: 'http://localhost:3000/api/in/detail',
        method: 'get'
    })
}