import React from "react";
import {
	Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
	Navbar, NavbarToggler, NavbarBrand, Modal, ModalHeader, ModalBody,
	ModalFooter, ListGroup, ListGroupItem
} from "reactstrap";
import Styles from "../css/index.scss";


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
				<p>(this.state.author}</p>
			</footer>
		);
	}
}
