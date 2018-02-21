import React from "react";
import Link from "next/link";
import { Container, Jumbotron, Navbar, Nav, NavLink, NavItem, NavbarBrand } from "reactstrap";
import PropTypes from "prop-types";

export default class extends React.Component {
	constructor() {
		super();
		this.state = {
			author: "Will Ashworth",
			role: "Software Engineer"
		};
	}
	static propTypes() {
		return {
			banner: PropTypes.bool.isRequired
		};
	}

	render() {
		if (this.props.banner === true) {
			return (
				<div>
					<Jumbotron className="text-light rounded-0" style={{
						backgroundColor: "rgba(73,155,234,1)",
						background: "radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
						boxShadow: "inset 0 0 100px rgba(0,0,0,0.1)"
					}}>
						<Container className="mt-2 mb-2">
							<img src="/static/brand/profile-picture/335x335.jpg" alt="Profile Picture"
								 className="header-pp" style={{ display: "block", margin: "0 auto" }}/>
							<h1 className="centralise-text">{this.state.author}</h1>
							<h3 className="centralise-text">{this.state.role}</h3>
						</Container>
					</Jumbotron>
					<Navigation />
				</div>
			);
		}
		return (
			<div>
				<Navigation/>
			</div>
		);
	}
}

export class Navigation extends React.Component {
	render() {
		return (
			<Navbar fixed className="navbar pt-3 pb-3">
				<Link href="/index">
					<a>Home</a>
				</Link>
				<Link href="/about-me">
					<a>About Me</a>
				</Link>
				<NavbarBrand>
					<img src="/static/brand/logo/310x400.png" className="nav-logo"/>
				</NavbarBrand>
				<Link href="/projects">
					<a>Projects</a>
				</Link>
				<Link href="/knowledge">
					<a>Knowledge</a>
				</Link>
			</Navbar>
		);
	}
}
