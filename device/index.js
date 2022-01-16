import { io } from "socket.io-client"
import dgram from "dgram"

// import SerialPort from "serialport"

// const port = new SerialPort("CNCA0", { baudRate: 57600 })

const PORT = 4444
const HOST = "127.0.0.1"
// const dgram = require("dgram")
const client = dgram.createSocket("udp4")

const socket = io("http://localhost:5000")

function serialConfirm(err) {
	if (err) {
		return console.log("Error on write: ", err.message)
	}
	console.log("message written")
}

function UdpConfirm(err) {
	if (err) {
		client.close()
	} else {
		console.log("Data sent!")
	}
}

socket.on("connect", () => {
	console.log("I", socket.id, "am connected!")
	socket.emit("i-am-device", socket.id)
})

socket.on("bucket", (command) => {
	console.log("Bucket is going", command)
	switch (command) {
		case "UP":
			// port.write("BKTUP", serialConfirm)
			client.send(Buffer.from("BKTUP"), PORT, HOST, UdpConfirm)
			break
		case "DOWN":
			// port.write("BKTDW", serialConfirm)
			client.send(Buffer.from("BKTDW"), PORT, HOST, UdpConfirm)
			break
		case "STOP":
			// port.write("BKTST", serialConfirm)
			client.send(Buffer.from("BKTST"), PORT, HOST, UdpConfirm)
			break
	}
})
