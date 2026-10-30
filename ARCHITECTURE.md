# Architecture

Static React application using TypeScript and Vite, Tailwind CSS, Framer Motion and Lucide. Content lives in src/data.ts, command execution in src/commands.ts and terminal state in src/Terminal.tsx. App.tsx composes semantic sections. CSS provides responsive layout and reduced motion handling. No backend, database, secrets or runtime APIs. Project filters and command history are in-memory. Verified profile links provide contact without inventing an email address. Amplify builds with npm ci and npm run build, publishing dist.
