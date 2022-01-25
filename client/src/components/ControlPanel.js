import { useEffect, useState } from "react"
import BucketControl from "./BucketControl"
import Speedometer from "./Speedometer"
import Gear from "./Gear"
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
	}

	function onGearChange(gear) {
		socket.emit("gear", gear)
	}

	socket.on("speedUpdate", (speedVal) => {
		setSpeed(speedVal)
	})
	socket.on("revUpdate", (revVal) => {
		setRev(revVal)
	})

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
			<Gear gear="1" />
			<LabelWithValue label={"Speed"} value={speed} post={"km/h"} />
			<LabelWithValue label={"Rev"} value={rev} post={"rpm"} />
			<LabelWithValue label={"Gear"} value={gear} />
		</div>
	)
}

export default ControlPanel
