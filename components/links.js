import React from "react";
import Link from "next/link";
import {
	Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
	Navbar, NavbarToggler, NavbarBrand, Modal, ModalHeader, ModalBody,
	ModalFooter, ListGroup, ListGroupItem
} from "reactstrap";
import { NextAuth } from "next-auth/client";
import Styles from "../css/index.scss";
import profilePic from "../static/brand/profilePic.jpg";

export default class extends React.Component {
	render() {
		return (
			<ListGroup>
				<ListGroupItem>
					<a className="pageLink" href="/pages/home">Home</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/pages/about-me">About Me</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/pages/projects">Projects</a>
				</ListGroupItem>
				<ListGroupItem>
					<a className="pageLink" href="/pages/knowledge">Knowledge</a>
				</ListGroupItem>
			</ListGroup>
		);
	}
}
