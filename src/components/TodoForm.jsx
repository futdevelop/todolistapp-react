import React, { useEffect, useState } from 'react'

const TodoForm = ({addTodo}) => {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		value !== '' ? addTodo(value) : null;
		setValue('');
 }

 	const handleForm = (e) => {
		const value = e.target.value
		setValue(value);
		window.localStorage.setItem('form', value);
	}

	useEffect(() => {
			const data = window.localStorage.getItem('form');
			if (data !== null) setValue(data);
	}, [])

	return (
		<form className='TodoFrom' onSubmit={handleSubmit}>
			<input 
				type="text"
				className='todo-input'
				placeholder='What is the task today?'
				value={value}
				onChange={(e) => handleForm(e)} />
			<button type='submit' className='todo-btn'>Add Task</button>
		</form>
	)
}

export default TodoForm