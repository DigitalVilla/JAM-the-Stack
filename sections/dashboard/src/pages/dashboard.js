import React, { useEffect } from 'react';
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../components/Layout.jsx";
import Profile from '../components/Profile.jsx'
import Base from "../routes/Base.jsx";
import Secret from "../routes/Secret.jsx";
import Login from "../routes/Login.jsx";

const Dashboard = ({ location }) => {

	useEffect(() => {
		if (location.pathname.match(/^\/dashboard\/?$/)) {
			navigate('/dashboard/login', { replace: true });
		}
	}, []);

	return (
		<Layout>
			<Profile />
			<Router>
				<Base path='/dashboard/base' />
				<Secret path='/dashboard/secret' />
				<Login path='/dashboard/login' />
			</Router>

			<p>TODO: Create Dashboard</p>
		</Layout>
	)
}

export default Dashboard;