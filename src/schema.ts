import {
	createSchema,
	createTableSchema,
	definePermissions,
	ANYONE_CAN,
} from '@rocicorp/zero';

export const todosSchema = createTableSchema({
	tableName: 'todos',
	columns: {
		id: 'string',
		name: 'string',
		checked: 'boolean',
		createdAt: 'string',
		updatedAt: 'string',
	},
	primaryKey: 'id',
});

export const schema = createSchema({
	version: 1,
	tables: {
		todos: todosSchema,
	},
});

export const permissions = definePermissions(schema, () => {
	return {
		todos: {
			row: {
				select: ANYONE_CAN,
				insert: ANYONE_CAN,
				update: ANYONE_CAN,
				delete: ANYONE_CAN,
			},
		},
	};
});
