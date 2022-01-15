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
		<div className="bucket-control">
			<button
				onMouseDown={bucketUp}
				onMouseUp={bucketStop}
				onMouseLeave={bucketStop}
			>
				Bucket UP
			</button>
			<button
				onMouseDown={bucketDown}
				onMouseUp={bucketStop}
				onMouseLeave={bucketStop}
			>
				Bucket DOWN
			</button>
		</div>
	)
}

export default BucketControl
