import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
	// jumlah data
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

	// max data dari datapoint
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}
