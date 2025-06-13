import Link from "next/link";
import fs from "fs/promises";
import path from "path";

async function getExistingBlogs() {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  let blogs: { id: string; title: string }[] = [];
  try {
    const files = await fs.readdir(blogDir);
    for (const name of files) {
      if (/^\d+$/.test(name)) {
        const pagePath = path.join(blogDir, name, "page.tsx");
        try {
          await fs.access(pagePath);
          blogs.push({
            id: name,
            title: `Blog #${name}`,
          });
        } catch {}
      }
    }
  } catch {}
  return blogs;
}

const Blogs = async () => {
  const blogPosts = await getExistingBlogs();

  return (
    <main className="min-h-screen font-sans text-gray-100 bg-gradient-to-br from-black via-gray-900 to-black px-0 py-0 max-w-full">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg shadow-2xl z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <Link href="/" className="text-3xl font-black text-green-400 tracking-widest select-none hover:text-green-300 transition-all">
            <span>COP30 <span className="text-white">Escola</span></span>
          </Link>
          <ul className="hidden md:flex space-x-10 text-gray-200 font-semibold text-lg">
            <li>
              <Link href="/" className="hover:text-green-400 transition-all duration-200">
                Compromisso
              </Link>
            </li>
            <li>
              <Link href="/#galeria" className="hover:text-green-400 transition-all duration-200">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-green-400 transition-all duration-200">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-16" />

      <section className="w-full bg-black/80 backdrop-blur-lg shadow-2xl py-8 mb-12 rounded-b-3xl">
        <h1 className="text-5xl font-black text-green-400 text-center tracking-widest drop-shadow-lg">
          Blogs da Conferência
        </h1>
        <p className="text-lg text-green-200 text-center mt-2 font-light">
          Veja os relatos e experiências dos alunos na COP30.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-6 bg-black/70 rounded-3xl shadow-2xl">
        <ul className="space-y-6">
          {blogPosts.length === 0 && (
            <li className="text-gray-400 text-center text-xl font-light">Nenhum blog encontrado.</li>
          )}
          {blogPosts.map(({ id, title }) => (
            <li key={id}>
              <Link
                href={`/blog/${id}`}
                className="block p-6 bg-gradient-to-tr from-green-900 via-green-800 to-green-700 rounded-2xl shadow-lg hover:scale-[1.03] hover:bg-green-700/80 transition-all text-2xl font-bold text-green-200 border border-green-700 hover:text-white"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-24 py-8 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white rounded-t-3xl text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} COP30 Escola. Todos os direitos reservados.
      </footer>
    </main>
  );
};

export default Blogs;
