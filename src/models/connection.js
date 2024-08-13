const { Pool } = require('pg');

const connection = new Pool ({
    connectionString: 'postgresql://postgres:7zdJZECWBFlFpL7N@becomingly-complete-insect.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt',
    ssl: true
});

module.exports = connection;