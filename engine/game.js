/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')
const Segment = require('./game-turn/segment')

Game.prototype.statuses = {
    VICTORY:'victory', 
    STALEMATE:'stalemate', 
    ACTIVE:'active', 
    INACTIVE:'inactive' 
}
Game.prototype.lunarPhases = { 
    BLACK:'black', 
    CCOME:'c-come', 
    EMPTYHALF:'empty ½', 
    FULL:'full', 
    FULLHALF:'full ½', 
    CGO:'c-go', 
    DYING:'dying'
}
Game.prototype.sequence = [ new Segment() ]
Game.prototype.playerTurns = [] // todo: finish initialization PlayerTurn objects

function Game(scenario = undefined, players = []) {
    this.status = this.statuses.INACTIVE
    this.lunarPhase = undefined
    this.scenario = scenario
    this.players = players
    this.turnsTaken = 0
} // Game

Game.prototype.play = function() {
    if (!this.players || 1 > this.players.length) throw 'no players'
    if (2 > this.players.length) throw 'not enough players'
    if (!this.scenario) throw 'no scenario'
    this.initialize()
    for (let t in scenario.turns) {
        if (this.turnsTaken >= this.scenario.maxTurns) Concert.trigger('game:over')
        const turn = scenario.turns[t]

        bookkeeping(turn)
    }
}

Game.prototype.initialize = function() {
    if (!this.scenario) throw 'no scenario'
    this.scenario.setup()
}

Game.prototype.bookkeeping = function(turn) {
    this.scenario.bookkeeping(this.players, turn)
}

module.exports = Game
