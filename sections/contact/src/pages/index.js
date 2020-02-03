import React from 'react'
import Form from '../components/form.jsx'
import './style.css'

import { setConfig } from 'react-hot-loader'

setConfig({
    showReactDomPatchNotification: false
})

export default () => (
	<>
		<main>
			<h1>Send a Message</h1>

			<Form />
		</main>
	</>
);
