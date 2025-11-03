"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { nx } from "@/lib/nuvix";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError("");

    try {
      await nx.account.createEmailPasswordSession(email, password);
      window.location.reload(); // Refresh to re-trigger useAuth
    } catch (err: any) {
      setError(err?.message || "Failed to log in");
    } finally {
      setPending(false);
    }
  };

  if (loading) return <div className="text-center mt-32">Fetching user...</div>;

  if (isAuthenticated)
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-black dark:text-white">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-2xl font-semibold">Welcome, {user?.name}</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{user?.email}</p>
          {JSON.stringify(user, undefined, 2)}
          <button
            onClick={async () => {
              await nx.account.deleteSession("current");
              window.location.reload();
            }}
            className="px-5 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black"
          >
            Logout
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-lg shadow p-8 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-black dark:text-white">
          Sign in to Nuvix
        </h1>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-zinc-200"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-zinc-200"
          required
        />

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-md bg-black text-white dark:bg-white dark:text-black py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
