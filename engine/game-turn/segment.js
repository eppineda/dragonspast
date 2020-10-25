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
    PLAYER_TURN: 'Each player takes his player-turn. The sequence in which the players take their player-turn depends on the scenario being played.',
    BOOKKEEPING: 'If the game-turn being completed is the last turn of the game, play is halted, and the players assess their performance according to the victory conditions of the the scenario being played (i.e., they check to see who won). Otherwise, advance the game-turn marker on the turn track. If the red moon marker is used in that particular scenario, it is advanced.',
}
Segment.prototype.name = ''
Segment.prototype.description = ''
Segment.prototype.play = () => { throw 'not implemented' }
Segment.prototype.names = names
Segment.prototype.descriptions = descriptions

function Segment(name, description, play) {
    this.name = name
    this.description = description
    this.play = play
}

module.exports = Segment
