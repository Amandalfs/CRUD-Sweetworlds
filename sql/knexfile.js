require('dotenv/config');

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database:process.env.PG_DATABASE,
        user:process.env.PG_USER,
        password:process.env.PG_PASSWORD
    },
    migrations: {
        tableName: 'knex_migrations'
    }
});
