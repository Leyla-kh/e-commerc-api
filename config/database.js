module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "https://e-commerc-api.onrender.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "store"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "Leyla4200"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
