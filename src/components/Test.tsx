import { useState } from "react";

function Test() {
	const [cells, setCells] = useState(['A', 'B', 'C']);

	function changeCellContent(newCellValue: string, indexToUpdate: number) {
		setCells((prevCells) =>
			prevCells.map((cell, i) =>
				i === indexToUpdate ? newCellValue : cell
			)
		)
	}

	function handlePlusClicked(i: number) {
		setCells(prevCells => [
			...prevCells.slice(0, i +1),
			"_",
			...prevCells.slice(i+ 1),
		])
	}

	return (
		<div>
			{cells.map((cell, i) => (
				<div key={`${cell}-${i}`} className="cell">
					<input
						onChange={(e) => changeCellContent(e.target.value, i)}
						value={cell}
					/>
					{i < cells.length - 1 && (
						<button onClick={() => handlePlusClicked(i)}>+</button>
					)}
				</div>
			))}
		</div>
	);
}