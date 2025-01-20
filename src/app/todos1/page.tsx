'use client';

import { useQuery, useZero } from '@rocicorp/zero/react';

export default function Todos1Page() {
	const z = useZero();
	const todosQuery = z.query.todos;
	const [todos] = useQuery(todosQuery);

	console.log('todos1', todos);
	return (
		<div>
			<h1>Todos 1 Page</h1>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span>{todo.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
