import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary">Left</Button>
				<Button variant="secondary">Middle</Button>
				<Button variant="secondary">Right</Button>
				<Button variant="secondary">Rightwqe</Button>
			</ButtonGroup>
			<Header />
		</div>
	);
}

export default App;
