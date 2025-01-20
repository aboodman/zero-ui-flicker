'use client';

import { useQuery, useZero } from '@rocicorp/zero/react';

export default function Todos2Page() {
	const z = useZero();
	const todosQuery = z.query.todos;
	const [todos] = useQuery(todosQuery);

	console.log('todos2', todos);
	return (
		<div>
			<h1>Todos 2 Page</h1>
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
