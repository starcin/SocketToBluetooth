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
	console.log("a user connected")
	socket.on("disconnect", (reason) => {
		console.log("user disconnected because", reason)
	})
})

httpServer.listen(5000, () => {
	console.log("listening on 5000")
})
