import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
})

io.on("connection", (socket) => {
	console.log("a client connected")
	socket.on("disconnect", (reason) => {
		console.log("client with id: ", socket.id, " disconnected because", reason)
	})

	socket.on("some-event", (arg) => {
		console.log(arg)
	})

	socket.on("bucket", (command) => {
		console.log(command)
	})
})

httpServer.listen(5000, () => {
	console.log("listening on 5000")
})
