'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetshopSchema extends Schema {
  up () {
    this.create('petshops', (table) => {
      table.increments()
      table
      .integer('address_id')
      .unsigned()
      .references('id')
      .inTable('addresses')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
    table.string('teste_name').notNullable()
    table.string('trade_name').notNullable()
    table.string('register_name').notNullable()
    table.string('document').notNullable()
    table.string('telephone').notNullable()
    table.string('legal_responsible').notNullable()
    table.string('category').notNullable()
    table.string('description', 255).notNullable()
    table.enu('status', [
      'active',
      'inactive',
      'overdue'
    ]).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('petshops')
  }
}

module.exports = PetshopSchema
