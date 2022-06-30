/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stampTypes').del()
  await knex('stampTypes').insert([
    { id: 300, name: 'Clear' },
    { id: 301, name: 'Wood' },
    { id: 302, name: 'Poly' },
  ])
}
