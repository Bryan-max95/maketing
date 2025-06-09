"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const marketingServices = [
  {
    title: "Redes Sociales",
    description:
      "Gestión profesional de redes sociales (Facebook, Instagram, TikTok, entre otras) para conectar con tu audiencia.",
    image: "/2.jpg",
    icon: "📱",
    stats: "+200% engagement",
    features: [
      "Gestión profesional de redes sociales",
      "Creación de contenido original",
      "Calendario de publicaciones mensual",
      "Interacción con la comunidad",
      "Análisis de métricas y reportes",
    ],
    colorFrom: "rgba(234, 88, 12, 0.7)",
    colorTo: "rgba(220, 38, 38, 0.7)",
  },
  {
    title: "Branding",
    description:
      "Desarrollo de identidad visual y estrategias de marca para destacar en el mercado.",
    image: "/1.jpg",
    icon: "🎨",
    stats: "+70% reconocimiento de marca",
    features: [
      "Desarrollo de identidad visual",
      "Creación de manual de marca",
      "Naming y tono de comunicación",
      "Rebranding y rediseño",
      "Aplicación en piezas corporativas",
    ],
    colorFrom: "rgba(59, 130, 246, 0.7)",
    colorTo: "rgba(37, 99, 235, 0.7)",
  },
  {
    title: "Diseño",
    description:
      "Soluciones de diseño gráfico para redes, publicidad y materiales impresos.",
    image: "/3.jpg",
    icon: "✏️",
    stats: "100% satisfacción visual",
    features: [
      "Diseño gráfico para redes y publicidad",
      "Diseño para impresión",
      "Mockups y landing pages",
      "Presentaciones corporativas",
      "Kits de medios",
    ],
    colorFrom: "rgba(236, 72, 153, 0.7)",
    colorTo: "rgba(190, 24, 93, 0.7)",
  },
  {
    title: "Campañas",
    description:
      "Planificación y ejecución de campañas digitales para maximizar resultados.",
    image: "/4.jpg",
    icon: "📈",
    stats: "5x ROI en campañas",
    features: [
      "Campañas digitales pagadas",
      "Estrategias de lanzamiento",
      "Automatización y embudos",
      "Segmentación de audiencias",
      "Reportes de rendimiento",
    ],
    colorFrom: "rgba(139, 92, 246, 0.7)",
    colorTo: "rgba(124, 58, 237, 0.7)",
  },
  {
    title: "Producción",
    description:
      "Fotografía y video profesional para potenciar tu presencia visual.",
    image: "/5.jpg",
    icon: "📸",
    stats: "3x más impacto visual",
    features: [
      "Fotografía profesional",
      "Producción de video",
      "Edición y animaciones",
      "Contenido visual para redes",
      "Cobertura de eventos",
    ],
    colorFrom: "rgba(5, 150, 105, 0.7)",
    colorTo: "rgba(4, 120, 87, 0.7)",
  },
];

export default function MarketingServices() {
  const sectionRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    hover: {
      y: -15,
      boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="services-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="services-container">
        {/* Encabezado */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="header-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
          <motion.span
            className="header-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Portafolio de Servicios
          </motion.span>
          <motion.h2
            className="header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Marketing y Comunicación
          </motion.h2>
          <motion.p
            className="header-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            ¡Llevamos tu marca al siguiente nivel con estrategias integrales de
            marketing y comunicación!
          </motion.p>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          className="services-grid"
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
          {marketingServices.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Imagen del servicio */}
              <div className="service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="service-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className="image-overlay"
                  style={{
                    background: `linear-gradient(to bottom, ${service.colorFrom}, ${service.colorTo})`,
                  }}
                />
                {/* Icono y título */}
                <div className="image-content">
                  <div className="icon-title">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-stats">{service.stats}</div>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="service-content">
                <p className="service-description">{service.description}</p>

                {/* Lista de características */}
                <motion.ul
                  className="service-features"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={featureVariants}
                      className="feature-item"
                    >
                      <div className="feature-check">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Botón de acción */}
                <Link href="/contacto" className="service-button">
                  Más Detalles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA al final */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="cta-content">
            <h3 className="cta-title">¿Listo para potenciar tu marca?</h3>
            <p className="cta-text">
              ¡Contáctanos hoy y descubre cómo nuestros servicios pueden llevar tu
              negocio al siguiente nivel!
            </p>
            <Link href="/contacto" className="cta-button">
              Consultoría Gratuita
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 110-2h8.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Estilos globales */}
      <style jsx global>{`
        .services-section {
          width: 100%;
          margin: 0;
          padding: 4rem 0;
          background: linear-gradient(90deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          position: relative;
          overflow: visible;
          z-index: 1;
          box-sizing: border-box;
        }

        .services-container {
          max-width: 100%;
          margin: 0;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .header-underline {
          position: absolute;
          bottom: -1rem;
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          position: relative;
        }

        .service-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          background: linear-gradient(to bottom right, #111827, #1f2937);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .service-image {
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.8;
          mix-blend-mode: multiply;
        }

        .image-content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          z-index: 2;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .service-icon {
          padding: 0.75rem;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          font-size: 1.5rem;
          line-height: 1;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .service-stats {
          padding: 0.5rem 1rem;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
        }

        .service-content {
          padding: 2rem;
        }

        .service-description {
          color: #e5e7eb;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          min-height: 4.5rem;
        }

        .service-features {
          margin-bottom: 2rem;
          padding-left: 0;
          list-style: none;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .feature-check {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.75rem;
          background-color: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-check svg {
          width: 0.75rem;
          height: 0.75rem;
          color: #3b82f6;
        }

        .service-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          color: #ffffff !important;
          border-radius: 0.5rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none !important;
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .service-button:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280);
          transform: translateY(-1px);
          box-shadow: 0 4px 15px -5px rgba(59, 130, 246, 0.4);
        }

        .service-button:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af);
          transform: translateY(0);
          box-shadow: none;
        }

        .service-button svg {
          margin-left: 0.5rem;
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        .cta-section {
          margin-top: 4rem;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          color: #ffffff;
        }

        .cta-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .cta-text {
          max-width: 600px;
          font-size: 1.125rem;
          line-height: 1.75;
          color: #d1d5db;
          margin-bottom: 2rem;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          color: #ffffff !important;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none !important;
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px -5px rgba(59, 130, 246, 0.4);
        }

        .cta-button:hover {
          background: linear-gradient(90deg, #3b82f6, #6b7280);
          transform: translateY(-1px);
          box-shadow: 0 6px 25px -5px rgba(59, 130, 246, 0.5);
        }

        .cta-button:active {
          background: linear-gradient(90deg, #60a5fa, #9ca3af);
          transform: translateY(0);
          box-shadow: none;
        }

        .cta-button svg {
          margin-left: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 2rem 0;
          }

          .services-container {
            padding: 0 1rem;
          }

          .header-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 1.5rem;
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