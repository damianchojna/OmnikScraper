import axios, { AxiosInstance } from "axios"
import InverterConfigInterface from "../models/InverterConfigInterface"
import * as http from "http"

class InverterApi {
    protected httpClient: AxiosInstance

    constructor(config: InverterConfigInterface) {
        const { httpClient } = config

        this.httpClient = axios.create({
            baseURL: httpClient.host,
            auth: httpClient.auth && httpClient.auth.username && httpClient.auth.password ? httpClient.auth : void 0,
            httpAgent: new http.Agent({ keepAlive: true, timeout: 3000 })
        })
    }

    async getInverterStatusPage(): Promise<string> {
        const response = await this.httpClient.get("/js/status.js", { timeout: 3000 })

        return response.data
    }
}

export default InverterApi
