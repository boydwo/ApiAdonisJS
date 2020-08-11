'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.decimal('latitude', 10, 8)
      table.decimal('longitude', 11, 8)
      table.string('street', 80).notNullable()
      table.integer('number').notNullable()
      table.string('neighborhood', 80).notNullable()
      table.string('city', 80).notNullable()
      table.string('state', 80).notNullable()
      table.string('cep', 10).notNullable()
      table.string('complement')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
