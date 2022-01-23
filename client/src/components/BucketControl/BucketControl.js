import BucketButton from "./BucketButton"

function BucketControl({ bucketCommandEvent }) {
	function bucketUp() {
		bucketCommandEvent("UP")
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
				onButtonUp={bucketUp}
				onButtonDown={bucketStop}
			/>
			<BucketButton
				direction={"DOWN"}
				onButtonUp={bucketDown}
				onButtonDown={bucketStop}
			/>
		</div>
	)
}

export default BucketControl
