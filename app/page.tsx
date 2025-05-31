"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="p-10">
      {!session ? (
        <button onClick={() => signIn("google")} className="bg-blue-500 text-white p-2 rounded">
          Login with Google
        </button>
      ) : (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
