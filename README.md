# API Music Launcher (Fastify + Prisma)

Backend API for uploading, downloading, syncing, and managing user-owned musics. Built with Fastify, Prisma, Cloudinary, and JWT auth.

## Requirements
- Node.js 18+
- PostgreSQL (local, Docker, or remote)
- Cloudinary account (for media upload)

## Environment
Create `.env` with at least:
```env
PORT=3333
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
```

## Install & Setup
```bash
npm install
npm run prisma:generate
npm run prisma:migrate
```

Optional: run Postgres via Docker Compose
```bash
docker compose up -d
```

## Development
```bash
npm run dev
```
Server will bind to `PORT` and add `userId` to requests via JWT middleware.

## Project Structure
- `src/controllers/` – request handlers
	- `music-controllers.ts` – upload, download, list, delete
	- `user-music-controllers.ts` – fetch my musics, sync relation
- `src/usecases/` – business logic (application layer)
- `src/repositories/` – DB access (Prisma implementations)
- `src/middlewares/` – auth (`loginRequired`), upload
- `prisma/schema.prisma` – database schema

## Core Features
- Upload music to Cloudinary and persist metadata.
- Download (register from URL) with generated thumbnail.
- Fetch all musics or only the authenticated user's musics.
- Sync a music with the authenticated user (create relation).
- Delete a music and its user relation.

## API Endpoints

Authentication required for most endpoints (`loginRequired`).

- Upload
	- POST `/music/upload` – multipart file (audio/video). Returns `{ url, fileName }`. Status: 201.
- Download/Register
	- POST `/music/download` – body `{ url }`. Returns `{ musicId, cloudinaryUrl, thumbnailUrl }`. Status: 201.
- List
	- GET `/music` – list all musics. Status: 200.
	- GET `/music/me` – list musics linked to current user. Status: 200.
- Sync Relation
	- PUT `/music/:musicId/sync` – link music to current user. Status: 204.
- Delete
	- DELETE `/music/:musicId` – removes relation and deletes the music. Status: 204.

## Error Handling
- Validation errors (Zod): 400
- Unauthorized/Forbidden: 401/403
- Music not found: 404
- Payload too large (upload): 413
- Server errors: 500

## Cloudinary
Upload is handled via `upload_stream` for audio/video. The helper returns `{ url, fileName }`. Max size enforced (200MB).

## Prisma
Models: `User`, `Music`, `UserMusic` (composite key). Use `npm run prisma:studio` to inspect data.

## Running Tests (optional)
Add tests with your preferred framework. Example scripts can be added to `package.json`.

## Notes
- TypeScript augments `FastifyRequest` with `userId` via `@types/fastify-jwt.d.ts`. Ensure `tsconfig.json` includes `typeRoots` and the `@types` folder.