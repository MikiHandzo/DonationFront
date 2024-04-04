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

    async companyInfo(params: {id: number}) {
        return axios.get(`${protocol}://${baseUrl}/api/company/${params.id}`)
            .then(function (response) {
                return response.data
            }).catch((error) => {
                return {data: error.response}
            })
    },

    async donationCreate(params: {id: number, contribution:number, support:number}) {
        return axios.post(`${protocol}://${baseUrl}/api/checkouts`, {
            locale: 'uk_UA',
            ip: "192.168.1.1",
            user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0",
            company_id: params.id,
            currency: "UAH",
            user: {
                email: "test@gmail.com"
            },
            items: [
                {
                    amount: params.contribution,
                    type: "contribution",
                    description: ""
                },
                {
                    amount: params.support,
                    type: "support",
                    description: ""
                }
            ],
            incognito: false,
            payment_option: "CARD",
            return_url: "https://google.com"
        })
            .then(function (response) {
                return response
            }).catch((error) => {
                return {data: error.response}
            })
    },

    async donationCharge(params: {id: string}) {
        return axios.post(`${protocol}://${baseUrl}/api/checkouts/${params.id}/charge?auto=1`, {})
            .then(function (response) {
                return response
            }).catch((error) => {
                return {data: error.response}
            })
    },
}