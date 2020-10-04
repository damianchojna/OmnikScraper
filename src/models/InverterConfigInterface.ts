export default interface InverterConfigInterface {
    httpClient: HttpClient
}

export interface HttpClient {
    host: string
    auth: Auth
}

export interface Auth {
    username: string
    password: string
}
