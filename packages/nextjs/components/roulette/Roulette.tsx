import { useState } from "react";

import Wheel from "~~/components/roulette/Wheel";
import Board from "~~/components/roulette/Board";
import { Bet } from "~~/types/roulette/bets";

const Roulette = () => {
	const [currentBetValue, setCurrentBetValue] = useState<number>(0.01);
	const [bets, setBets] = useState<Bet[]>([]);
	const [defaultTableCellValue, setDefaultTableCellValue] = useState<number[]>([
		0,
	]);

	const resetBets = () => {
		setDefaultTableCellValue([0]);
		setBets([]);
	};

	return (
		<>
			<div className="flex flex-col md:flex-row justify-evenly items-center">
				<Wheel
					bets={bets}
					currentBetValue={currentBetValue}
					resetBets={resetBets}
					setCurrentBetValue={setCurrentBetValue}
				/>
				<Board
					defaultTableCellValue={defaultTableCellValue}
					currentBetValue={currentBetValue}
					setBets={setBets}
				/>
			</div>
		</>
	);
};

export default Roulette;
