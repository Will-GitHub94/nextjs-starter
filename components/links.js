import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class extends React.Component {
	render() {
		return (
			<ListGroup>
				<ListGroupItem>
					<a className="pageLink" href="/index">Home</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/about-me">About Me</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/projects">Projects</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/knowledge">Knowledge</a>
				</ListGroupItem>
			</ListGroup>
		);
	}
}
