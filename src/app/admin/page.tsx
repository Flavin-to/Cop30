"use client";

import { useEffect, useState } from "react";

interface AccessLog {
  ip: string;
  timestamp: string;
}

export default function AdminPage() {
  const [logs, setLogs] = useState<AccessLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      setLoading(true);
      const res = await fetch("/api/access");
      const data = await res.json();
      setLogs(data);
      setLoading(false);
    }
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen font-sans text-gray-100 bg-gradient-to-br from-black via-gray-900 to-black px-0 py-0 max-w-full">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg shadow-2xl z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <a
            href="/"
            className="text-3xl font-black text-green-400 tracking-widest select-none hover:text-green-300 transition-all"
          >
            COP30 <span className="text-white">Escola</span>
          </a>
          <span className="text-green-200 font-bold text-lg">Admin</span>
        </nav>
      </header>
      <div className="h-16" />

      <section className="max-w-2xl mx-auto mt-16 bg-gray-900/80 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-black text-green-400 mb-8 text-center">
          Monitoramento de Acessos
        </h1>
        <button
          className="mb-6 px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold transition-all shadow-md block mx-auto"
          onClick={async () => {
            await fetch("/api/access", { method: "DELETE" });
            setLogs([]);
          }}
        >
          Apagar Todos os Registros
        </button>
        {loading ? (
          <div className="text-green-200 text-center text-lg">
            Carregando logs...
          </div>
        ) : logs.length === 0 ? (
          <div className="text-gray-400 text-center text-lg">
            Nenhum acesso registrado.
          </div>
        ) : (
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="text-green-300 pb-2">IP</th>
                <th className="text-green-300 pb-2">Data/Hora</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, idx) => (
                <tr key={idx}>
                  <td>{log.ip}</td>
                  <td>{new Date(log.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}