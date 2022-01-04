import Circle from "./Circle";

export default function GameBoard() {
	return (
		<div className="game-board">
			<Circle type="paper" />
			<Circle type="scissor" />
			<Circle type="rock" />
		</div>
	)
}
