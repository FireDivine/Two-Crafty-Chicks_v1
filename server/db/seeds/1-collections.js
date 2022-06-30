/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('collections').del()
  await knex('collections').insert([
    { id: 200, name: 'Brights' },
    { id: 201, name: 'Basics' },
    { id: 202, name: 'Neurtals' },
    { id: 203, name: 'Subtles' },
    { id: 204, name: 'Regals' },
    { id: 205, name: 'InColour' },
  ])
}
