module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'dev',
  database: 'codeburger',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
