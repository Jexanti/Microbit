basic.forever(function () {
    basic.showString(" abc")
    basic.showString("" + (0 / 0))
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.showIcon(IconNames.Square)
})
