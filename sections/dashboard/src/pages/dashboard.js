import React, { useEffect, useState } from 'react';
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";
import { Router } from "@reach/router";
import Layout from "../components/Layout.jsx";
import Profile from '../components/Profile.jsx'
import Base from "../routes/Base.jsx";
import Secret from "../routes/Secret.jsx";
import Login from "../routes/Login.jsx";

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
	const [isVisible, setVisibility] = useState(false);

	useEffect(() => {
		if (location.pathname.match(/^\/dashboard\/?$/)) {
			navigate('/dashboard/login', { replace: true });
		}
	}, []);

	// Helper functions
	const showModal = () => setVisibility(!isVisible);

	return (
		<Layout>
			<Profile />
			<Router>
				<Base path='/dashboard/base' />
				<Secret path='/dashboard/secret' />
				<Login path='/dashboard/login' showModal={showModal} />
			</Router>
			<IdentityModal
				showDialog={isVisible}
				onCloseDialog={showModal}
			/>

			<p>TODO: Create Dashboard</p>
		</Layout>
	)
}

export default Dashboard;