/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('stamps', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('number')
    table.integer('stamp_type').references('stampTypes.id')
    table.integer('catalog_id').references('catalogs.id')
    table.boolean('retired')
    table.boolean('bundle')
    table.decimal('price')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable()
}
