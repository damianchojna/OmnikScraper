import axios, { AxiosInstance } from "axios"
import InverterConfigInterface from "../models/InverterConfigInterface"

class InverterApi {
    protected httpClient: AxiosInstance

    constructor(config: InverterConfigInterface) {
        const { httpClient } = config

        this.httpClient = axios.create({
            baseURL: httpClient.host,
            auth: httpClient.auth && httpClient.auth.username && httpClient.auth.password ? httpClient.auth : void 0
        })
    }

    async getInverterStatusPage(): Promise<string> {
        const response = await this.httpClient.get("/js/status.js", { timeout: 1000 })

        return response.data
    }
}

export default InverterApi
