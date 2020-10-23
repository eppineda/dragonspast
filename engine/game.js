/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')
Game.prototype.status = {
    'victory':'victory', 
    'stalemate':'stalemate', 
    'active':'active', 
    'inactive':'inactive' 
}
Game.prototype.lunarPhases = { 
    'black':'black', 
    'c-come':'c-come', 
    'empty ½':'empty ½', 
    'full':'full', 
    'full ½':'full ½', 
    'c-go':'c-go', 
    'dying':'dying'
}
Game.prototype.sequences = []
Game.prototype.playerTurns = []

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
