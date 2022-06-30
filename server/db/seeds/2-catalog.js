/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('catalogs').del()
  await knex('catalogs').insert([
    { id: 400, name: 'OC' },
    { id: 401, name: 'AC' },
    { id: 402, name: 'SB' },
  ])
}
