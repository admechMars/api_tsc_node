import express from 'express';
import {router} from './routes'
import 'reflect-metadata'


const server = express();
const port = 2406

server.use(express.json())
server.use(router)


server.listen(port, ()=>console.log(`Server is running on port http://localhost:${port}`))