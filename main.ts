//% color="#fcba03" weight=10 icon="\uf837"
//% groups='["KittenTurbidity"]'
namespace KittenTurbidity {
let temp=25
let deltaU=0
let U=0
let U25=0
let K=3000
let NTU=0
let x=0

    //% blockId=test block="test"
    //% group="TEST" weight=83
    export function Test(): number {
        return 10
    }
    
    //% blockId=calibrate block="Calibrate Temp %t, pin %pin"
    //% group="Calibration" weight=83
    export function Calibrate(t: number, pin: AnalogPin) {
        temp = t
        x = pins.analogReadPin(pin)
        deltaU = -0.0192*(temp-25)
        U = x*5/1024
        U25 = U-deltaU
        K = 865.68*U25
    }
    
    //% blockId=calibrate_notemp block="Calibrate No Temp, pin %pin"
    //% group="Calibration" weight=83
    export function Calibrate_notemp(pin: AnalogPin) {
        x = pins.analogReadPin(pin)
        deltaU = -0.0192*(temp-25)
        U = x*5/1024
        U25 = U-deltaU
        K = 865.68*U25
    }
    //% blockId=get_ntu block="Get NTU pin %pin"
    //% group="NTU" weight=83
    export function get_ntup(pin: AnalogPin):number {
        x = pins.analogReadPin(pin)
        U = x*5/1024
        NTU = (-865.68*U)+K
        return NTU
    }
}
