/*
By Anson From KittenBotHK

Turbidity Sensor Extension designed for Micro:bit
*/

//% color="#fcba03" weight=10 icon="\uf2ce"
//% groups='["KittenTurbidity"]'
namespace KittenTurbidity {
let temp=25
let deltaU=0
let U=0
let U25=0
let K=0
let NTU=0
let x=0
    export enum temppin {
           //% block=pin0
           pin0 = 0,
           //% block=pin1
           pin1 = 1,
           //% block=pin2
           pin2 = 2,
           //% block=pin5
           pin5 = 5,
           //% block=pin8
           pin8 = 8,
           //% block=pin11
           pin11 = 11,
           //% block=pin12
           pin12 = 12,
           //% block=pin13
           pin13 = 13,
           //% block=pin14
           pin14 = 14,
           //% block=pin15
           pin15 = 15,
           //% block=pin16
           pin16 = 16
         }
    
    //% shim=DS18B20::Temperature
    export function Temperature(p: number): number {
        return 0
    }

    //% blockId=temp block="Water Temperature pin %p"
    //% group="Water Temperature" weight=83
    export function water_temp(p: temppin): number {
        temp=Math.round(Temperature(p)/10)
        while(temp<85) {
            temp=Math.round(Temperature(p)/10)
            basic.pause(100)
            }
        return temp
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
        if (NTU < 0){
            return 0
        } else {
            return NTU
        }
    }
}
