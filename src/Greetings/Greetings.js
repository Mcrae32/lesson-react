import React from 'react'

// const Greetings = (props) => (
// 	<div>Hey you! {props.firstName} {props.lastName}!</div>
// )


class Greetings extends React.Component {
	render() {
		return (
			<div>
				Hey you! {this.props.firstName} {this.props.lastName}!
			</div>		
		)
	}
}

export default Greetings;