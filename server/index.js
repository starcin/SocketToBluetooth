const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {})

io.on("connection", (socket) => {
	console.log("a user connected")
	socket.on("disconnect", (reason) => {
		console.log("user disconnected because", reason)
	})
})

httpServer.listen(3000, () => {
	console.log("listening on 3000")
})
