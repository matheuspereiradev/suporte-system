import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors'
import cors from 'cors';
import CreateConnection from '../../../shared/infra/typeorm/index';
import { routes } from '../../../shared/infra/http/routes/index.routes';
import 'reflect-metadata';
import Erro from '../../../shared/errors/AppError';
import { errors } from 'celebrate'
import path from 'path';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import '../../../shared/container'

const app = express();

app.use(express.json());

app.use(cors())
CreateConnection();


const http = createServer(app);
const io = new Server(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    },

});

io.on("connection", (socket: Socket) => {

    console.log('socket: ', socket.id)

    // socket.emit('previousMessages', messages);

    socket.on('changeInfo', data => {
        console.log('data', data)
        socket.broadcast.emit('haveUpdate');
    })

    socket.on("disconnect", () => {
        console.log('caiu')
        socket.removeAllListeners();
    })
})

app.use('/files', express.static(path.resolve(__dirname, "..", "..", "..", "..", "temp")));

app.use('/suportewa', routes)

app.use(errors())
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {

        console.error(err);
        if (err instanceof Erro) {
            return response.status(err.statusCode).json({
                "status": "error: " + err.internalCode,
                "error": err.message
            })
        };

        return response.status(500).json({
            "status": "error: 1000",
            "error": "internal server error"
        });

    })

export { app, http }