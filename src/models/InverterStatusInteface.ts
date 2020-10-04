export default interface InverterStatusInterface {
    serialNumber: string
    mainFirmwareVersion: string
    slaveFirmwareVersion: string
    inverterModel: string
    ratedPower: number
    currentPower: number
    yieldToday: number
    yieldTotal: number
    alerts: string
    lastUpdate: string
}
