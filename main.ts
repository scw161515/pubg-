let _3 = 0
let chance = 0
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
    chance = 3
})
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
    _3 = 3
    for (let index = 0; index <= 0; index++) {
        index = _3
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("E B C5 A B G A F ", 500)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playMelody("A F E F D G E F ", 500)
    music.playMelody("C5 A B G A F G E ", 599)
    music.playMelody("C D E F G A B C5 ", 250)
    music.playMelody("C5 B A G F E D C ", 255)
})
