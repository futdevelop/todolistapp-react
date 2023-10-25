import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = e => {
		e.preventDefault();

		editTodo(value, task.id);
		setValue('');
 }

	return (
		<form className='TodoFrom' onSubmit={handleSubmit}>
			<input 
				type="text"
				className='todo-input'
				placeholder='Update Task'
				value={value}
				onChange={(e) => setValue(e.target.value)} />
			<button
			 	type='submit'
				className={`${task.isEditing ? 'todo-btn-edited' : 'todo-btn'}`}>
				Update Task</button>
		</form>
	)
}

export default EditTodoForm;