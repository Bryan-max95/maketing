"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suscripción enviada:", email);
    setEmail("");
  };

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.footer
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="footer-container">
          <div className="footer-grid">
            {/* Sección 1: Logo y Descripción */}
            
            <motion.div variants={itemVariants} className="footer-section">
              <div className="logo-container">
            <Link href="/" className="logo-link">
              <Image 
                src="/d.png"
                alt="MarketingTop Logo"
                width={150}
                height={150}
                className="logo-image"
              />
            </Link>
          </div>
              <p className="footer-text">
                Somos la agencia de marketing digital líder, ofreciendo soluciones
                innovadoras para llevar tu marca al siguiente nivel.
              </p>
            </motion.div>

            {/* Sección 2: Enlaces Rápidos */}
            <motion.div variants={itemVariants} className="footer-section">
              <h4 className="footer-subtitle">Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/services" className="footer-link">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/Nosotros" className="footer-link">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contacto
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Sección 3: Contacto */}
            <motion.div variants={itemVariants} className="footer-section">
              <h4 className="footer-subtitle">Contacto</h4>
              
              <p className="footer-text">Tel: +504 9579-1301</p>
              <p className="footer-text">Dirección: Ciudad de México, MX</p>
            </motion.div>

            {/* Sección 4: Suscripción */}
            <motion.div variants={itemVariants} className="footer-section">
              <h4 className="footer-subtitle">Suscríbete</h4>
              <form onSubmit={handleSubmit} className="footer-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="footer-input"
                  required
                />
                <motion.button
                  type="submit"
                  className="footer-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Redes Sociales */}
          <motion.div
            className="footer-socials"
            variants={itemVariants}
          >
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="footer-social-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="footer-social-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="footer-social-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="footer-copyright"
            variants={itemVariants}
          >
            <p>© {new Date().getFullYear()} developer1995. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </motion.footer>

      {/* CSS embebido */}
      <style jsx global>{`
        .footer {
          background: linear-gradient(90deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          padding: 3rem 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ffffff, #a5b4fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .footer-subtitle {
          font-size: 1.125rem;
          font-weight: 600;
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        .footer-text {
          font-size: 0.875rem;
          color: #d1d5db;
          margin-bottom: 0.5rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff !important;
          text-decoration: none !important;
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, #2563eb, #4f46e5) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.375rem;
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .footer-link:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280) !important;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }

        .footer-link:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af) !important;
          transform: translateY(0);
          box-shadow: none;
        }

        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-input {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          color: #ffffff;
          font-size: 0.875rem;
        }

        .footer-input:focus {
          outline: none;
          border-color: #a5b4fc;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
        }

        .footer-button {
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .footer-button:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }

        .footer-button:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af);
          box-shadow: none;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .footer-social-link {
          color: #d1d5db;
          text-decoration: none;
        }

        .footer-social-link:hover {
          color: #a5b4fc;
        }

        .footer-social-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .footer-copyright {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.75rem;
          color: #d1d5db;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default Footer;