/**
 * Copyright (c) 2015 Enrique Pineda
 */

const Concert = require('concert')

function Game() {
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
    this.players = []
} // Game

Game.prototype.play = function(scenario, players) {
    this.scenario = scenario
    this.players = players
    initialize()
    for (var t in scenario.turns) {
        var turn = scenario.turns[t]

        bookkeeping(turn)
    }
}

Game.prototype.initialize = function() {
    this.scenario.setup()
}

Game.prototype.bookkeeping = function(turn) {
}

module.exports = Game
