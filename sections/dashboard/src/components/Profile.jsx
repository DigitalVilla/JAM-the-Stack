import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from "react-netlify-identity";

const Profile = ({ showModal }) => {
	const identity = useIdentityContext();

	const loggedIn = identity && identity.isLoggedIn;

	const name = identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.full_name;

	return (
		loggedIn &&  (
			<div className="dashboard-header">
				<nav>
					<Link to="/dashboard/secret" activeClassName="active"> Secret</Link>
					<Link to="/dashboard/identity" activeClassName="active"> Identity</Link>
					<Link to="/dashboard/manager" activeClassName="active"> Manager</Link>
				</nav>

				<div>
					<span> Logged in as {name} </span>
					<button onClick={ showModal }> Log Out </button>
				</div>
			</div>
		)
	)
}

export default Profile;
