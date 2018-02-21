import React from "react";
import { Container } from "reactstrap";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

export default class extends React.Component {

	constructor() {
		super();
		this.state = {
			pageName: "Home"
		};
	}

	render() {
		return (
			<Layout {...this.props} navmenu={false} container={false}>
				<Header banner={true} pagename="Home"/>
				<Container className="mt-2 mb-2">
					<h1 className="display-2">{this.state.pageName}</h1>
					<p className="lead">Hey! My name is Will Ashworth
					<br />...
					<br />..
					<br />.
					<br />
					<em>(although that was probably obvious from the header)</em>. Basic overview is
						that I am a Software Engineer. Yep, broad term isn't it? Well I prefer to say Software Engineer
						over Developer as coding is not all I do...also, my degree was Software Engineering. This site
						is just my portfolio in a broad overview. You can see a:
					</p>
					<ul>
						<li className="lead">Little bit about me <em>(which is basically my CV lets be honest)</em></li>
						<li className="lead">Projects I have worked on</li>
						<li className="lead">...And a cool little section called 'Knowledge'...<em>ooooooo</em></li>
					</ul>
					<p className="lead">
						The Knowledge section is a group of markdown files held in 1 of my Git repos. As people often complain
						about, when something new goes into your brain, it usually has the unfortunate side effect of pushing
						something else out <em>(damn you 10%!!)</em>. So...in light of this I created a repo that I will probably go back
						to in later life to just brush up on things I have forgotten over my career. If you wanna take a look
						and think I have missed something out, consider becoming a contributor &01F601
					</p>
				</Container>
				<Footer/>
			</Layout>
		);
	}
}
