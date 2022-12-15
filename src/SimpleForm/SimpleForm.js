import React from 'react';

import Greetings from '../Greetings/Greetings.js';

class SimpleForm extends React.Component {
	render() {
		return (
			<div>
				<input type="text" name="firstName" />
				<Greetings firstName="John" />
			</div>
		);
	}
}

export default SimpleForm;