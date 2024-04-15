import 'reflect-metadata'
import express from 'express';
import { router } from './routes';
import { AppDataSource } from './database';

const server = express();

const PORT = process.env.PORT

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })
    
server.use(express.json())
server.use(router)

server.listen(PORT, () => console.log('Server on'))