import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen font-sans text-gray-100 bg-gradient-to-br from-black via-gray-900 to-black px-0 py-0 max-w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg shadow-2xl z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          <a
            href="/"
            className="text-3xl font-black text-green-400 tracking-widest select-none hover:text-green-300 transition-all"
          >
            COP30 <span className="text-white">Escola</span>
          </a>
          <ul className="hidden md:flex space-x-10 text-gray-200 font-semibold text-lg">
            <li>
              <Link href="/" className="hover:text-green-400 transition-all duration-200">
                Início
              </Link>
            </li>
            <li>
              <a href="/#compromisso" className="hover:text-green-400 transition-all duration-200">
                Compromisso
              </a>
            </li>
            <li>
              <a href="/#galeria" className="hover:text-green-400 transition-all duration-200">
                Galeria
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-green-400 transition-all duration-200">
                Blogs
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Banner */}
      <section className="relative w-full h-72 md:h-96 rounded-b-3xl overflow-hidden shadow-2xl mb-16 group">
        {/* Imagem de fundo do banner */}
        <img
          src="/cop30-banner.jpg"
          alt="Banner COP30"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex flex-col justify-center items-center px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 drop-shadow-2xl leading-tight tracking-tight animate-fade-in">
            COP30: Conferência do Clima
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-lg font-light animate-fade-in delay-200">
            A COP30 é a 30ª Conferência das Nações Unidas sobre Mudanças Climáticas, reunindo líderes mundiais, cientistas, jovens e a sociedade civil para debater soluções ambientais. Nossa escola participa ativamente, promovendo conhecimento e engajamento para um futuro sustentável.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-3xl mx-auto bg-gray-900/80 rounded-3xl shadow-2xl p-10 mb-24">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Sobre a COP30</h2>
        <p className="text-lg mb-4 text-gray-200">
          O objetivo principal da COP30 é fortalecer o compromisso internacional com a redução das emissões de gases de efeito estufa, promover a sustentabilidade e garantir um futuro mais verde para todos. O evento destaca a importância da participação de todos, especialmente dos jovens, na construção de um planeta mais saudável.
        </p>
        <p className="text-lg text-gray-200">
          Acompanhe as novidades, debates e iniciativas da COP30 e faça parte dessa transformação!
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-12 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base md:text-lg font-light">
            &copy; {new Date().getFullYear()} COP30 Escola. Todos os direitos reservados.
          </p>
          <nav className="flex space-x-8 items-center">
            <a
              href="/#compromisso"
              className="hover:underline hover:text-green-300 transition"
            >
              Compromisso
            </a>
            <a
              href="/#galeria"
              className="hover:underline hover:text-green-300 transition"
            >
              Galeria
            </a>
            <a
              href="https://unfccc.int/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-green-300 transition"
            >
              ONU Mudanças Climáticas
            </a>
          </nav>
        </div>
      </footer>
      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in.delay-200 {
          animation-delay: .2s;
        }
      `}</style>
    </main>
  );
}
