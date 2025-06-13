"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Usuário ou senha inválidos.");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/90 p-10 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col gap-6"
      >
        <h1 className="text-3xl font-black text-green-400 text-center mb-2">
          Login Admin
        </h1>
        <input
          type="text"
          placeholder="Usuário"
          className="px-4 py-3 rounded-lg bg-gray-800 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Senha"
          className="px-4 py-3 rounded-lg bg-gray-800 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {error && (
          <div className="text-red-400 text-center text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}