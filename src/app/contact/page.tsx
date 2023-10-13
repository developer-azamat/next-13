"use client"
import React from 'react'
import { useState } from 'react';

const Contact = () => {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			Contact
			<p>{counter}</p>
			<button onClick={() => setCounter(e => (e += 1))}>Increment </button>
			<button onClick={() => setCounter(e => (e - 1))}>Decrement </button>
		</div>
	)
}

export default Contact