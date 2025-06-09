"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProfessionalInfoCta() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Correo enviado:", email);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <motion.section
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "linear-gradient(152deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        overflow: "hidden",
        zIndex: 1,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Fondo con efectos de iluminación */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: "radial-gradient(circle at 50% 50%, rgba(39, 51, 89, 0.4) 0%, rgba(10, 10, 10, 0.95) 70%)",
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
            top: "10%",
            left: "20%",
            width: "min(35vw, 500px)",
            height: "min(35vw, 500px)",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 8s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: "min(30vw, 400px)",
            height: "min(30vw, 400px)",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 6s ease-in-out 1s infinite alternate",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, #ffffff, #a5b4fc)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.025em",
            }}
          >
            Experiencia que{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #ec4899)",
                backgroundClip: "text",
                WebkitTextStroke: "1px transparent",
              }}
            >
              Transforma Marcas
            </span>
          </h2>
          
          <p
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
              lineHeight: 1.6,
              color: "#d1d5db",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Más de 8 años creando estrategias de branding y marketing digital que generan resultados medibles y conexiones emocionales duraderas.
          </p>
        </motion.div>

        {/* Grid de información profesional */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {/* Experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1rem",
              padding: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                <path d="M19 15L20.09 18.26L23 19L20.09 19.74L19 23L17.91 19.74L15 19L17.91 18.26L19 15Z" fill="white"/>
                <path d="M7 15L8.09 18.26L11 19L8.09 19.74L7 23L5.91 19.74L3 19L5.91 18.26L7 15Z" fill="white"/>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              +8 Años de Experiencia
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#d1d5db",
                lineHeight: 1.6,
              }}
            >
              Especializándome en crear identidades de marca memorables y estrategias de marketing que conectan con audiencias globales.
            </p>
          </motion.div>

          {/* Resultados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1rem",
              padding: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #f59e0b, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L9 16L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Proyectos Exitosos
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#d1d5db",
                lineHeight: 1.6,
              }}
            >
              Desde startups hasta empresas Fortune 500, cada proyecto entregado con resultados que superan expectativas.
            </p>
          </motion.div>

          {/* Metodología */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1rem",
              padding: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Metodología Única D.R.E.A.M
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#d1d5db",
                lineHeight: 1.6,
              }}
            >
              Discover, Research, Execute, Analyze, Measure - Un proceso probado que garantiza el éxito de cada campaña.
            </p>
          </motion.div>
        </div>

        {/* Estadísticas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              240%
            </div>
            <p style={{ fontSize: "0.9rem", color: "#a5b4fc" }}>
              Promedio de aumento en engagement
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                background: "linear-gradient(90deg, #f59e0b, #ec4899)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              95%
            </div>
            <p style={{ fontSize: "0.9rem", color: "#a5b4fc" }}>
              Tasa de satisfacción del cliente
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              48h
            </div>
            <p style={{ fontSize: "0.9rem", color: "#a5b4fc" }}>
              Tiempo promedio de respuesta
            </p>
          </div>

       
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: 700,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            ¿Listo para llevar tu marca al siguiente nivel?
          </h3>
          
          <p
            style={{
              fontSize: "1.1rem",
              color: "#d1d5db",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
            }}
          >
            Únete a las empresas que ya han transformado su presencia de marketing con estrategias probadas.
          </p>

          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                style={{
                  flex: 1,
                  padding: "0.875rem 1rem",
                  borderRadius: "0.5rem",
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4f46e5";
                  e.target.style.background = "rgba(0, 0, 0, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.background = "rgba(0, 0, 0, 0.3)";
                }}
              />
              
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  padding: "0.875rem 1.5rem",
                  background: isSubmitting ? 
                    "linear-gradient(90deg, #6b7280, #9ca3af)" : 
                    "linear-gradient(90deg, #2563eb, #4f46e5)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? "Enviando..." : "Empezar"}
              </motion.button>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              Recibirás un análisis gratuito de tu marca actual
            </p>
          </div>
        </motion.div>
      </div>

      {/* Estilos de animación */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.12;
          }
          100% {
            transform: scale(1);
            opacity: 0.08;
          }
        }
      `}</style>
    </motion.section>
  );
}