pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    basic.showNumber(input.temperature())
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.temperature(),
    0,
    109,
    0,
    180
    ))
})
