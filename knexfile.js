module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/my_garage'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
