//core / nextjs components
import React from "react";
import Head from "next/head";
//custom components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//global styles
import "normalize.css";

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	static async getInitialProps({ req }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	render() {
		const { children } = this.props;
		console.log(this.props);
		const title = "Welcome to Nextjs";
		return (
			<React.Fragment>
				<Head>
					<title>{title}</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					{/*<link rel="stylesheet" href="" />*/}
				</Head>
				<Header />
				{/*<div>{children}</div>*/}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;
