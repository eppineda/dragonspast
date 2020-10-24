/**
 * Copyright (c) 2015 - 2020 Enrique Pineda
 */

function Sequence(title, description) {
    this.prototype.title = title
    this.prototype.description = description
    this.sequence = () => { throw 'not implemented' }
}
