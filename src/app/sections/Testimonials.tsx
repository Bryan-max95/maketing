"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const teamMembers = [
    {
      name: "Bryan Carcamo",
      role: "Desarrollador Full Stack",
      specialty: "Especialista en Ciberseguridad",
      description:
        "Especializado en desarrollo web con Next.js, TypeScript y ciberseguridad. Experto en auditorías de seguridad, pruebas de penetración y protección de endpoints. Con conocimientos avanzados en Python, Shell, C#, ensamblador, C++ y C.",
      image: "/b.png",
      colorFrom: "rgba(59, 130, 246, 0.1)",
      colorTo: "rgba(37, 99, 235, 0.1)",
    },
    {
      name: "Josué Carcamo",
      role: "Diseñador de Branding",
      specialty: "Especialista en Marketing",
      description:
        "Diseñador de Branding | Marketing y Mercadeo Especialista en identidad de marca, estrategias digitales y comunicación visual. Diseño experiencias gráficas que generan reconocimiento y engagement, optimizando campañas para conversión y fidelización.",
      image: "/c.png",
      colorFrom: "rgba(234, 88, 12, 0.1)",
      colorTo: "rgba(220, 38, 38, 0.1)",
      logo: "/mj.png", // Add logo path for Josué
    },
  ];

  return (
    <motion.section
      className="team-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="team-container">
        {/* Encabezado (unchanged) */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="header-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Expertos en su campo
          </motion.span>
          <motion.h2
            className="header-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nuestro Equipo Profesional
          </motion.h2>
          <motion.div
            className="header-underline"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Grid de equipo */}
        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Fondo con gradiente */}
              <div
                className="card-background"
                style={{
                  background: `linear-gradient(135deg, ${member.colorFrom}, ${member.colorTo})`,
                }}
              />

              {/* Contenido */}
              <div className="card-content">
                <div className="member-info">
                  {/* Foto */}
                  <div className="member-image-container">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="member-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() =>
                        console.error(`Failed to load image: ${member.image}`)
                      }
                    />
                    <div className="image-overlay" />
                  </div>

                  {/* Texto */}
                  <div className="member-text">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-specialty">{member.specialty}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="social-links">
                  {[
                    {
                      name: "LinkedIn",
                      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                    },
                    {
                      name: "GitHub",
                      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    },
                    {
                      name: "Portafolio",
                      icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="social-button"
                      whileHover={{
                        backgroundColor: "#2563eb",
                        scale: 1.1,
                      }}
                    >
                      <span className="sr-only">{social.name}</span>
                      <svg className="social-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>

                {/* Conditionally render logo for Josué Carcamo */}
                {member.name === "Josué Carcamo" && member.logo && (
                  <div className="member-logo-container">
                    <Image
                      src={member.logo}
                      alt={`${member.name} Logo`}
                      width={100} // Adjust width as needed
                      height={100} // Adjust height as needed
                      className="member-logo"
                      onError={() =>
                        console.error(`Failed to load logo: ${member.logo}`)
                      }
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Updated styles */}
      <style jsx global>{`
        .team-section {
          width: 100%;
          margin: 0;
          padding: 5rem 0;
          background: linear-gradient(90deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          min-height: 100vh;
          box-sizing: border-box;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header-subtitle {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #f87171;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
        }

        .header-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #ffffff, #a5b4fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .header-underline {
          width: 8rem;
          height: 0.25rem;
          margin: 1.5rem auto 0;
          border-radius: 9999px;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .team-card {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.2;
        }

        .card-content {
          position: relative;
          z-index: 10;
          padding: 2rem;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .member-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .member-image-container {
          position: relative;
          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        }

        .member-image {
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }

        .member-text {
          flex: 1;
          text-align: center;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .member-role {
          font-size: 1rem;
          font-weight: 500;
          color: #a5b4fc;
          margin-bottom: 0.5rem;
        }

        .member-specialty {
          font-size: 0.875rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 1rem;
        }

        .member-description {
          font-size: 0.875rem;
          color: #d1d5db;
          line-height: 1.5;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1f2937;
          transition: all 0.3s ease;
        }

        .social-button:hover {
          background-color: #2563eb;
          transform: scale(1.1);
        }

        .social-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #ffffff;
        }

        /* New styles for the logo */
        .member-logo-container {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .member-logo {
          object-fit: contain;
          border-radius: 0.5rem; /* Optional: rounded corners for the logo */
          border: 2px solid rgba(255, 255, 255, 0.1); /* Optional: subtle border */
        }

        @media (min-width: 768px) {
          .member-info {
            flex-direction: row;
            text-align: left;
          }

          .member-text {
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
          }

          .member-logo-container {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 3rem 0;
          }

          .team-container {
            padding: 0 1rem;
          }

          .header-title {
            font-size: 2rem;
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


