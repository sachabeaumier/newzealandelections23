/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('notexceedingtwentyk', (table) => {
    table.increments('id').primary()
    table.string('political_party')
    table.string('donor')
    table.date('date_received_by_electoral_commission')
    table.integer('donation_amount')
    table.specificType('interested_commercial_sector_of_donor', 'text ARRAY')
    table.specificType('firms_connected_with_donor', 'text ARRAY')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('notexceedingtwentyk')
}
