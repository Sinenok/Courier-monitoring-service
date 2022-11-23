import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function Header() {
	return (
		<div className="App">
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary">Header</Button>
			</ButtonGroup>
		</div>
	);
}

export default Header;
