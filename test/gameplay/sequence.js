
/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const assert = require('assert')
const expect = require('expect.js')
const Game = require('../../engine/game')
const Segment = require('../../engine/game-turn/segment')

describe('A game consists of a sequence of game play segments', function() {
    it('should consist of exactly 4 segments', function() {
        const game = new Game()

        expect(game.sequence).to.not.be.empty()
        expect(game.sequence).to.have.length(4)
    })
})
describe('The 1st segment', function() {
    const sequence = new Game().sequence
    const diplomacy = sequence[0]

    it('must be the diplomacy segment', function() {
        expect(diplomacy.title).to.be(Segment.prototype.names.DIPLOMACY)
    })
    it('must have the correct description', function() {
        expect(diplomacy.description).to.be(Segment.prototype.descriptions.DIPLOMACY)
    })
    it('must have a play method defined', function() {
        expect(diplomacy.play).to.be.a('function')
    })
})
