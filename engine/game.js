/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')

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
Game.prototype.sequences = [] // todo: finish initialization with Sequence objects
Game.prototype.playerTurns = [] // todo: finish initialization PlayerTurn objects

function Game(players) {
    this.status = Game.status.inactive
    this.lunarPhase = undefined
    this.players = players
    this.turnsTaken = 0
} // Game

Game.prototype.play = function(scenario) {
    this.scenario = scenario
    initialize()
    for (let t in scenario.turns) {
        if (this.turnsTaken >= this.scenario.maxTurns) Concert.trigger('game:over')
        const turn = scenario.turns[t]

        bookkeeping(turn)
    }
}

Game.prototype.initialize = function() {
    if (!scenario) throw 'no scenario'
    this.scenario.setup()
}

Game.prototype.bookkeeping = function(turn) {
    this.scenario.bookkeeping(this.players, turn)
}

module.exports = Game
