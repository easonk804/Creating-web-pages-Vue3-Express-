import axios from "@/utils/request";

export function getItem(id: number) {
    return axios({
        url: `http://localhost:3000/api/content/${id}`,
        method: 'get',
    })
}