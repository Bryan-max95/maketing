"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

// Define TypeScript interface for values
interface Value {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

export default function AboutUs() {
  const values: Value[] = [
    {
      title: "Innovación",
      description:
        "Adoptamos las últimas tecnologías y metodologías para mantenerte a la vanguardia.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 10V3L4 14h7v7l-6-11h-7z" />
        </svg>
      ),
      color: "rgba(59, 130, 246, 0.1)",
    },
    {
      title: "Transparencia",
      description:
        "Comunicación clara y procesos abiertos en cada etapa del proyecto.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      color: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "Excelencia",
      description:
        "Buscamos la perfección en cada detalle para superar tus expectativas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      color: "rgba(245, 158, 11, 0.1)",
    },
  ];

  return (
    <motion.section
      className="about-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Fondo dinámico con efecto parallax */}
      <div className="background-overlay" />

      {/* Efectos de iluminación */}
      <div className="lighting-effects">
        <div className="light-circle top-left" />
        <div className="light-circle bottom-right" />
      </div>

      {/* Contenido principal */}
      <div className="content-container">
        {/* Encabezado */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div
            className="header-underline"
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '4px',
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, #3b82f6 50%, rgba(59, 130, 246, 0) 100%)',
              transformOrigin: 'left center',
            }}
          />
          <motion.span
            className="header-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestra Historia
          </motion.span>
          <motion.h2
            className="header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Más que una agencia, somos tu socio digital
          </motion.h2>
          <motion.p
            className="header-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Desde 2015, hemos estado transformando ideas en experiencias digitales
            impactantes. Nuestro enfoque combina estrategia, creatividad y
            tecnología para ofrecer soluciones que impulsan el crecimiento de tu
            negocio.
          </motion.p>
        </motion.div>

        {/* Sección de valores */}
        <motion.div
          className="values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="value-background" style={{ background: value.color }} />
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-text">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de equipo */}
        <motion.div
          className="team-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="team-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro Equipo
          </motion.div>
          <motion.h3
            className="team-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expertos Apasionados
          </motion.h3>
          <motion.p
            className="team-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contamos con un equipo multidisciplinario de diseñadores,
            desarrolladores y estrategas digitales comprometidos con la excelencia
            y la innovación constante.
          </motion.p>
          <motion.button
            className="team-button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce al equipo completo
          </motion.button>
        </motion.div>

        {/* Sección de filosofía */}
        <motion.div
          className="philosophy-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="philosophy-background">
            <div className="philosophy-light top-left" />
            <div className="philosophy-light bottom-right" />
          </div>
          <div className="philosophy-content">
            <motion.h3
              className="philosophy-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nuestra Filosofía
            </motion.h3>
            <motion.p
              className="philosophy-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Creemos en la creación de soluciones digitales que no solo sean
              estéticamente impresionantes, sino también funcionales, accesibles y
              centradas en el usuario. Cada proyecto es una oportunidad para
              superar expectativas y establecer nuevos estándares de excelencia.
            </motion.p>
            <motion.div
              className="philosophy-buttons"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="philosophy-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nuestro Proceso
              </motion.button>
              <motion.button
                className="philosophy-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Trabaja con nosotros
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CSS embebido */}
      <style jsx global>{`
        .about-us {
          position: relative;
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 1rem 0;
          background: linear-gradient(90deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          overflow: hidden;
          isolation: isolate;
          box-sizing: border-box;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(39, 51, 89, 0.4) 0%,
            rgba(10, 10, 10, 0.95) 70%
          );
        }

        .lighting-effects {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
        }

        .light-circle {
          position: absolute;
          border-radius: 50%;
          animation: pulse 8s ease-in-out infinite alternate;
        }

        .light-circle.top-left {
          top: 20%;
          left: 15%;
          width: 30vw;
          height: 30vw;
          max-width: 600px;
          max-height: 600px;
          background-color: rgba(59, 130, 246, 0.1);
          filter: blur(100px);
          opacity: 0.8;
        }

        .light-circle.bottom-right {
          bottom: 15%;
          right: 10%;
          width: 25vw;
          height: 25vw;
          max-width: 500px;
          max-height: 500px;
          background-color: rgba(79, 70, 229, 0.1);
          filter: blur(80px);
          opacity: 0.6;
          animation-delay: 1s;
        }

        .content-container {
          max-width: 100%;
          margin: 0;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .header-underline {
          position: absolute;
          bottom: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0) 0%,
            #3b82f6 50%,
            rgba(59, 130, 246, 0) 100%
          );
          transform-origin: left center;
        }

        .header-subtitle {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .header-title {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #ffffff, #a5b4fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.025em;
        }

        .header-text {
          max-width: 700px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #d1d5db;
          opacity: 0.9;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .value-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          padding: 2.5rem;
          background: linear-gradient(to bottom right, #111827, #1f2937);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
        }

        .value-background {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(60px);
          z-index: -1;
        }

        .value-icon {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          color: #60a5fa;
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .value-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #d1d5db;
        }

        .team-section {
          margin-bottom: 4rem;
          text-align: center;
        }

        .team-subtitle {
          display: inline-block;
          font-size: 1rem;
          font-weight: 600;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 9999px;
        }

        .team-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          background: linear-gradient(90deg, #ffffff, #a5b4fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .team-text {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #d1d5db;
          margin-bottom: 3rem;
        }

        .team-button {
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          color: #ffffff;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px -5px rgba(59, 130, 246, 0.4);
        }

        .team-button:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280);
          box-shadow: 0 6px 25px -5px rgba(59, 130, 246, 0.5);
        }

        .team-button:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af);
          box-shadow: none;
        }

        .philosophy-section {
          padding: 4rem 2rem;
          border-radius: 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.2),
            rgba(49, 46, 129, 0.2)
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .philosophy-background {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .philosophy-light {
          position: absolute;
          border-radius: 50%;
        }

        .philosophy-light.top-left {
          top: 20%;
          left: 20%;
          width: 200px;
          height: 200px;
          background: rgba(59, 130, 246, 0.1);
          filter: blur(80px);
        }

        .philosophy-light.bottom-right {
          bottom: 10%;
          right: 15%;
          width: 300px;
          height: 300px;
          background: rgba(79, 70, 229, 0.1);
          filter: blur(100px);
        }

        .philosophy-content {
          position: relative;
          z-index: 1;
        }

        .philosophy-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .philosophy-text {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #d1d5db;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 2rem;
        }

        .philosophy-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .philosophy-button {
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .philosophy-button.secondary {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .philosophy-button.secondary:hover {
          background: rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 15px -5px rgba(59, 130, 246, 0.4);
        }

        .philosophy-button.secondary:active {
          background: rgba(96, 165, 250, 0.3);
          box-shadow: none;
        }

        .philosophy-button.primary {
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 15px -5px rgba(59, 130, 246, 0.4);
        }

        .philosophy-button.primary:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280);
          box-shadow: 0 6px 25px -5px rgba(59, 130, 246, 0.5);
        }

        .philosophy-button.primary:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af);
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .about-us {
            padding: 2rem 0;
          }

          .content-container {
            padding: 0 1rem;
          }

          .header-title {
            font-size: 2rem;
          }

          .team-title {
            font-size: 2rem;
          }

          .philosophy-title {
            font-size: 1.75rem;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }
      `}</style>
    </motion.section>
  );
}
