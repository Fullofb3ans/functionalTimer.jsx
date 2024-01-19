import React, { useEffect, useReducer, useState } from 'react';

let timer;

const countReducer = (state, action) => {
	if (action == 'stop') {
		return {
			...state,
			start: false,
		};
	} else if (action == 'start') {
		return {
			...state,
			start: true,
		};
	} else if (action == 'reset') {
		return {
			count: 0,
			start: false,
		};
	} else if (action == 'tick') {
		return {
			count: state.count + 1,
			start: true,
		};
	}
};

export default function App() {
	const [{ count, start }, dispatch] = useReducer(countReducer, { count: 0, start: false });

	useEffect(() => {
		if (start == true) {
			const timer = setInterval(() => dispatch('tick'), 1000);
			return () => clearInterval(timer);
		}
	}, [start]);

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
				{!start ? (
					<button style={{ width: '10%', padding: '1%' }} onClick={() => dispatch('start')}>
						Run
					</button>
				) : (
					<button style={{ width: '10%', padding: '1%' }} onClick={() => dispatch('stop')}>
						Stop
					</button>
				)}
				<button style={{ width: '10%', padding: '1%' }} onClick={() => dispatch('reset')}>
					Reset
				</button>
			</div>
		</div>
	);
}
