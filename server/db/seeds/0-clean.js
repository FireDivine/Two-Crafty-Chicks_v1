/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // Deletes ALL existing entries
  await knex('collections').del()
  await knex('catalogs').del()
  await knex('stampTypes').del()
  await knex('stamps').del()
  await knex('cards').del()
}
