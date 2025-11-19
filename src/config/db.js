const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'devhub',
  password: 'Jose1985@',
  port: 5432,
});

module.exports = pool;
