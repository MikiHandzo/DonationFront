import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL
const protocol = process.env.NEXT_PUBLIC_PROTOCOL
export const Api = {
    async companyList() {
        return axios.get(`${protocol}://${baseUrl}/api/company?categories[]=1`)
            .then(function (response) {
                return response.data
            }).catch((error) => {
                return {data: error.response}
            })
    },
}