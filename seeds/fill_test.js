/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('test_users').del()
  await knex('test_users').insert([
    {id: 1, first_name: 'FName1', last_name: 'LName1'},
    {id: 2, first_name: 'FName2', last_name: 'LName1'},
    {id: 3, first_name: 'FName3', last_name: 'LName1'}
  ]);
};
