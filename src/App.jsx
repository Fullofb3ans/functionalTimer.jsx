import React, { Component, useState } from 'react';

let timer;
export default function App() {
	const [count, setCount] = useState(0);
	const [start, setStart] = useState(false);

	let startTimer = () => {
		setStart(true);
		return (timer = setInterval(() => {
			setCount((count) => count + 1);
		}, 1000));
	};

	let stopTimer = () => {
		setStart(false);
		clearInterval(timer);
	};

	let reset = () => {
		setStart(false);
		setCount(0);
		clearInterval(timer);
	};

	return (
		<div style={{ textAlign: 'center', fontSize: 'X-large' }} className="App">
			<h1>Timer</h1>
			<div>{count}</div>

			<div
				style={{
					margin: '3%',
					display: 'flex',
					flexWrap: 'wrap',
					flexdirection: 'row',
					justifyContent: 'center',
					gap: '6%',
				}}>
				{start == false ? (
					<button style={{ width: '10%', padding: '1%' }} onClick={startTimer}>
						Run
					</button>
				) : (
					<button style={{ width: '10%', padding: '1%' }} onClick={stopTimer}>
						Stop
					</button>
				)}
				<button style={{ width: '10%', padding: '1%' }} onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
}
