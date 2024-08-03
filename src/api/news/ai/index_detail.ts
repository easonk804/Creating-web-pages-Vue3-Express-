import axios from "@/utils/request";

export function getItem(id: any) {
    return axios({
        url: `http://localhost:3000/api/ai/${id}`,
        method: 'get'
    })
}