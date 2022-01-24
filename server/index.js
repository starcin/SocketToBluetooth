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

let deviceId

io.on("connection", (socket) => {
	console.log("a client with id:", socket.id, "connected")
	socket.on("disconnect", (reason) => {
		console.log("client with id:", socket.id, "disconnected because", reason)
	})

	socket.on("i-am-device", (id) => {
		deviceId = id
		console.log("The device id is:", deviceId)
	})

	socket.on("some-event", (arg) => {
		console.log(arg)
	})

	socket.on("bucket", (command) => {
		io.to(deviceId).emit("bucket", command)
	})

	socket.on("gear", (gear) => {
		io.to(deviceId).emit("gear", gear)
	})

	socket.on("speedUpdate", (speedVal) => {
		socket.broadcast.emit("speedUpdate", speedVal)
	})

	socket.on("revUpdate", (revVal) => {
		socket.broadcast.emit("speedUpdate", revVal)
	})
})

httpServer.listen(5000, () => {
	console.log("listening on 5000")
})
