import container from "./container"
import * as Influx from "influx"
;(async () => {
    const influx = new Influx.InfluxDB({
        host: "localhost",
        database: "energy",
        schema: [
            {
                measurement: "energy",
                fields: {
                    inverterCurrentPower: Influx.FieldType.FLOAT,
                    inverterYieldToday: Influx.FieldType.FLOAT,
                    inverterYieldTotal: Influx.FieldType.FLOAT
                },
                tags: ["device"]
            }
        ]
    })

    const names = await influx.getDatabaseNames()
    if (!names.includes("energy")) await influx.createDatabase("energy")

    let currentTime = +new Date()
    let oldTime = currentTime

    while (true) {
        currentTime = +new Date()
        if (currentTime - oldTime < 1000) continue

        let inverterStatus = null

        console.log("-----BeforeInverterStatus")
        try {
            inverterStatus = await container.inverterRepository.getInverterStatus()
        } catch (e) {
            console.log("-----ErrorInverterStatus")
            console.error(e)
            continue
        }

        console.log(new Date().toString(), inverterStatus)

        console.log("-----WritePoints")
        influx.writePoints([
            {
                measurement: "power",
                tags: { device: inverterStatus.inverterModel },
                fields: {
                    inverterCurrentPower: inverterStatus.currentPower,
                    inverterYieldToday: inverterStatus.yieldToday,
                    inverterYieldTotal: inverterStatus.yieldTotal
                }
            }
        ])

        oldTime = +new Date()
    }
})()
