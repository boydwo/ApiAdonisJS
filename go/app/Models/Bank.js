'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bank extends Model {
  petshop () {
    return this.belongsTo('App/Models/PetShop')
  }
}

module.exports = Bank
