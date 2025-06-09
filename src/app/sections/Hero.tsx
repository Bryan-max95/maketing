"use client"; // Added for client-side rendering in Next.js

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroMarketing() {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "auto",
        padding: "8rem 0", // Reduced for mobile
        background: "linear-gradient(152deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
        width: "100%",
        boxSizing: "border-box",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Fondo estático */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 50% 50%, rgba(39, 51, 89, 0.4) 0%, rgba(10, 10, 10, 0.95) 70%)",
        }}
      />

      {/* Efectos de iluminación */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: "min(40vw, 600px)", // Reduced for mobile
            height: "min(40vw, 600px)",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(80px)", // Optimized for performance
            animation: "pulse 8s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "min(30vw, 400px)", // Reduced for mobile
            height: "min(30vw, 400px)",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(60px)", // Optimized for performance
            animation: "pulse 6s ease-in-out 1s infinite alternate",
          }}
        />
      </div>

      {/* Contenido principal */}
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          padding: "0 1rem", // Reduced for mobile
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr", // Single column on mobile
          gap: "2rem", // Reduced gap
          alignItems: "center",
          boxSizing: "border-box",
        }}
        className="main-content"
      >
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem, 6vw, 3rem)", // Responsive font
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: "1rem",
              background: "linear-gradient(90deg, #ffffff, #a5b4fc)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.025em",
              textAlign: "center", // Centered on mobile
            }}
          >
            Transformamos Marketing{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #ec4899)",
                backgroundClip: "text",
                WebkitTextStroke: "1px transparent",
              }}
            >
              Con estrategia y creatividad
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 4vw, 1.125rem)", // Responsive font
              lineHeight: 1.75,
              color: "#d1d5db",
              marginBottom: "1.5rem",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            Estrategias de marketing innovadoras y branding poderoso que elevan tu presencia digital y conectan emocionalmente con tu audiencia.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack buttons on mobile
              gap: "1rem",
              marginBottom: "2rem",
              alignItems: "center",
            }}
          >
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.8rem 2rem", // Smaller padding
                background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem", // Smaller font
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px -5px rgba(59, 130, 246, 0.4)",
                textDecoration: "none",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              Comencemos tu proyecto
              <svg
                style={{
                  marginLeft: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  transition: "transform 0.3s ease",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/servicios"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.8rem 2rem",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textDecoration: "none",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              Ver servicios
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              color: "#a5b4fc",
              justifyContent: "center", // Centered on mobile
            }}
          >
            
            
          </div>
        </motion.div>

        {/* Imagen hero */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            height: "clamp(300px, 50vw, 400px)", // Reduced height for mobile
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
              borderRadius: "1.5rem", // Slightly smaller
              transform: "rotate(3deg)",
              zIndex: -1,
            }}
          />

          <div
            style={{
              position: "relative",
              height: "100%",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.25)", // Lighter shadow for mobile
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Image
              src="/11.jpg"
              alt="Estrategia de marketing y branding"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay de marca */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                padding: "1.5rem",
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(8px)", // Reduced for performance
                borderRadius: "0.75rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem", // Smaller font
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                Case Study: Nike Digital
              </h3>
              <p
                style={{
                  fontSize: "0.75rem", // Smaller font
                  color: "#d1d5db",
                  marginBottom: "0.75rem",
                }}
              >
                Incrementamos el engagement en un 240% con nuestra estrategia omnicanal.
              </p>
              <Link
                href="/casos-exito/nike"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#a5b4fc",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Ver caso completo
                <svg
                  style={{
                    marginLeft: "0.5rem",
                    width: "0.875rem",
                    height: "0.875rem",
                  }}
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
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          marginTop: "2rem",
          marginBottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#a5b4fc",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "0.75rem", marginBottom: "0.5rem" }}>
          Desplázate
        </div>
        <div
          style={{
            width: "20px", // Smaller for mobile
            height: "32px",
            borderRadius: "10px",
            border: "2px solid #a5b4fc",
            position: "relative",
          }}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "3px",
              height: "6px",
              borderRadius: "1px",
              backgroundColor: "#a5b4fc",
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </motion.div>

      {/* Estilos globales */}
      <style jsx global>{`
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

        html, body {
          overflow-x: hidden;
          width: 100%;
        }

        /* Media Queries para responsividad */
        @media (min-width: 768px) {
          .main-content {
            grid-template-columns: 1fr 1fr !important;
            padding: 0 2rem !important;
            gap: 4rem !important;
          }

          .main-content h1 {
            font-size: clamp(2.5rem, 5vw, 4rem) !important;
            text-align: left !important;
          }

          .main-content p {
            font-size: 1.25rem !important;
            text-align: left !important;
            max-width: 600px !important;
          }

          .main-content > div:first-child > div {
            flex-direction: row !important;
            justify-content: flex-start !important;
          }

          .main-content > div:first-child > div > div {
            width: 2.5rem !important;
            height: 2.5rem !important;
            margin-left: -0.75rem !important;
          }

          .main-content > div:first-child > div > div:first-child {
            margin-left: 0 !important;
          }

          .main-content > div:first-child > div > div > div {
            font-size: 0.875rem !important;
          }

          .main-content > div:first-child > div > div > div:last-child {
            font-size: 0.75rem !important;
          }

          .main-content > div:last-child {
            height: clamp(400px, 50vw, 500px) !important;
          }

          .main-content > div:last-child > div:first-child {
            border-radius: 2rem !important;
          }

          .main-content > div:last-child > div:last-child {
            border-radius: 2rem !important;
          }

          .main-content > div:last-child > div:last-child > div {
            bottom: 2rem !important;
            left: 2rem !important;
            right: 2rem !important;
            padding: 2rem !important;
            border-radius: 1rem !important;
          }

          .main-content > div:last-child > div:last-child > div > h3 {
            font-size: 1.5rem !important;
          }

          .main-content > div:last-child > div:last-child > div > p {
            font-size: 0.875rem !important;
            margin-bottom: 1rem !important;
          }

          .main-content > div:last-child > div:last-child > div > a {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </motion.section>
  );
}