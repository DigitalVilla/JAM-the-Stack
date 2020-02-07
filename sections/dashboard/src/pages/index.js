import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout.jsx";

export default () => (
	<Layout>
		<h1>Campaign Manager</h1>
		<p>JAMstack Server-less Authentication!</p>
		<Link to="/dashboard">Go to Dashboard</Link>
	</Layout>
  )