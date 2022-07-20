# How to Display Temperature on Screen
## First drag the **Servo Wrtie Pin** block into the Start block
now place the Servo Write Pin to the Star block

```blocks
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    basic.showNumber(input.temperature())
})
```

## second drag the show block to the forever loop
now place the show block in the **forever loop**

```blocks
basic.forever(function () {
    basic.showNumber(0)
})
```

## third drag the temperature sensor bubble to the forever loop 
```blocks
basic.forever(function () {
    basic.showNumber(input.temperature())
})

```
## Next from the **Pins** folder add another **Servo Write Pin** block to the forever block
place the Servo Write Pin under the temperature sensor bubble in the forever loop

```blocks
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    basic.showNumber(input.temperature())
    pins.servoWritePin(AnalogPin.P0, 180)
})
```
## From the **Pins** folder grab a **Mapping bubble** and place it into the **Servo Write Pin** in the forever block
next, **duplicate** the **temperature** blubble and place it into the top line of the **mapping** block
Make sure to **MAP** the temperature values from the sensor to the Servo values; enter **_0_** and **_109_** for themperature values and **_0_** and **_180_** for degrees into the **Mapping** bubble

```blocks
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
```