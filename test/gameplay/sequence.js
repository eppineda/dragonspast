
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

const game = new Game()

game.sequence.forEach((segment, index) => {
    const key = Object.keys(Segment.prototype.names)[index]
    const name = Segment.prototype.names[key]
    const description = Segment.prototype.descriptions[key]

    describe(`verify segment ${index}`, function() {
        it(`must be the ${ name } segment`, function() {
            expect(segment.name).to.be(name)
        })
        it(`must have the description "${ description }"`, function() {
            expect(segment.description).to.be(description)
        })
        it('must have a play method defined', function() {
            expect(segment.play).to.be.a('function')
        })
    })
})
