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
    a = assets.image`ka`
    aa = assets.image`kaa`
    e = assets.image`ke`
    ee = assets.image`kee`
    u = assets.image`ku`
    uu = assets.image`kuu`
    ru = assets.image`kru`
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
