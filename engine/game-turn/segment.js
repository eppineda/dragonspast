/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

const DIPLOMACY = 'Diplomacy'
const RANDOM_EVENTS = 'Random Events'
const PLAYER_TURN = 'Player Turn'
const BOOKKEEPING = 'Bookkeeping'
const names = {
    DIPLOMACY, RANDOM_EVENTS, PLAYER_TURN, BOOKKEEPING
}
const descriptions = {
    DIPLOMACY: 'Each player secretly allocates the diplomacy points he receives this turn.',
    RANDOM_EVENTS : 'Roll the dice twice and find the corresponding event in the Random Events Table (on the accompanying pull-outs). The event then takes place accoding to the instructions for the event rolled.',
}
Segment.prototype.title = ''
Segment.prototype.description = ''
Segment.prototype.play = () => { throw 'not implemented' }
Segment.prototype.names = names
Segment.prototype.descriptions = descriptions

function Segment(title, description, play) {
    this.title = title
    this.description = description
    this.play = play
}

module.exports = Segment
