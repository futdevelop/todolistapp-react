import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		value !== '' ? addTodo(value) : null;
		setValue('');
 }

	return (
		<form className='TodoFrom' onSubmit={handleSubmit}>
			<input 
				type="text"
				className='todo-input'
				placeholder='What is the task today?'
				value={value}
				onChange={(e) => setValue(e.target.value)} />
			<button type='submit' className='todo-btn'>Add Task</button>
		</form>
	)
}

export default TodoForm