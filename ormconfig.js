module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST_P,
    "port": process.env.DB_PORT_P,
    "username": process.env.DB_LOGIN_P,
    "password": process.env.DB_PASSWORD_P,
    "database": process.env.DB_NAME_P,
    "migrations": ["./src/shared/infra/typeorm/migrations/**.ts"],
    "entities": ["./src/modules/**/infra/typeorm/entities/**.ts"],
    "logging": false,
    "cli": {
        "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}