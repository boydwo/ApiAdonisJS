'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
  petshop () {
    return this.hasOne('App/Models/PetShop')
  }
}

module.exports = Address
