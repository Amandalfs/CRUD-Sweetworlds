const pg = require('../config');

pg.schema.withSchema('public').createTable('produtos', (table) => {
    table.increments();   // id
    table.string();     // name
    table.string();    // categoria
    table.string();   // imagem
    table.integer(); // quantidade
    table.float()   // preco
    table.string() // marca
  })