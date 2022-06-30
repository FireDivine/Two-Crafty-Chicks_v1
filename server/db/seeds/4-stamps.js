/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stamps').del()
  await knex('stamps').insert([
    {
      id: 1,
      name: 'Time for Tea',
      number: 147069,
      stamp_type: 300,
      catalog_id: 'AC',
      retired: 0,
      bundle: 1,
      price: 36.0,
    },
    {
      id: 2,
      name: 'Little Elephant',
      number: 145725,
      stamp_type: 301,
      catalog_id: 'AC',
      retired: 0,
      bundle: 1,
      price: 59.0,
    },
  ])
}
