
/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const assert = require('assert')
const expect = require('expect.js')
const Game = require('../../engine/game')

describe('A game consists of a sequence of game play segments', function() {
    it('should consist of exactly 4 segments', function() {
        const game = new Game()

        expect(game.sequence).to.not.be.empty()
    })
})
