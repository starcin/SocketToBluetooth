import bucket_up from "./bucket_up.svg"
import bucket_down from "./bucket_down.svg"
import { ReactComponent as BucketUp } from "./bucket_up.svg"
import { ReactComponent as BucketDown } from "./bucket_down.svg"

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
		<div className="flex flex-col w-24 h-40">
			<button
				className="bg-[url('components/BucketControl/button_bg.svg')] group p-4 h-1/2 flex items-center rounded-t-2xl"
				onMouseDown={bucketUp}
				onMouseUp={bucketStop}
				onMouseLeave={bucketStop}
			>
				{/* <img
					className="fill-orange-400 stroke-violet-500 text-green-400"
					src={bucket_up}
					alt="bucket_up"
				/> */}
				<BucketUp className="fill-gray-300 group-active:stroke-amber-300 group-active:stroke-[12px] group-active:fill-amber-100" />
			</button>
			<button
				className="bg-[url('components/BucketControl/button_bg.svg')] group p-4 h-1/2 flex items-center rounded-b-2xl"
				onMouseDown={bucketDown}
				onMouseUp={bucketStop}
				onMouseLeave={bucketStop}
			>
				{/* <img className="text-stone-900" src={bucket_down} alt="bucket_down" /> */}
				<BucketDown className="fill-gray-300 group-active:stroke-amber-300 group-active:stroke-[12px] group-active:fill-amber-100" />
			</button>
		</div>
	)
}

export default BucketControl
