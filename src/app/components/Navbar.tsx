"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="logo-container">
            <Image
              src="/d.png"
              alt="MarketingTop Logo"
              width={150}
              height={150}
              className="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link href="Servicios" className="nav-button">
              <span className="button-text">Servicios</span>
              <div className="button-glow"></div>
            </Link>
            <Link href="/Nosotros" className="nav-button">
              <span className="button-text">Nosotros</span>
              <div className="button-glow"></div>
            </Link>
            <Link href="/contact" className="nav-button nav-button-primary">
              <span className="button-text">Contacto</span>
              <div className="button-glow"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            <span className="sr-only">Abrir menú</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="menu-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="menu-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <Link href="/services" className="mobile-nav-button">
              <span className="mobile-button-text">Servicios</span>
              <div className="mobile-button-glow"></div>
            </Link>
            <Link href="/about" className="mobile-nav-button">
              <span className="mobile-button-text">Nosotros</span>
              <div className="mobile-button-glow"></div>
            </Link>
            <Link href="/contact" className="mobile-nav-button mobile-nav-button-primary">
              <span className="mobile-button-text">Contacto</span>
              <div className="mobile-button-glow"></div>
            </Link>
          </div>
        )}
      </nav>

      {/* CSS mejorado manteniendo tu estilo */}
      <style jsx global>{`
        .navbar {
          background: linear-gradient(90deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 0.75rem 0;
          height: 70px;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo {
          width: 150px;
          height: 150px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
        }

        .desktop-menu {
          display: flex;
          gap: 1rem;
        }

        /* Botones mejorados manteniendo tu estilo */
        .nav-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff !important;
          text-decoration: none !important;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #3730a3 100%) !important;
          border: 1px solid rgba(59, 130, 246, 0.3) !important;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
          backdrop-filter: blur(5px);
        }

        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .button-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }

        .nav-button:hover {
          background: linear-gradient(135deg,rgb(36, 44, 99) 0%,rgb(33, 34, 79) 50%,rgb(29, 20, 130) 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          border-color: rgba(59, 130, 246, 0.5) !important;
        }

        .nav-button:hover::before {
          left: 100%;
        }

        .nav-button:hover .button-glow {
          opacity: 1;
        }

        .nav-button:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        /* Botón primario (contacto) mejorado */
        .nav-button-primary {
          background: linear-gradient(135deg,rgb(42, 40, 111) 0%,rgb(16, 14, 110) 50%,rgb(17, 33, 101) 100%) !important;
          border: 1px solid rgba(31, 26, 44, 0.81) !important;
          box-shadow: 0 2px 8px rgba(16, 24, 185, 0.2);
        }

        .nav-button-primary .button-glow {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
        }

        .nav-button-primary:hover {
          background: linear-gradient(135deg,rgb(37, 28, 98) 0%,rgb(18, 29, 75) 50%,rgb(28, 29, 48) 100%) !important;
          box-shadow: 0 8px 25px rgba(41, 16, 185, 0.4);
          border-color: rgba(41, 16, 185, 0.6) !important;
        }

        /* Botón del menú móvil mejorado */
        .mobile-menu-button {
          display: none;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .mobile-menu-button:hover {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-color: rgba(59, 130, 246, 0.5);
          transform: scale(1.05);
        }

        .menu-icon {
          width: 1.5rem;
          height: 1.5rem;
          stroke: #ffffff;
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover .menu-icon {
          transform: rotate(90deg);
        }

        /* Menú móvil mejorado */
        .mobile-menu {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          padding: 1.5rem;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff !important;
          text-decoration: none !important;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #3730a3 100%) !important;
          border: 1px solid rgba(59, 130, 246, 0.3) !important;
          border-radius: 8px;
          margin: 0.5rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
        }

        .mobile-nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .mobile-button-text {
          position: relative;
          z-index: 2;
        }

        .mobile-button-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }

        .mobile-nav-button:hover {
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #4338ca 100%) !important;
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          border-color: rgba(59, 130, 246, 0.5) !important;
        }

        .mobile-nav-button:hover::before {
          left: 100%;
        }

        .mobile-nav-button:hover .mobile-button-glow {
          opacity: 1;
        }

        .mobile-nav-button:active {
          transform: translateX(4px);
        }

        /* Botón primario móvil */
        .mobile-nav-button-primary {
          background: linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%) !important;
          border: 1px solid rgba(16, 185, 129, 0.4) !important;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
        }

        .mobile-nav-button-primary .mobile-button-glow {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
        }

        .mobile-nav-button-primary:hover {
          background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #059669 100%) !important;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          border-color: rgba(16, 185, 129, 0.6) !important;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .mobile-menu {
            display: block;
          }

          /* Logo más pequeño en móvil para mejor proporción */
          .logo {
            width: 50px;
            height: 50px;
          }

          .navbar {
            height: 60px;
            padding: 0.5rem 0;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none;
          }
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;