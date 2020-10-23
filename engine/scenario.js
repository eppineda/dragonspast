const Concert = require('concert')


function Scenario(title, description) {
    this.prototype.title = title
    this.prototype.description = description
    this.prototype.gameOver = true
}

Scenario.prototype.bookkeeping = function(players, turn) {
    if (!players) throw 'no players'
    if (!turn) throw 'no turn'
    if (this.gameOver) Concert.trigger('game:over')
}
