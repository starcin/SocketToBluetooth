function LabelWithValue({ label, value, pre, post }) {
	return (
		<div>
			<div className="label">{label}</div>
			<div className="pre">{pre}</div>
			<div className="value">{value}</div>
			<div className="post">{post}</div>
		</div>
	)
}

export default LabelWithValue
