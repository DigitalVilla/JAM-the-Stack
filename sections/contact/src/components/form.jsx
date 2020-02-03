import React, { useReducer } from 'react';
import styles from './form.module.css';

const INIT_STATE = {
	name: '',
	email: '',
	subject: '',
	body: '',
	status: 'IDLE'
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'updateFieldValue':
			return { ...state, [action.field]: action.value };

		case 'updateStatus':
			return { ...state, status: action.status };

		default:
			return INIT_STATE;
	}
}

const Form = () => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const updateFieldValue = field => event => {
		dispatch({
			type: 'updateFieldValue',
			value: event.target.value,
			field
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);


		//TODO: send Message
	}

	let msg = state.status === 'SUCCESS' ? 'Message Sent' : 'Try again later';

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			{ state.status !== "IDLE" &&
				<Message status={state.status} message={msg}/>
			}
			<Field name="name" state={state} onChange={updateFieldValue}/>
			<Field name="email" type="email" state={state} onChange={updateFieldValue}/>
			<Field name="subject" state={state} onChange={updateFieldValue}/>
			<Field name="body" field="textarea" state={state} onChange={updateFieldValue}/>
			<button className={styles.button}>Send</button>
		</form>
	)
}

const Message = (props) => {
	return (
		<div className={`${styles.modal} ${styles[props.status.toLowerCase()]}`}>
			<p><strong>Status :</strong> {props.status}</p>
			<span className={styles.divider}>|</span>
			<p><strong>Message :</strong> {props.message}</p>
		</div>
	)
}

const Field = (props) => {
	const Field = props.field || 'input';

	return (
		<label className={styles.label}>
			{props.name}:
			<Field
				className={styles.input}
				type={props.type || "text"}
				name={props.name}
				value={props.state[props.name]}
				onChange={props.onChange(props.name)}
				required
			/>
		</label>
	)
}

export default Form;
