import React from 'react'

import TodoItem from './TodoItem'

function MainContent() {
	//here we have our todo list
	const date = new Date()

	return (
	<main className="todo-list">
		<p>You have {24 - date.getHours()} hours left in the day to finish your list!</p>
		<TodoItem />
		<TodoItem />
		<TodoItem />
		<TodoItem />

	</main>
	)
}

export default MainContent