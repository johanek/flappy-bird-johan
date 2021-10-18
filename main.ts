input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.X, 1)
})
let empty_obstacle2 = 0
let empty_obstacle = 0
let ticks = 0
let bird: game.LedSprite = null
bird = game.createSprite(2, 4)
bird.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
let index = 0
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 4) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.Y, 1)
    }
    if (ticks % 3 == 0) {
        empty_obstacle = randint(0, 4)
        empty_obstacle2 = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != empty_obstacle && index != empty_obstacle2) {
                obstacles.push(game.createSprite(index, 0))
            }
        }
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
