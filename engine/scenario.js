/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')

function Scenario(title = '', description = '', play = () => { throw 'not implemented' }) {
    Scenario.prototype.title = title
    Scenario.prototype.description = description
    Scenario.prototype.play = play
    this.maxTurns = 0
}

module.exports = Scenario
