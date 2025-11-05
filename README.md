# Next.js + Nuvix Starter Template

A minimal, modern starter template for building full-stack applications with [Next.js 16](https://nextjs.org) and [Nuvix](https://nuvix.in) backend.

## Features

✨ **Next.js 16** with App Router  
🎨 **Tailwind CSS 4** - Modern styling with dark mode support  
⚡ **React 19** - Latest React features  
📝 **TypeScript** - Full type safety across the stack

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Nuvix-Tech/next-starter-template
cd next-starter-template
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_NUVIX_PROJECT_ID=your_project_id
NEXT_PUBLIC_NUVIX_ENDPOINT=https://cloud.nuvix.in/v1
```

Get your Nuvix project credentials from [console.nuvix.in](https://console.nuvix.in)

### 3. Generate Database Types

Generate TypeScript types from your Nuvix database schema:

```bash
npx nuvix types
```

This will update `nuvix/types.ts` with your database schema.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with auth
│   └── globals.css      # Global styles
├── hooks/
│   └── useAuth.ts      # Authentication hook
├── nuvix/
│   ├── client.ts       # Nuvix client configuration
│   └── types.ts        # Auto-generated database types
└── public/             # Static assets
```

## Usage Examples

### Authentication

The starter includes a complete auth flow:

```tsx
import { useAuth } from "@/hooks/useAuth";

export default function MyComponent() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please log in</div>;

  return <div>Welcome {user.name}!</div>;
}
```

### Database Queries

Fetch data with full type safety:

```tsx
import { nx } from "@/nuvix/client";

// Query documents
const posts = await nx.db
  .schema("default")
  .collection("posts")
  .populate("author")
  .limit(10)
  .find();

// Create a document
await nx.db.schema("default").collection("posts").create({
  title: "Hello World",
  content: "My first post",
  published: true,
});
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Nuvix Documentation](https://docs.nuvix.in)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Deploy

Deploy your Next.js app on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add your environment variables in the Vercel dashboard.
