import './Choice.css'

export default function Choice(props) {
	return (
		<button className={`choice-btn ${props['data-type']}`}>
			<div className={`choice ${props['data-type']}`}>
				<img src={`img/icon-${props['data-type']}.svg`} alt="" width="50" />
			</div>
		</button>
	)
}
