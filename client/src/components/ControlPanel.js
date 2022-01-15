import { useEffect, useState } from "react"
import BucketControl from "./BucketControl"
import LabelWithValue from "./LabelWithValue"

function ControlPanel({ socket }) {
	const [speed, setSpeed] = useState(0)
	const [rev, setRev] = useState(0)
	const [gear, setGear] = useState("N")

	function emitSomething() {
		socket.emit("some-event", "this is some event")
		setSpeed(4)
	}

	function onBucketCommand(command) {
		socket.emit("bucket", command)
	}

	// useEffect(() => {
	// 	// console.log(socket, socket.id, "effect çi")
	// })

	return (
		<div className="control-panel">
			<button onClick={emitSomething}> BTN</button>
			<BucketControl bucketCommandEvent={onBucketCommand} />
			<LabelWithValue label={"Speed"} value={speed} post={"km/h"} />
			<LabelWithValue label={"Rev"} value={rev} post={"rpm"} />
			<LabelWithValue label={"Gear"} value={gear} />
			{/* {console.log(socket.id, "rdd")} */}
		</div>
	)
}

export default ControlPanel
