import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./assets/scss/theme.scss";
import "./assets/css/app.css";

// Routes 
import AppRoute from "./routes/route";
import { authProtectedRoutes, publicRoutes } from "./routes";

// Layouts
import VerticalLayout from "./components/VerticalLayout";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getLayout = this.getLayout.bind(this);
	}

	/**
   * Returns the layout
   */
	getLayout = () => {
		let layoutCls = VerticalLayout;

		switch (this.props.layout.layoutType) {
			case "horizontal":
				layoutCls = HorizontalLayout;
				break;
			default:
				layoutCls = VerticalLayout;
				break;
		}
		return layoutCls;
	};

	render() {
		const Layout = this.getLayout();

		return (
			<React.Fragment>

				<Routes>
					{publicRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								<NonAuthLayout>
									{route.component}
								</NonAuthLayout>
							}
							key={idx}
							exact={true}
						/>
					))}

					{authProtectedRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								<AppRoute>
									<Layout>{route.component}</Layout>
								</AppRoute>}
							key={idx}
							exact={true}
						/>
					))}
				</Routes>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout
	};
};


export default connect(mapStateToProps, null)(App);
