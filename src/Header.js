import './Header.css'

export default function Header() {
	let score = 12
	return (
		<div className="header">
			<div className="title">Rock<br />Paper<br />Scissor</div>
			<div className="score">
				<span>Score</span>
				<span className="number">{score}</span>
			</div>
		</div>
	)
}
