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
      stamp_type_id: 300,
      catalog_id: '401',
      retired: 0,
      bundle: 1,
      price: 36.0,
    },
    {
      id: 2,
      name: 'Little Elephant',
      number: 145725,
      stamp_type_id: 301,
      catalog_id: '401',
      retired: 0,
      bundle: 1,
      price: 59.0,
    },
    {
      id: 3,
      name: 'Time for Tea',
      number: 147069,
      stamp_type_id: 302,
      catalog_id: '401',
      retired: 1,
      bundle: 0,
      price: 36.0,
    },
  ])
}
