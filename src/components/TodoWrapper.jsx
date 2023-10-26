import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid'; 
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]); 

	useEffect(() => {
		const data = window.localStorage.getItem('todos');
		if(data !== null) setTodos(JSON.parse(data))
	}, []);

	const saveTodosToLocalStorage = (updatedTodos) => {
		setTodos(updatedTodos);
		window.localStorage.setItem('todos', JSON.stringify(updatedTodos));
	}

  const addTodo = todo => {
    const updatedTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
		saveTodosToLocalStorage(updatedTodos)
  }

	const toggleComplete = id => {
		const updatedTodos = todos.map(todo => todo.id === id ? {...todos, completed: !todo.completed} : todo);
		saveTodosToLocalStorage(updatedTodos);
	};

	const deleteTodo = id => {
		const updatedTodos = todos.filter(todo => todo.id !== id);
		saveTodosToLocalStorage(updatedTodos);
	}

	const editTodo = id => {
		const updatedTodos = todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo);
		saveTodosToLocalStorage(updatedTodos);
	}

	const editTask = (task, id) => {
		const updatedTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
		saveTodosToLocalStorage(updatedTodos);
	}
 
	return (
		<div className='TodoWrapper'>
			<h1>Get Things Done!</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				todo.isEditing ?
				  <EditTodoForm editTodo={editTask} task={todo}/>
					 : <Todo 
								task={todo}
								key={index}
								toggleComplete={toggleComplete}
								deleteTodo={deleteTodo}
								editTodo={editTodo} />
						))}
		</div>
	)
}

export default TodoWrapper;