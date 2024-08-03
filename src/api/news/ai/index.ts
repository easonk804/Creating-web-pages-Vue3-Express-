import axios from "@/utils/request";

export function getItem(params: any) {
    return axios({
        url: 'http://localhost:3000/api/ai',
        method: 'get',
        params
    })
}