import { io } from "../app";

io.on("connect", (socket) => {
    socket.on("first_access", (params) => {
        console.log(params)
    })
})