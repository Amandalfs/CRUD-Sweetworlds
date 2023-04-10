// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.sqlite'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
        filename: './db/test.sqlite'
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
        filename: './db/test.sqlite' 
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


/* client:'sqlite3',
connection: {
    filename: "./db/test.sqlite"
},
useNullAsDefault: true,
migrations: {
    tableName: 'knex_migrations'
} */