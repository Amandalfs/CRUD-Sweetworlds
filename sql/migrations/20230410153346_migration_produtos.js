/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
   return await knex.schema.withSchema().createTable('produtos', (table) => {
        table.increments('id').primary(); 
        table.text('name').notNullable(); 
        table.text('categoria').notNullable();   
        table.text('imagem').notNullable();  
        table.integer('quantidade').notNullable(); 
        table.float('preco').notNullable();  
        table.text('marca').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('produtos');
};
