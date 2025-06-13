"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/fotos/img1.jpg",
  "/fotos/img2.jpg",
  "/fotos/img3.jpg",
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-3 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-green-700 hover:bg-green-400 transition-colors"></button>
    ),
  };

  return (
    <>
      <Head>
        <title>COP30 na Escola</title>
        <meta
          name="description"
          content="Conferência COP30 na escola com eventos, galeria de fotos e blogs educacionais sobre o clima."
        />
      </Head>

      <main className="min-h-screen font-sans text-gray-100 bg-gradient-to-br from-black via-gray-900 to-black px-0 py-0 max-w-full">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg shadow-2xl z-50 transition-all duration-300">
          <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
            <Link
              href="#"
              className="text-3xl font-black text-green-400 tracking-widest select-none hover:text-green-300 transition-all"
            >
              COP30 <span className="text-white">Escola</span>
            </Link>
            <ul className="hidden md:flex space-x-10 text-gray-200 font-semibold text-lg">
              <li>
                <a
                  href="#compromisso"
                  className="hover:text-green-400 transition-all duration-200"
                >
                  Compromisso
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="hover:text-green-400 transition-all duration-200"
                >
                  Galeria
                </a>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-green-400 transition-all duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="ml-4 px-4 py-1 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-md"
                >
                  Login
                </Link>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              aria-label="Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span
                className={`block w-7 h-1 bg-green-400 rounded transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-green-400 rounded mt-1.5 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-green-400 rounded mt-1.5 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </nav>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`fixed top-16 left-0 w-full bg-black/95 backdrop-blur-lg shadow-2xl px-6 py-8 z-40 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0 pointer-events-none"
            } md:hidden`}
          >
            <ul className="flex flex-col space-y-6 text-green-400 font-bold text-xl items-center">
              <li>
                <a
                  href="#compromisso"
                  className="hover:text-green-300 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Compromisso
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="hover:text-green-300 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Galeria
                </a>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-green-300 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </header>

        {/* Spacer for fixed header */}
        <div className="h-16" />

        {/* Banner com imagem de fundo */}
        <section className="relative w-full h-80 md:h-[520px] rounded-b-3xl overflow-hidden shadow-2xl mb-20 group">
          <Image
            src="/cop30-banner.jpg"
            alt="Banner COP30"
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex flex-col justify-center items-center px-8 text-center text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 drop-shadow-2xl leading-tight tracking-tight animate-fade-in">
              Bem-vindo à <span className="text-green-400">COP30</span> na Escola
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-lg font-light animate-fade-in delay-200">
              A Conferência das Nações Unidas sobre Mudanças Climáticas (COP30)
              reúne países para discutir ações ambientais. Nossa escola está
              engajada, promovendo debates, oficinas e exposições para
              conscientizar alunos e professores.
            </p>
          </div>
        </section>

        {/* Texto de compromisso */}
        <section id="compromisso" className="mb-28 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-wider text-green-400 drop-shadow-lg">
            Nosso Compromisso com o Clima
          </h2>
          <p className="text-xl sm:text-2xl text-green-200 font-medium leading-relaxed">
            Alunos e professores unidos para um futuro sustentável.
          </p>
        </section>

        {/* Galeria de fotos - carrossel */}
        <section
          id="galeria"
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 rounded-3xl shadow-2xl max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-green-400 tracking-wide select-none drop-shadow-lg">
            Galeria de Fotos
          </h2>
          <div className="w-full max-w-5xl mx-auto">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-[420px] md:h-[520px] rounded-3xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.04] cursor-pointer group"
                >
                  <Image
                    src={src}
                    alt={`Foto ${index + 1}`}
                    width={900}
                    height={520}
                    className="object-cover rounded-3xl group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-700 via-green-500 to-green-700 bg-opacity-90 text-white text-base font-bold px-4 py-2 rounded-full backdrop-blur-sm drop-shadow-lg select-none shadow-lg">
                    Foto {index + 1}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 py-12 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white select-none">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base md:text-lg font-light">
              &copy; {new Date().getFullYear()} COP30 Escola. Todos os direitos
              reservados.
            </p>
            <nav className="flex space-x-8 items-center">
              <a
                href="#"
                className="hover:underline hover:text-green-300 transition"
              >
                Compromisso
              </a>
              <a
                href="#galeria"
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
              {/* Social icons */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 hover:text-pink-400 transition"
              >
                <svg
                  className="w-6 h-6 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
            </nav>
          </div>
        </footer>

        {/* Animations */}
        <style jsx global>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
        `}</style>
      </main>
    </>
  );
}
