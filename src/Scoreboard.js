import './Scoreboard.css'
import titleImage from './img/logo.svg'

export default function Scoreboard() {
	let score = 12
	return (
		<div className="scoreboard">
			<img src={titleImage} alt="" />
			<div className="score">
				<span className="score-text">Score</span>
				<span className="score-number">{score}</span>
			</div>
		</div>
	)
}
