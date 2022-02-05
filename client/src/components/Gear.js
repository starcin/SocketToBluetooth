import { useState } from "react"

function Gear({ gear }) {
	const [mouseY, setMouseY] = useState(345)
	const [dragDist, setDragDist] = useState(0)
	let selectedElement = false
	let drag = false
	const gearSvg = (
		<svg
			draggable="true"
			onClick={dragKnob}
			onMouseDown={dragKnob}
			onMouseUp={dragKnob}
			onMouseLeave={dragKnob}
			// onMouseMove={dragKnob}
			onDrag={dragKnob}
			width="140"
			height="400"
			viewBox="0 0 140 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect id="panel" width="140" height="400" fill="#54565A" />
			<rect id="slot" x="30" y="40" width="16" height="320" fill="#212322" />
			<path
				className={gear === "1" ? "gear_lit" : "gear_unlit"}
				id="1"
				d="M111.922 68H106.316V45.5977H103.523V39.9922H111.922V68Z"
			/>
			<path
				className={gear === "2" ? "gear_lit" : "gear_unlit"}
				id="2"
				d="M118.328 145.391C118.328 146.549 118.107 147.643 117.664 148.672C117.221 149.688 116.616 150.579 115.848 151.348C115.092 152.103 114.207 152.702 113.191 153.145C112.176 153.587 111.089 153.809 109.93 153.809H107.117C106.727 153.809 106.362 153.88 106.023 154.023C105.685 154.167 105.385 154.368 105.125 154.629C104.878 154.876 104.682 155.169 104.539 155.508C104.396 155.846 104.324 156.211 104.324 156.602V159.395H117.566V165H98.7188V156.602C98.7188 155.443 98.9401 154.355 99.3828 153.34C99.8255 152.311 100.424 151.419 101.18 150.664C101.948 149.896 102.84 149.297 103.855 148.867C104.871 148.424 105.958 148.203 107.117 148.203H109.93C110.32 148.203 110.685 148.132 111.023 147.988C111.362 147.845 111.655 147.65 111.902 147.402C112.163 147.142 112.365 146.842 112.508 146.504C112.651 146.152 112.723 145.781 112.723 145.391C112.723 145 112.651 144.635 112.508 144.297C112.365 143.958 112.163 143.665 111.902 143.418C111.655 143.158 111.362 142.956 111.023 142.812C110.685 142.669 110.32 142.598 109.93 142.598H99.9297V136.992H109.93C111.089 136.992 112.176 137.214 113.191 137.656C114.207 138.099 115.092 138.704 115.848 139.473C116.616 140.228 117.221 141.113 117.664 142.129C118.107 143.145 118.328 144.232 118.328 145.391Z"
			/>
			<path
				className={gear === "D" ? "gear_lit" : "gear_unlit"}
				id="D"
				d="M120.039 248.996C120.039 250.285 119.87 251.529 119.531 252.727C119.206 253.911 118.737 255.025 118.125 256.066C117.513 257.095 116.784 258.039 115.938 258.898C115.091 259.745 114.147 260.474 113.105 261.086C112.064 261.698 110.944 262.173 109.746 262.512C108.561 262.837 107.324 263 106.035 263H97.5977V234.992H106.035C107.324 234.992 108.561 235.161 109.746 235.5C110.944 235.826 112.064 236.294 113.105 236.906C114.147 237.518 115.091 238.254 115.938 239.113C116.784 239.96 117.513 240.904 118.125 241.945C118.737 242.974 119.206 244.087 119.531 245.285C119.87 246.47 120.039 247.707 120.039 248.996ZM114.434 248.996C114.434 247.837 114.212 246.75 113.77 245.734C113.34 244.719 112.741 243.833 111.973 243.078C111.217 242.31 110.326 241.704 109.297 241.262C108.281 240.819 107.194 240.598 106.035 240.598H103.242V257.395H106.035C107.194 257.395 108.281 257.18 109.297 256.75C110.326 256.307 111.217 255.708 111.973 254.953C112.741 254.185 113.34 253.293 113.77 252.277C114.212 251.249 114.434 250.155 114.434 248.996Z"
			/>
			<path
				className={gear === "N" ? "gear_lit" : "gear_unlit"}
				id="N"
				d="M120 360H114.004L103.203 341.562V360H97.5977V331.992H103.594L114.395 350.449V331.992H120V360Z"
			/>
			<g
				className="draggable"
				id="knob"
				transform={`translate(0,${dragDist}) `}
			>
				<circle id="knob_2" cx="38" cy="345" r="29" fill="#C4BEB6" />
				<circle id="knob_3" cx="38" cy="345" r="27" fill="#212322" />
				<rect
					id="Rectangle 1"
					x="26"
					y="334"
					width="24"
					height="2"
					rx="0.5"
					fill="#C4C4C4"
				/>
				<rect
					id="Rectangle 2"
					x="26"
					y="344"
					width="24"
					height="2"
					rx="0.5"
					fill="#C4C4C4"
				/>
				<rect
					id="Rectangle 3"
					x="26"
					y="354"
					width="24"
					height="2"
					rx="0.5"
					fill="#C4C4C4"
				/>
			</g>
		</svg>
	)

	function dragKnob(e) {
		console.log(e)
		let CTM = e.target.getScreenCTM()
		if (e.type === "mousedown") {
			drag = e.target.parentNode.id === "knob" ? true : false
			// console.log("down")
		} else if (
			e.type === "mousemove" &&
			drag // &&
			// e.target.parentNode.id === "knob"
		) {
			// console.log("drag")
			let newMouseY = (e.clientY - CTM.f) / CTM.d
			let dragDist2 = newMouseY - mouseY
			// setDragDist(newMouseY - mouseY)
			setMouseY(newMouseY)
			// console.log(dragDist2)
		} else if (e.type === "mouseup" || e.type === "mouseleave") {
			drag = false
		}
	}

	return <div className="gearbox">{gearSvg}</div>
}

export default Gear
