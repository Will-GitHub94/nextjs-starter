import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Cookies from "universal-cookie";
import Package from "../package";
import Styles from "../css/index.scss";
import PropTypes from "prop-types";

export default class extends React.Component {
	static propTypes() {
		return {
			session: PropTypes.object.isRequired,
			providers: PropTypes.object.isRequired,
			children: PropTypes.object.isRequired,
			fluid: PropTypes.boolean,
			navmenu: PropTypes.boolean,
			signinBtn: PropTypes.boolean
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			navOpen: false,
			modal: false,
			providers: null,
			title: "Will Ashworth"
		};
	}

	render() {
		return (
			<React.Fragment>
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<title>{Package.name}</title>
					<style dangerouslySetInnerHTML={{ __html: Styles }}/>
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
				</Head>
				<MainBody navmenu={this.props.navmenu} fluid={this.props.fluid} container={this.props.container}>
					{this.props.children}
				</MainBody>
				<Container fluid={this.props.fluid}>

				</Container>
			</React.Fragment>
		);
	}
}

export class MainBody extends React.Component {
	render() {
		if (this.props.container === false) {
			return (
				<React.Fragment>
					{this.props.children}
				</React.Fragment>
			);
		} else if (this.props.navmenu === false) {
			return (
				<Container fluid={this.props.fluid} style={{ marginTop: "1em" }}>
					{this.props.children}
				</Container>
			);
		}
		return (
			<Container fluid={this.props.fluid} style={{ marginTop: "1em" }}>
				<Row>
					<Col xs="12" md="9" lg="10">
						{this.props.children}
					</Col>
					<Col xs="12" md="3" lg="2" style={{ paddingTop: "1em" }}>
						<h5 className="text-muted text-uppercase">Examples</h5>
					</Col>
				</Row>
			</Container>
		);
	}
}
