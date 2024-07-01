"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    database: 'ecommerce',
    entities: [
        __dirname + '/../entity/*.ts'
    ],
    synchronize: true,
};
exports.default = config;
