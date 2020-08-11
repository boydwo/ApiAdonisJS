'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BankSchema extends Schema {
  up () {
    this.create('banks', (table) => {
      table.increments()
      table
      .integer('petshop_id')
      .unsigned()
      .references('id')
      .inTable('petshops')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
      table.string('bank_name')
      table.string('agency')
      table.string('account')
      table.string('full_name')
      table.string('document')
      table.timestamps()
    })
  }

  down () {
    this.drop('banks')
  }
}

module.exports = BankSchema
