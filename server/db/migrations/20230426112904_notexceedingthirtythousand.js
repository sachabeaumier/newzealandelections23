/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('notexceedingthirtythousand', (table) => {
    table.increments('id').primary()
    table.string('political_party')
    table.integer('donation_amount')
    table.string('date_received_by_electoral_commission')
    table.string('donor')
    table.string('address')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('notexceedingthirtythousand')
}
