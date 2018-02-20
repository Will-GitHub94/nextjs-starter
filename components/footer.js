import React from "react";

export default class extends React.Component {
	constructor() {
		super();
		this.state = {
			author: "Will Ashworth",
		};
	}

	render() {
		return (
			<footer className="footer">
				<p>{this.state.author}</p>
			</footer>
		);
	}
}
