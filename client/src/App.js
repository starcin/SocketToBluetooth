import { useEffect } from "react"
const { io } = require("socket.io-client")
// import "./App.css"

const socket = io("http://localhost:5000")

function App() {
	useEffect(() => {})
	return <div className="App"></div>
}

export default App
