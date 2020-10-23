/**
 * Copyright (c) 2015 Enrique Pineda
 */

const Concert = require('concert')

Game.prototype.sequences = []
Game.prototype.playerTurns = []

function Game(players) {
    this.status = {
        'victory':'victory', 
        'stalemate':'stalemate', 
        'active':'active', 
        'inactive':'inactive' 
    }
    this.lunarPhases = { 
        'black':'black', 
        'c-come':'c-come', 
        'empty ½':'empty ½', 
        'full':'full', 
        'full ½':'full ½', 
        'c-go':'c-go', 
        'dying':'dying'
    }
    this.players = players
} // Game

Game.prototype.play = function(scenario) {
    this.scenario = scenario
    initialize()
    for (let t in scenario.turns) {
        const turn = scenario.turns[t]

        bookkeeping(turn)
    }
}

Game.prototype.initialize = function() {
    this.scenario.setup()
}

Game.prototype.bookkeeping = function(turn) {
    this.scenario.bookkeeping(this.players, turn)
}

module.exports = Game
