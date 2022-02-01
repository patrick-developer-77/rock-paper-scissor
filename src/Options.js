import Choice from "./Choice";
import './Options.css'

export default function Options() {
	return (
		<div className="options">
			<Choice className="paper" data-type="paper" />
			<Choice className="scissors" data-type="scissors" />
			<Choice className="rock" data-type="rock" />
		</div>
	)
}
