import container from "./container"
;(async () => {
    const inverterStatus = await container.inverterRepository.getInverterStatus()
    console.log(inverterStatus)
})()
