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

		case 'resetForm':
		default:
			return INIT_STATE;
	}
}

const Form = () => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const updateFieldValue = field => event => {
		state.status !== 'PENDING' &&
		dispatch({
			type: 'updateFieldValue',
			value: event.target.value,
			field
		})
	}

	const setStatus = status => dispatch({ type: 'updateStatus', status: status });
	const resetForm = () => dispatch({type: 'resetForm'});

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('/api/contact', {
			method: 'post',
			body: JSON.stringify(state)
		})
		.then(res => res.json())
		.then(res => { console.log(res);
		 setStatus(res.status)})
		 .catch(err => setStatus('ERROR'))
	}

	return state.status === 'SUCCESS' ? (<Message status={state.status} close={resetForm}/>) :
	(<form className={`${styles.form} ${state.status === 'PENDING' && styles.pending}`} onSubmit={handleSubmit}>
		{ state.status !== "IDLE" && state.status !== "PENDING" && <Message status={state.status}/> }
		<Field name="name" state={state} onChange={updateFieldValue}/>
		<Field name="email" type="email" state={state} onChange={updateFieldValue}/>
		<Field name="subject" state={state} onChange={updateFieldValue}/>
		<Field name="body" field="textarea" state={state} onChange={updateFieldValue}/>
		<button className={styles.button}>Send</button>
	</form>);
}

const Message = (props) => {
	const message = props.status === 'SUCCESS' ? 'Message Sent' : 'Try again later';
	return (
		<div className={`${styles.modal} ${styles[props.status.toLowerCase()]}`}>
			{props.close && <button onClick={props.close}>X</button> }
			<p><strong>Status :</strong> {props.status}</p>
			<span className={styles.divider}>|</span>
			<p><strong>Message :</strong> {message}</p>
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
