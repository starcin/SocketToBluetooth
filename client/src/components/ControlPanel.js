import { useEffect, useState } from "react"
import BucketControl from "./BucketControl"
import Speedometer from "./Speedometer"
import LabelWithValue from "./LabelWithValue"

function ControlPanel({ socket }) {
	const [speed, setSpeed] = useState(0)
	const [rev, setRev] = useState(0)
	const [gear, setGear] = useState("N")

	// function emitSomething() {
	// 	socket.emit("some-event", "this is some event")
	// 	setSpeed(4)
	// }

	function onBucketCommand(command) {
		socket.emit("bucket", command)
		setSpeed(speed + 10)
	}

	socket.on("speedUpdate", (speedVal) => {setSpeed(speedVal)})
	socket.on("revUpdate", (speedVal) => {setSpeed(speedVal)})


	// useEffect(() => {
	// 	socket.on("connect", () => {
	// 		console.log("I ", socket.id, " am connected!")
	// 		socket.emit("i-am-device", socket.id)
	// 	})
	// })

	return (
		<div className="control-panel">
			{/* <button onClick={emitSomething}> BTN</button> */}
			<BucketControl bucketCommandEvent={onBucketCommand} />
			<Speedometer speed={speed} />
			<LabelWithValue label={"Speed"} value={speed} post={"km/h"} />
			<LabelWithValue label={"Rev"} value={rev} post={"rpm"} />
			<LabelWithValue label={"Gear"} value={gear} />
		</div>
	)
}

export default ControlPanel
