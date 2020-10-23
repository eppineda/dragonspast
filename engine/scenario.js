/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')


function Scenario(title, description, play = () => { throw 'not implemented' }) {
    this.prototype.title = title
    this.prototype.description = description
    this.play = play
}

Scenario.prototype.bookkeeping = function(players, turn) {
    if (!players) throw 'no players'
    if (!turn) throw 'no game'
    this.play()
}
