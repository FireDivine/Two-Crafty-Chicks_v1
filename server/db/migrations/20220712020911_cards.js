/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('number')
    table.integer('catalog_id').references('catalogs.id')
    table.integer('collection_id').references('collections.id')
    table.string('size')
    table.boolean('retired')
    table.boolean('series')
    table.decimal('price')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
