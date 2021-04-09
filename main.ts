namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function IntroduceGame () {
    game.splash("Learn by playing!")
    game.showLongText("Welcome to the Kannada rapid fire game.", DialogLayout.Bottom)
    game.showLongText("A Kannada letter will come on top and you have to give the correct answer by clicking A or B.", DialogLayout.Bottom)
    game.showLongText("If your answer is correct you will get 1 point and if it is incorrect you will lose a life.", DialogLayout.Bottom)
    game.showLongText("You have 60 seconds to achieve a high score. ALL THE BEST!", DialogLayout.Bottom)
    while (!(controller.A.isPressed())) {
        game.splash("Press A to start!")
    }
    initGame()
    askQuestion()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (question_asked) {
        check_answer(1)
    }
    askQuestion()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_started) {
        if (question_asked) {
            check_answer(0)
        }
        askQuestion()
    }
})
info.onCountdownEnd(function () {
    game.over(true)
})
function initGame () {
    tiles.setTilemap(tilemap`level2`)
    info.setScore(0)
    info.setLife(3)
    initImages()
    info.startCountdown(60)
    game_started = true
}
info.onLifeZero(function () {
    game.over(false)
})
function check_answer (button: number) {
    if (button == answer_position) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
    question_asked = false
    mySprite2.destroy()
    answer.destroy()
    wrong_answer.destroy()
    music.thump.play()
    scene.cameraShake(4, 100)
}
function initImages () {
    a = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111dbcccbd1111111111111111111
        1111111111111111111111111111111111111bfffffffcd11111111111111111
        111111111111dbcccbd11111111111111111bffffffffffb1111111111111111
        11111111111dcfffffcd111111111111111dffffffffffffb111111111111111
        11111111111cfffffffcd11111111111111cfffffffffffffb11111111111111
        1111111111bfffffffffc1111111111111dfffffffffffffffd1111111111111
        1111111111fffffffffffb111111111111bfffffffffffffffc1111111111111
        111111111bfffffffffffc111111111111cffffffffffffffffb111111111111
        111111111cffffffffffffd11111111111cffbdddddbcfffffff111111111111
        111111111cffffffffffffb11111111111fffd111111dcffffffb11111111111
        111111111ffffffcccffffc11111111111fffd11111111bfffffc11111111111
        11111111dfffffb111bffff11111111111cffb111111111bfffffd1111111111
        11111111dffffc11111bfff11111111111cfffd111111111cffffc1111111111
        11111111bffffd11111dfff11111ddddddbffffcbddd1111dcffff1111111111
        11111111bfffc111111dfff11111bffccccfffffffccbb111bffffd111111111
        11111111bfffcd1111dcffc11111dffffffffffffffffc1111cfffb111111111
        11111111cfffffcccccfffb111111bfffffffffffffffc1111dfffc111111111
        11111111cfffffffffffffd111111dfffffffffffffffc11111cffc111111111
        11111111cfffffffffffff11111111bffffffffffffffc11111bfff111111111
        11111111cffffffffffffb11111111dffffffffffffffc11111dfff111111111
        11111111bfffffffffffcd111111111bffffffffffffff111111fffd11111111
        11111111bfffffffffffb1111111111dcccccccccccccc111111fffd11111111
        11111111bfffcbcfffcb111111111111dddddddddddddd111111fffd11111111
        11111111dfffc1dbbbd11111111111111111111111111111111dfffd11111111
        11111111dffffd1111111111111111111111111111111111111bfff111111111
        111111111ffffc1111111111111111111111111111111111111cfff111111111
        111111111cffffd11111111111111111111111111111111111dfffc111111111
        111111111bffffc11111111111111111111111111111111111cfffb111111111
        111111111dfffffc111111111111111111111111111111111bffffd111111111
        1111111111cfffffb1111111111111111111111111111111bfffff1111111111
        1111111111bffffffb11111111111111111111111111111bfffffc1111111111
        11111111111cffffffb111111111111111111111111111bffffffd1111111111
        11111111111bfffffffbd11111111111111111111111dcffffffc11111111111
        111111111111cfffffffcb11111111111111111111dbffffffffb11111111111
        111111111111dfffffffffcb1111111111111111dbcffffffffc111111111111
        1111111111111bffffffffffcbbd11111111ddbcfffffffffffd111111111111
        11111111111111cffffffffffffccccccccccfffffffffffffb1111111111111
        111111111111111cfffffffffffffffffffffffffffffffffb11111111111111
        1111111111111111cfffffffffffffffffffffffffffffffb111111111111111
        11111111111111111bfffffffffffffffffffffffffffffb1111111111111111
        111111111111111111bffffffffffffffffffffffffffcd11111111111111111
        1111111111111111111dbffffffffffffffffffffffcb1111111111111111111
        111111111111111111111dbcfffffffffffffffffcb111111111111111111111
        111111111111111111111111dbccfffffffffcbbd11111111111111111111111
        1111111111111111111111111111ddddddddd111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    aa = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111ddbbd111111111111111
        11111111111111111ddd11111111111111111111111dcfffcbd1111111111111
        111111111111111dbcccbd11111111111111111111dfffffffcd111111111111
        111111111111111cfffffcd111111111111111111dcffffffffc111111111111
        11111111111111bfffffffc111111111111111111cffffffffffb11111111111
        1111111111111dfffffffffb1111111111111111bffffffffffffd1111111111
        1111111111111bfffffffffc1111111111111111cffffffffffffb1111111111
        1111111111111fffffffffffb11111111111111dffffccbbccffff1111111111
        111111111111dfffffffffffc11111111111111bfffbd11111dcffd111111111
        111111111111bffffbbbcffffd1111111111111cffb11111111dffc111111111
        111111111111cfffb111dbfffd1111111111111cffb111111111cfc111111111
        111111111111cffc111111cffd1111111111111bffcd1111111dffc111111111
        111111111111fffb111111bffb1111111111111bfffcd111ddbcffc111111111
        111111111111fffcbd111dcffd11111111bcccccffffccbbccffffb111111111
        11111111111dfffffcbbbcfffd11111111cfffffffffffffffffffd111111111
        11111111111dfffffffffffffd11111111cffffffffffffffffffc1111111111
        11111111111dfffffffffffff111111111cffffffffffffffffffd1111111111
        11111111111dffffffffffffc111111111cfffffffffffffffffc11111111111
        11111111111dffffffffffffb111111111cffffffffffffffffcd11111111111
        11111111111dffffffffffffd111111111cffffffffffffffffb111111111111
        11111111111dfffcfffffffb1111111111ccccccccccccccfffb111111111111
        11111111111dfffbbccffcb11111111111dddddddddddddbfffc111111111111
        111111111111fffb1dbbbd11111111111111111111111111cffc111111111111
        111111111111ffff11111111111111111111111111111111bfff111111111111
        111111111111cfffb1111111111111111111111111111111dfff111111111111
        111111111111bfffc11111111111111111111111111111111fff111111111111
        111111111111bffffb111111111111111111111111111111dfff111111111111
        111111111111dfffffb11111111111111111111111111111bffc111111111111
        1111111111111cffffcd1111111111111111111111111111cffc111111111111
        1111111111111bfffffcd11111111111111111111111111dfffb111111111111
        11111111111111ffffffcb111111111111111111111111dcfffd111111111111
        11111111111111bfffffffbd111111111111111111111dcffff1111111111111
        111111111111111cffffffffcd11111111111111111dbfffffb1111111111111
        111111111111111dffffffffffcbd11111111111dbccffffff11111111111111
        1111111111111111bfffffffffffcccbbbbbbcccfffffffffb11111111111111
        11111111111111111bffffffffffffffffffffffffffffffc111111111111111
        111111111111111111bffffffffffffffffffffffffffffcd111111111111111
        1111111111111111111bffffffffffffffffffffffffffcd1111111111111111
        11111111111111111111dcfffffffffffffffffffffffbd11111111111111111
        111111111111111111111dbcfffffffffffffffffffcb1111111111111111111
        11111111111111111111111dbcfffffffffffffffcbd11111111111111111111
        1111111111111111111111111ddbbccfffffccbbdd1111111111111111111111
        11111111111111111111111111111ddddddddd11111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    e = img`
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111dccfffcbd111111111111111
        11111111111111dbbcbb111111111111dcfffffffffcd1111111111111
        111111111111dcffffffcb111111111bffffffffffffcd111111111111
        11111111111bffffffffffb1111111bffffffffffffffcd11111111111
        1111111111bffffffffffffcd1111bffffffffffffffffcd1111111111
        111111111dffffffffffffffb111bffffffffffffffffffd1111111111
        11111111dcfffffffffffffffb1dcffffffffffffffffffb1111111111
        11111111bffffffffffffffffcbcfffffffffffffffffffcd111111111
        1111111dcffffffffffffffffffffffffcbd1111dbcfffffd111111111
        1111111bfffcbd11111dbcfffffffffcd1111111111bffffb111111111
        111111dcffcd1111111111bcffffffb1111111111111bfffb111111111
        111111dcffb111111111111dcffffb111111111111111cffcd11111111
        111111dfffd1111111111111dcffb1111111111111111bffcd11111111
        111111dfffd11111111111111dccd1111111111111111dffcd11111111
        111111dfffb111111111111111dd11111111111111111dffcd11111111
        111111dfffc1111111111111111111111111111111111bffcd11111111
        111111dcfffcd11111111111111111111111111111111cffcd11111111
        111111dcfffffb111111111111111111111ddd111111dfffcd11111111
        1111111bffffffcd11111111111111111bcffffcd111cfffcd11111111
        1111111dcffffffd111111111111111dcffffffffcbbffffb111111111
        11111111bfffffb111111111111111bcffffffffffffffffb111111111
        11111111dcfffc111111111111111dcfffffffffffffffffd111111111
        111111111dcfcd11111111111111dcfffffffffffffffffcd111111111
        1111111111dcb111111111111111bfffffffffffffffffffb111111111
        1111111111111111111111111111cfffcccccffffffffffffd11111111
        111111111111111111111111111dcffb111111dbfffffffffcd1111111
        111111111111111111111111111dcffb1111111bffffffffffb1111111
        111111111111111111111111111dcffb111111bfffffffffffcd111111
        1111111111111111111111111111bfffcbddbcffffffbbfffffd111111
        1111111111111111111111111111dcfffffffffffffb11cffffd111111
        11111111111111111111111111111bffffffffffffcd111cfffb111111
        11111111111111111111111111111dcfffffffffffd1111dfffb111111
        111111111111111111111111111111bcfffffffffb111111cffb111111
        1111111111111111111111111111111bffffffffb1111111cffb111111
        11111111111111111111111111111111dcfffffb1111111bfffb111111
        1111111111111111111111111111111111dbcb11111111dcfffb111111
        1111111111111111111111111111111111111111111111cffffb111111
        111111111111111111111111111111111111111111111bfffffd111111
        11111111111111111111111111111111111111111111bfffffcd111111
        11111111111111111111111111111111111111111111dcffffb1111111
        1111111111111111111111111111111111111111111111bfffd1111111
        11111111111111111111111111111111111111111111111dcb11111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111
        `
    ee = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111f11111111111111111111111111
        111111111111111111111111111111111111fffff11111111111111111111111
        111111111111111111111111111111111111ffffff1111111111111111111111
        111111111111111111111111111111111111fffffff111111111111111111111
        111111111111111111111111111111111111ffffffff11111111111111111111
        11111111111111111111111111111111111111fffffff1111111111111111111
        1111111111111111111111111111111111111111fffff1111111111111111111
        1111111111111111111111111111111111111111fffff1111111111111111111
        11111111111111111111111111111111111111111fffff111111111111111111
        11111111111111111111111111111111111111111fffff111111111111111111
        11111111111111111111111111111111111111111fffff111111111111111111
        11111111111111111111111111111111111111111fffff111111111111111111
        11111111111111111111111111111111111111111ffff1111111111111111111
        1111111111111111111111111111111111111111fffff1111111111111111111
        111111111111111111111111111111111111111ffffff1111111111111111111
        11111fffffffffffffffffffffffffffffffffffffff11111111111111111111
        1111fffffffffffffffffffffffffffffffffffffff111111111111111111111
        1111ffffffffffffffffffffffffffffffffffffff1111111111111111111111
        11111fffffffffffffffffffffffffffffffffff111111111111111111111111
        11111fffffffffffffffcccbbbbccfffffffff111111111111111ffff1111111
        111111111111ffffffcbbd11111ddbccffffff1111111111111ffffffff11111
        11111111111fffffcbd111111111111bcffffff11111111111ffffffffff1111
        1111111111fffffcb111111111111111dbffffff111111111ffffffffffff111
        111111111fffffcd111111111111111111bfffff111111111ffffccbcffff111
        111111111ffffcd11111111111111111111bfffff1111111fffffb11dcffff11
        11111111fffffb1111111111111111111111cffff1111111ffffb1111dffff11
        11111111ffffc11111111111111111111111dcffff111111ffffd11111ffff11
        1111111fffffd111111111111111111111111bffff111111ffff111111cffff1
        1111111ffffc1111111111111111111111111dfffff11111ffffd11111fffff1
        1111111ffffb11111111111111111111111111cffff11111ffffb1111bffff11
        1111111ffffd11111111111111111111111111bffff111111fffcd11bcffff11
        11fffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffcbccfffff11
        11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111
        11fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111
        11fffffffffccccccccccccccccccccccccccccfffffffffffffffff11111111
        1111111ffffdddddddddddddddddddddddddddbffff111111111fffff1111111
        1111111ffffb11111111111111111111111111cffff1111111111ffff1111111
        1111111ffffc1111111111111111111111111dfffff1111111111fffff111111
        1111111fffffd111111111111111111111111bffff111111111111ffff111111
        11111111ffffc11111111111111111111111dfffff111111111111fffff11111
        11111111fffffb1111111111111111111111cffff1111111111111fffff11111
        111111111fffffd11111111111111111111bfffff1111111111111fffff11111
        111111111fffffcd111111111111111111bfffff11111111111111fffff11111
        1111111111fffffcb1111111111111111bffffff11111111111111fffff11111
        11111111111ffffffcd111111111111dcffffff11111111111111ffffff11111
        111111111111ffffffcbdd111111dbcfffffff111111111111ffffffff111111
        1111111111111ffffffffcccbbcccffffffff111111111111fffffffff111111
        11111111111111ffffffffffffffffffffff1111111111111ffffffff1111111
        1111111111111111ffffffffffffffffff111111111111111fffffff11111111
        111111111111111111ffffffffffffff11111111111111111ffffff111111111
        111111111111111111111ffffffff11111111111111111111ffff11111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    u = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111dbbccbd11111111111ddbbdd111111111111111111111111111111
        111111111bfffffffb111111111bcffffcd11111111111111111111111111111
        11111111bfffffffffb1111111bfffffffcd1111111111bbd111111111111111
        1111111bfffffffffffd11111dfffffffffc111111111bffcb11111111111111
        1111111cfffffffffffc11111bffffffffffd1111111dfffffb1111111111111
        111111dfffffffffffffd1111cffffffffffb111111dcffffffb111111111111
        111111bfffffffffffffb1111cffffffffffc111111bffffffffd11111111111
        111111cffffbdddddcffc1111ffffcbcffffc111111dbcffffffc11111111111
        111111cfffd1111111cff1111fffb111bffff11111111dcffffffb1111111111
        111111cffb11111111bffd111fff11111cfffd111111111bfffffc1111111111
        111111fffcd1111111bffd111ffc11111dfffd1111111111bfffffd111111111
        111111fffffcbd11ddcffd111ffc111111fffb11111111111bffffb111111111
        111111fffffffcccccffc1111ffb111111cffb111111111111cfffc111111111
        111111ffffffffffffffb1111ffb111111bffb111111111111dfffc111111111
        111111ffffffffffffffd1111ffc111111dffc1111111111111cfff111111111
        111111fffffffffffffc11111ffc111111dffc1111111111111dfff111111111
        111111ffccffffffffcd11111ffc1111111ffc11111111111111fff111111111
        111111ffc1bcfffffcb111111ffc1111111cff11111111111111cff111111111
        111111cfc11dbccccd1111111cfc1111111cffd1111111111111bffd11111111
        111111cff1111dddd11111111cfc1111111bffd1111111111111bffd11111111
        111111cffd111111111111111cfc1111111bffb1111111111111bffd11111111
        111111cffb111111111111111ffc1111111dffb1111111111111bff111111111
        111111bffc11111111111111dffc1111111dffc1111111111111bff111111111
        111111bfffd1111111111111bffc11111111fffd111111111111bff111111111
        111111dfffc1111111111111cffb11111111cffc111111111111cfc111111111
        1111111ffffcd1111111111bfffb11111111cfffb1111111111bffc111111111
        1111111cffffcb11111111bffffd11111111bffffbd111111dcfffb111111111
        1111111dffffffcbbdddbcfffffd11111111bfffffccbbbccfffffd111111111
        11111111cfffffffffffffffffc111111111dfffffffffffffffff1111111111
        11111111bfffffffffffffffffb1111111111cfffffffffffffffc1111111111
        111111111cffffffffffffffffd1111111111bfffffffffffffffd1111111111
        111111111dcffffffffffffffb111111111111cfffffffffffffb11111111111
        1111111111dbffffffffffffb1111111111111dfffffffffffcb111111111111
        111111111111dbcfffffffcd111111111111111dcfffffffcb11111111111111
        111111111111111dbbbbbd1111111111111111111dbbbbdd1111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    uu = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111ddd111111111111ddd1111111111111111ddddd111111111111111
        11111111dcfffcd11111111dcfffcd111111111111bffffffcb1111111111111
        1111111dfffffffd111111dffffffc11111111111cfffffffffcd11111111111
        1111111cffffffffd11111bfffffffd111111111bffffffffffffd1111111111
        111111bfffffffffc11111ffffffffb111111111fffffffffffffc1111111111
        111111cffffffffffd111dffffffffc11111111dffffffffffffffb111111111
        111111fffcd111dffb111dffb11bfff11111111dffcd1111dcfffffd11111111
        111111ffc111111bfc111bfc1111cff11111111bfc11111111dffffb11111111
        111111fffd11111dfc111bfc1111dff11111111bfb111111111dffff11111111
        111111ffffbd111cfc111bfc11111ffd1111111bfd1111111111dfffd1111111
        111111fffffffffffb111bfc11111cfd1111111bfb1111111db11cffb1111111
        111111fffffffffffd111bfc11111cfd1111111dfb111111cffc1dffc1111111
        111111cfffffffffc1111bfc11111cfb1111111dfc11111cffffb1cff1111111
        111111cfbcffffff11111dfc11111cfb11111111ff1111dffffff1dffd111111
        111111bfc1bfffcd11111dfc11111cfb11111111ff1111cffffffd1ffd111111
        111111dffd11dd1111111dfc11111bfc11111111cfd11dfffffffd1cfb111111
        111111dffb11111111111dfc11111bfc11111111cfd11bffdfffc11cfb111111
        1111111cff11111111111dfc11111bfc11111111cfb11cfc1bffb11cfb111111
        1111111bffb1111111111bfc11111dffd1111111ffd11cfb11bb111cfb111111
        1111111dfffb111111111ffc11111dffb111111bffd11cfb111111dffd111111
        11111111cfffb111111dcffd11111dfffd1111dfffd11bffd1111dfff1111111
        11111111bfffffcbddbfffc1111111ffffbdbcffff111dfffbddbfffc1111111
        111111111cffffffffffffb1111111cffffffffffc1111cfffffffffb1111111
        111111111dfffffffffffc11111111bffffffffffd1111dfffffffff11111111
        1111111111dffffffffffd111111111fffffffffc111111bfffffffb11111111
        11111111111dcfffffffd1111111111dfffffffc11111111bfffffb111111111
        1111111111111dccffcd111111111111dbcffcb11111111111dbbd1111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    ru = img`
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111d11111111111111111111111111
        111111111111111111111111111111111111dcb1111111111111111111111111
        11111111111111111111111111111111111dcffd111111111111111111111111
        11111111111111111111111111111111111cfffc111111111111111111111111
        11111111111111111111111111111111111dcfff111111111111111111111111
        111111111111111111111111111111111111dfffd11111111111111111111111
        111111111111ddddd11111111111111111111bffb11111111111111111111111
        11111111111bcfffccbd111111111111111111cfc11111111111111111111111
        1111111111bffffffffcb111111111111dddddcfc11111111111111111111111
        111111111dfffffffffffb1111bcccccccccccffb11111111111111111111111
        111111111cffffffffffffd111cfffffffffffffd11111bd1111111111111111
        11111111dffcccffffffffcd11cffffffffffffc11111bfcd111111111111111
        11111111cfcdddbffffffffb11cffffffffffffd1111bfffcd11111111111111
        11111111ccd1111bfbcfffffd1cffffffffffff11111cffffcd1111111111111
        11111111cb11111dfbdcffffb1bcccccccbcfffd1111bfffffb1111111111111
        11111111cc11111bfb1dbfffc1111111111dfffc11111bcffffb111111111111
        11111111cfd111dffd111cfffd1111111111bfff111111dcfffcd11111111111
        11111111bfcbbbcfc1111dcffd1111111111dfffd111111dcfffc11111111111
        111111111cffffffb11111bffb11111111111bffb1111111dcfffd1111111111
        111111111bfffffb1111111ffc11111111111dffc11111111dcffc1111111111
        1111111111bcfcbd1111111cfc111111111111cfc111111111dfffd111111111
        11111111111dbd111111111bfc111111111111bff1111111111bffc111111111
        111111111111bbd11111111bfc111111111111dffd1111111111cff111111111
        11111111111bffcb1111111bfc111111111111dffd1111111111bffd11111111
        1111111111bfffffb111111cfc1111111111111ffd11111111111ffb11111111
        1111111111cffffffd1111dffb1111111111111ffb11111111111cfb11111111
        111111111dfffffffc1111cffd1111111111111ffc11111111111cfc11111111
        111111111bfcbbbcff111bfffd111111111111dfffb1111111111cfb11111111
        111111111cfd111dcfd1dcfffb111111111111cffffb11111111dffb11111111
        111111111cfd1111cfddcffffcd111111111dbffffffb111111dcffd11111111
        111111111cfb111dffbcffffffcdd11111dbcfffcffffbd111dcfffd11111111
        111111111bffbddcfffffffffffccbbbbccffffcdfffffcbbccfffc111111111
        111111111dfffccffffffffbfffffffffffffffd1bffffffffffffb111111111
        1111111111cfffffffffffb1bfffffffffffffb11dcfffffffffffd111111111
        1111111111dffffffffffb11dcfffffffffffb1111dcfffffffffb1111111111
        11111111111bfffffffcb1111dbffffffffcb111111dcfffffffb11111111111
        111111111111bcffccbd1111111dbbcccbdd111111111dbcccbd111111111111
        1111111111111ddddd111111111111ddd11111111111111ddd11111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111
        `
    questions = [
    a,
    aa,
    e,
    ee,
    u,
    uu,
    ru
    ]
    answers = [
    assets.image`ena`,
    assets.image`enaa`,
    assets.image`ene`,
    assets.image`enee`,
    assets.image`enu`,
    assets.image`enuu`,
    assets.image`enru`
    ]
}
function askQuestion () {
    answer_position = randint(0, 1)
    random_number = randint(0, 3)
    other_random_number = randint(0, 3)
    while (random_number == other_random_number) {
        random_number = randint(0, 3)
    }
    mySprite2 = sprites.create(questions[random_number], SpriteKind.UI)
    mySprite2.setPosition(80, 30)
    answer = sprites.create(answers[random_number], SpriteKind.UI)
    wrong_answer = sprites.create(answers[other_random_number], SpriteKind.UI)
    if (answer_position == 0) {
        answer.setPosition(37, 95)
        wrong_answer.setPosition(120, 95)
    } else {
        wrong_answer.setPosition(37, 95)
        answer.setPosition(120, 95)
    }
    question_asked = true
}
let other_random_number = 0
let random_number = 0
let answers: Image[] = []
let questions: Image[] = []
let ru: Image = null
let uu: Image = null
let u: Image = null
let ee: Image = null
let e: Image = null
let aa: Image = null
let a: Image = null
let wrong_answer: Sprite = null
let answer: Sprite = null
let mySprite2: Sprite = null
let answer_position = 0
let game_started = false
let question_asked = false
IntroduceGame()
