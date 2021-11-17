input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(123)
    for (let index = 0; index < 4; index++) {
        music.playTone(261, music.beat(BeatFraction.Breve))
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
    }
})
