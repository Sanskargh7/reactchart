import React from 'react'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Component = ({ dataX, dataY }) => {

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Plot X and Y chart',
			},
		},
	};

	const labels = dataX.slice(0, 50).map((item) => item.Label);

	const data = {
		labels,
		datasets: [
			{
				label: 'X',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
				hoverBorderColor: 'rgba(255, 99, 132, 1)',
				data: dataX.slice(0, 50).map(item => parseFloat(item.RandomNumber)),
			},
			{
				label: 'Y',
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
				hoverBorderColor: 'rgba(54, 162, 235, 1)',
				data: dataY.slice(0, 50).map(item => parseFloat(item.RandomNumber)),
			},
		],
	};

	return <Line options={options} data={data} />;
}

export default Component