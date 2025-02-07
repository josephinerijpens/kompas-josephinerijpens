let waarde_kompas = 0
basic.forever(function () {
    waarde_kompas = input.compassHeading()
})
basic.forever(function () {
    if (waarde_kompas < 44 && waarde_kompas > 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (waarde_kompas < 134 && waarde_kompas > 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (waarde_kompas < 224 && waarde_kompas > 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (waarde_kompas > 0 && waarde_kompas > 45 || waarde_kompas < 314 && waarde_kompas > 360) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
