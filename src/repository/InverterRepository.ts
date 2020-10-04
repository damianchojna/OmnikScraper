import InverterStatusInteface from "../models/InverterStatusInteface"
import InverterApi from "../services/InverterApi"
import InverterDto from "../services/InverterDto"

class InverterRepository {
    constructor(private api: InverterApi) {}

    public async getInverterStatus(): Promise<InverterStatusInteface> {
        const page = await this.api.getInverterStatusPage()

        return InverterDto.pageToInverterStatus(page)
    }
}

export default InverterRepository
