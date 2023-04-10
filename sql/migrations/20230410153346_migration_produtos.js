/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.withSchema('public').createTable('produtos', (table) => {
        table.increments('id').primary(); 
        table.string('name'); 
        table.string('categoria');   
        table.string('imagem');  
        table.integer('quantidade'); 
        table.float('preco')  
        table.string('marca')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
