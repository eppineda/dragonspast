/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const assert = require('assert')
const Game = require('../../engine/game.js')
const Scenario = require('../../engine/scenario.js')
const Player = require('../../engine/player.js')

describe('no players, no game', function() {
    describe('create a game with no players passed in', function() {
        it('should throw an exception if there are no players specified', function() {
            const game = new Game

            assert.throws(() => game.play(), /no players/i)
        })
        it('should throw an exception if there are no players', function() {
            const game = new Game(new Scenario, [])

            assert.throws(() => game.play(), /no players/i)
        })
    })
})

describe('not enough players to start', function() {
    it('should not start a game with only one player', function() {
        const game = new Game(new Scenario, [ new Player ])

        assert.throws(() => game.play(), /not enough players/i)
    })
})
