import * as config from "./config.json"
import InverterApi from "./services/InverterApi"
import InverterConfigInterface from "./models/InverterConfigInterface"
import InverterRepository from "./repository/InverterRepository"

const inverterApi = new InverterApi(config.inverter as InverterConfigInterface)
const inverterRepository = new InverterRepository(inverterApi)

const container = {
    inverterRepository
}

export default container
