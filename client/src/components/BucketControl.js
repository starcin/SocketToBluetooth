import BucketButton from "./BucketButton"

function BucketControl({ bucketCommandEvent }) {
	function bucketUp() {
		bucketCommandEvent("UP")
		console.log("UPPP")
	}

	function bucketDown() {
		bucketCommandEvent("DOWN")
	}

	function bucketStop() {
		bucketCommandEvent("STOP")
	}

	return (
		<div className="control_bucket">
			<BucketButton
				direction={"UP"}
				onButtonUp={bucketStop}
				onButtonDown={bucketUp}
			/>
			<BucketButton
				direction={"DOWN"}
				onButtonUp={bucketStop}
				onButtonDown={bucketDown}
			/>
		</div>
	)
}

export default BucketControl
