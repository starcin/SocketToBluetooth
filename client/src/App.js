import "./index.css"
import { useEffect, useState } from "react"
import ControlPanel from "./components/ControlPanel"
const { io } = require("socket.io-client")

const socket = io("http://localhost:5000")

function App() {
	const [userId, setUserId] = useState("")
	const [deviceId, setDeviceId] = useState("")

	useEffect(() => {
		//socket.on eventlerini buraya koy
	}, [])
	return (
		<div className="App">
			<ControlPanel socket={socket} />
		</div>
	)
}

export default App
