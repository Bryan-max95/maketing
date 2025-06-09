"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stats = [
    { number: "500+", label: "Proyectos Completados", icon: "🚀" },
    { number: "98%", label: "Satisfacción del Cliente", icon: "⭐" },
    { number: "5+", label: "Años de Experiencia", icon: "🏆" },
    { number: "50+", label: "Marcas Transformadas", icon: "✨" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Estrategia",
      description: "Cada proyecto comienza con una estrategia sólida y orientada a resultados medibles."
    },
    {
      icon: "💡",
      title: "Innovación",
      description: "Adoptamos las últimas tendencias y tecnologías para mantener tu marca a la vanguardia."
    },
    {
      icon: "🤝",
      title: "Colaboración",
      description: "Trabajamos como una extensión de tu equipo, construyendo relaciones duraderas."
    },
    {
      icon: "📈",
      title: "Resultados",
      description: "Nuestro éxito se mide por el crecimiento y el impacto que generamos para tu negocio."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Background parallax */}
      <motion.div 
        className="parallax-bg"
        style={{ y: backgroundY }}
      />

      <div className="about-container">
        {/* Hero Section */}
        <motion.div
          className="hero-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="hero-content" style={{ y: textY }}>
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-text">Sobre Nosotros</span>
              <div className="badge-glow" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-title">
              Transformamos Ideas en 
              <span className="title-gradient"> Marcas Exitosas</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-description">
              Somos una agencia de marketing y branding que combina creatividad estratégica 
              con tecnología de vanguardia para construir marcas que no solo se ven increíbles, 
              sino que generan resultados extraordinarios.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video/Image Hero */}
          <motion.div
            variants={itemVariants}
            className="hero-media"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <div className="media-container">
              <Image
                src="/j.jpeg"
                alt="Nuestro equipo trabajando"
                fill
                className="hero-image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="media-overlay">
                <motion.button
                  className="play-button"
                  onClick={handleVideoToggle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.button>
              </div>
              <div className="media-glow" />
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="mission-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mission-card">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Nuestra Misión</h3>
            <p className="card-description">
              Empoderar a las empresas con estrategias de marketing y branding que 
              impulsen su crecimiento, conecten con su audiencia y generen un impacto 
              duradero en el mercado.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mission-card">
            <div className="card-icon">🌟</div>
            <h3 className="card-title">Nuestra Visión</h3>
            <p className="card-description">
              Ser la agencia de referencia en marketing y branding, reconocida por 
              nuestra capacidad de transformar marcas y crear conexiones auténticas 
              entre empresas y consumidores.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-subtitle">
              Los principios que guían cada decisión y proyecto que emprendemos
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="value-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
                <div className="value-glow" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="story-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="story-content">
            <div className="story-text">
              <h2 className="story-title">Nuestra Historia</h2>
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>2019 - Los Inicios</h4>
                    <p>Comenzamos como freelancers con una visión clara: ayudar a las pequeñas empresas a competir con las grandes a través del marketing digital.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>2021 - Expansión</h4>
                    <p>Formamos oficialmente la agencia y ampliamos nuestros servicios para incluir branding integral y estrategias de comunicación.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>2025 - Innovación</h4>
                    <p>Hoy somos líderes en marketing digital, combinando estrategia, creatividad y tecnología para transformar marcas.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="cta-content">
            <h3 className="cta-title">¿Listo para transformar tu marca?</h3>
            <p className="cta-text">
              Únete a más de 50 empresas que ya han transformado su presencia digital con nosotros
            </p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Comenzar Ahora
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .about-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #0a0a0a;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          top: -50%;
          left: 0;
          right: 0;
          height: 200%;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 51, 234, 0.1) 25%,
            rgba(236, 72, 153, 0.1) 50%,
            rgba(59, 130, 246, 0.1) 75%,
            rgba(16, 185, 129, 0.1) 100%
          );
          filter: blur(100px);
          animation: gradientShift 20s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.3; transform: translateX(-10%) rotate(0deg); }
          50% { opacity: 0.6; transform: translateX(10%) rotate(180deg); }
        }

        .about-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .hero-content {
          position: relative;
        }

        .hero-badge {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
          padding: 0.75rem 1.5rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .badge-text {
          position: relative;
          z-index: 2;
          font-size: 0.875rem;
          font-weight: 600;
          color: #60a5fa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .badge-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.3;
          transform: translate(-50%, -50%);
          animation: pulse 3s ease-in-out infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .title-gradient {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientMove 3s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stat-item {
          position: relative;
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 500;
        }

        .hero-media {
          position: relative;
          height: 600px;
        }

        .media-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          overflow: hidden;
          background: linear-gradient(45deg, #1f2937, #374151);
        }

        .hero-image {
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-button {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          background: rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .play-button svg {
          width: 24px;
          height: 24px;
          color: #ffffff;
          margin-left: 4px;
        }

        .media-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          filter: blur(40px);
          animation: pulse 4s ease-in-out infinite;
        }

        .mission-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin: 8rem 0;
        }

        .mission-card {
          position: relative;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .mission-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #d1d5db;
          opacity: 0.9;
        }

        .values-section {
          margin: 8rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .value-card {
          position: relative;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .value-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .value-description {
          font-size: 0.875rem;
          line-height: 1.5;
          color: #d1d5db;
          opacity: 0.9;
        }

        .value-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .value-card:hover .value-glow {
          opacity: 0.2;
        }

        .story-section {
          margin: 8rem 0;
        }

        .story-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .story-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }

        .story-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .story-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
          border: 3px solid #0a0a0a;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        .timeline-content h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .timeline-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #d1d5db;
          opacity: 0.9;
        }

        .cta-section {
          margin: 8rem 0;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          backdrop-filter: blur(20px);
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          border: none;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .cta-button:hover {
          background: linear-gradient(90deg, #2563eb, #7c3aed);
        }

        .cta-button svg {
          width: 20px;
          height: 20px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .mission-section {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .about-container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
}