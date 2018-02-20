import React from "react";
import { Container, Jumbotron } from "reactstrap";
import PropTypes from "prop-types";
import Links from "./links";

export default class extends React.Component {
	constructor() {
		super();
		this.state = {
			author: "Will Ashworth",
			role: "Software Engineer"
		};
		this.propTypes = {
			pagename: PropTypes.string.isRequired
		};
	}

	static propTypes() {
		return {
			pagename: PropTypes.string.isRequired
		};
	}

	render() {
		return (
			<Jumbotron className="text-light rounded-0" style={{
				backgroundColor: "rgba(73,155,234,1)",
				background: "radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
				boxShadow: "inset 0 0 100px rgba(0,0,0,0.1)"
			}}>
				<Container className="mt-2 mb-2">
					<header>
						<img src="/static/brand/profile-picture/335x335.jpg" alt="Profile Picture" className="header-pp"/>
					</header>
				</Container>
			</Jumbotron>
		);
	}
}
