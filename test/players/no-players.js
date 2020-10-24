/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const assert = require('assert')
const Game = require('../../engine/game.js')
const Scenario = require('../../engine/scenario.js')

describe('no players, no game', function() {
    describe('create a game with no players passed in', function() {
        it('should throw an exception if there are no players specified', function() {
            const game = new Game()

            assert.throws(() => game.play(), /no players/i)
        })
        it('should throw an exception if there are no players', function() {
            const game = new Game(new Scenario, [])

            assert.throws(() => game.play(), /no players/i)
        })
    })
})
