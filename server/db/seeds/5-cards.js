/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  await knex('cards').insert([
    {
      id: 100,
      name: 'Calypso Carol',
      number: '1234556',
      catalog_id: '301',
      collection_id: '200',
      size: '20x20',
      retired: '0',
      series: '0',
      price: '52.00',
    },
    {
      id: 101,
      name: 'Coastal Cabana',
      number: '345645',
      catalog_id: '301',
      collection_id: '204',
      size: '5x10',
      retired: '0',
      series: '1',
      price: '36.00',
    },
    {
      id: 102,
      name: 'Thick very Vanilla',
      number: '3453453',
      catalog_id: '302',
      collection_id: '202',
      size: '20x20',
      retired: '1',
      series: '1',
      price: '52.00',
    },
  ])
}
