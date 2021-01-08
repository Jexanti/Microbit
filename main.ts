basic.showNumber(0)
basic.forever(function () {
    if (true) {
        input.onButtonPressed(Button.A, function () {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        })
    }
})
