# How to Display Temperature on Screen
## First drag the show block to the forever loop
```blocks
basic.forever(function () {
    basic.showNumber(0)
})
```

## Next drag the temperature sensor bublle to forever loop 
```blocks
basic.forever(function () {
    basic.showNumber(input.temperature())
})

```