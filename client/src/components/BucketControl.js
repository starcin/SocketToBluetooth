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
			<h1 className="text-3l font-bold underline">abcde</h1>
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
