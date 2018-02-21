import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

export default class extends React.Component {
	render() {
		return (
			<Layout {...this.props} navmenu={false} container={false}>
				<Header banner={true} pagename="Home"/>
				<Footer/>
			</Layout>
		);
	}
}
