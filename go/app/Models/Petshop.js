'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Petshop extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }
  banks () {
    return this.hasOne('App/Models/Bank')
  }

  address () {
      return this.belongsTo('App/Models/Address')
  }
  files () {
    return this.belongsTo('App/Models/File')
  }

}

module.exports = Petshop
