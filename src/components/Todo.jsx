import React from 'react';
import { Icon } from '@iconify/react';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
	return (
		<div className='Todo'>
			<p 
				onClick={() => toggleComplete(task.id)}
				className={`${task.completed ? 'completed' : ''}`}>
				{task.task}
			</p>
			<div>
				<Icon 
					className='icon-change'
					icon="tabler:edit"
					onClick={() => editTodo(task.id)} />
				<Icon 
					className='icon-trash'
					icon="basil:trash-solid"
					onClick={() => deleteTodo(task.id)} />
			</div>
		</div>
	)
}

export default Todo;