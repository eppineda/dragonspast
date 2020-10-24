/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const Concert = require('concert')

function Scenario(title = '', description = '', play = () => { throw 'not implemented' }) {
    this.prototype.title = title
    this.prototype.description = description
    this.prototype.play = play
    this.maxTurns = 0
}
