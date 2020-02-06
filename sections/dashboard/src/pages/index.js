import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout.jsx";

export default () => (
	<Layout>
		<h1>JAMstack Rules!</h1>
		<p>Log in to find out why</p>
		<Link to="/dashboard">Go to Dashboard</Link>
	</Layout>
  )