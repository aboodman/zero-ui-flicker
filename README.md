# UI Flicker Issue Reproduction

This is a minimal reproducible example of a UI flicker issue in a Next.js 15 project. The project was created using:

```bash
npx create-next-app@latest
```

All default configurations were selected during setup, except Turbopack was disabled.

## Environment Setup

Create a `.env` file in the root directory with the following structure:

```env
ZERO_UPSTREAM_DB="postgresql://user:password@127.0.0.1:5430/todos"
ZERO_CVR_DB="postgresql://user:password@127.0.0.1:5430/todos_cvr"
ZERO_CHANGE_DB="postgresql://user:password@127.0.0.1:5430/todos_cdb"
ZERO_AUTH_SECRET="secretkey"
ZERO_REPLICA_FILE="/tmp/zstart_replica.db"
NEXT_PUBLIC_SERVER="http://localhost:4848"
```

Note: Replace the credentials and secrets with your own values.

## Running the Project

Execute the following commands in separate terminals:

1. Start the database:

   ```bash
   npm run dev:db-up
   ```

2. Start the zero-cache server:

   ```bash
   npm run dev:zero-cache
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Reproducing the Issue

1. Open your browser's Developer Console
2. Navigate between the "Todos 1" and "Todos 2" pages using the sidebar
3. Observe the console logs - you should see instances where the todos array is empty `[]`

Note: This issue occurs frequently but may not be reproducible 100% of the time.
