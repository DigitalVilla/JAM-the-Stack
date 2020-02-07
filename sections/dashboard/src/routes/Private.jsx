import React from 'react';
import { navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const Private = ({ component: Component, location, ...rest }) => {
	const identity = useIdentityContext();
	const loggedIn = identity && identity.isLoggedIn;

	if (!loggedIn && location.pathname !== '/dashboard/login' ) {
		navigate('/dashboard/login', { replace: true });
		return null;
	}

	console.log('Unauthorized ');


  return ( <Component {...rest} />)
}

export default Private;
