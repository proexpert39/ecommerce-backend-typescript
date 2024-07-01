import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
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

export default config;