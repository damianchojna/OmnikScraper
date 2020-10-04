import InverterStatusInteface from "../models/InverterStatusInteface"

export default class InverterDto {
    static pageToInverterStatus(page: string): InverterStatusInteface {
        const foundRegexp = page.match(/myDeviceArray.*="(.*)"/)

        if (!foundRegexp || !foundRegexp[1]) throw Error("No data in returned page!\n page")
        const values = foundRegexp[1].split(",")

        return {
            serialNumber: values[0],
            mainFirmwareVersion: values[1],
            slaveFirmwareVersion: values[2],
            inverterModel: values[3],
            ratedPower: +values[4],
            currentPower: +values[5],
            yieldToday: +values[6] / 100,
            yieldTotal: +values[7] / 10,
            alerts: values[8],
            lastUpdate: values[9]
        }
    }
}
