/**
 * Copyright (c) 2015 Enrique Pineda
 */

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

Game.prototype.play = function(scenario) {
    this.scenario = scenario
    initialize()
    for (var t in scenario.turns) {
        var turn = scenario.turns[t]

        bookkeeping()
    }
}

Game.prototype.initialize = function() {
    this.scenario.setup()
}

Game.prototype.bookkeeping = function() {
}

module.exports = Game
