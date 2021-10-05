//% color="#fcba03" weight=10 icon="\uf2ce"
//% groups='["KittenTurbidity"]'
namespace KittenTurbidity {
let temp=25.0
let deltaU=0
let U=0
let U25=0
let K=0
let TU=0
let x=0

    //% blockId=test block="test"
    //% group="TEST" weight=83
    export function Test(): number {
        return 10
    }
    
    //% blockId=calibrate block="calibrate %t, pin %pin"
    //% group="Calibration" weight=83
    export function Calibrate(t: number, pin: AnalogPin) {
        temp=t
        x = pins.analogReadPin(pin)
    }
}
