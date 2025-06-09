"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Code, Palette, Share2, TrendingUp, Camera, Globe } from 'lucide-react';

// Define TypeScript interface for services
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
  features: string[];
  color: string;
  stats: string;
  bgPattern: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web Experto",
    description: "Creación de sitios web modernos, responsivos y optimizados con tecnologías de vanguardia.",
    icon: <Code className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    features: ["React & Next.js", "E-commerce", "SEO Optimizado", "Performance"],
    color: "from-blue-600 to-blue-800",
    stats: "50+ Proyectos",
    bgPattern: "web"
  },
  {
    id: 2,
    title: "Redes Sociales",
    description: "Gestión profesional de redes sociales para conectar con tu audiencia de manera efectiva.",
    icon: <Share2 className="w-8 h-8" />,
    image: "/s.jpg", // Verify this file exists in /public/s.jpg
    features: ["Gestión Integral", "Contenido Original", "Community Management", "Analytics"],
    color: "from-orange-600 to-red-600",
    stats: "+200% Engagement",
    bgPattern: "social"
  },
  {
    id: 3,
    title: "Branding",
    description: "Desarrollo de identidad visual y estrategias de marca para destacar en el mercado.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    features: ["Identidad Visual", "Manual de Marca", "Naming", "Rebranding"],
    color: "from-blue-500 to-blue-700",
    stats: "+70% Reconocimiento",
    bgPattern: "brand"
  },
  {
    id: 4,
    title: "Campañas Digitales",
    description: "Planificación y ejecución de campañas digitales para maximizar resultados y ROI.",
    icon: <TrendingUp className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: ["Google Ads", "Facebook Ads", "Segmentación", "Optimización"],
    color: "from-purple-600 to-purple-800",
    stats: "5x ROI",
    bgPattern: "campaigns"
  },
  {
    id: 5,
    title: "Producción Visual",
    description: "Fotografía y video profesional para potenciar tu presencia visual y contenido.",
    icon: <Camera className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    features: ["Fotografía Pro", "Video Marketing", "Edición", "Contenido Visual"],
    color: "from-green-600 to-emerald-700",
    stats: "3x Más Impacto",
    bgPattern: "visual"
  },
  {
    id: 6,
    title: "Diseño Gráfico",
    description: "Soluciones creativas de diseño para redes, publicidad y materiales corporativos.",
    icon: <Globe className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    features: ["Diseño Digital", "Print Design", "UI/UX", "Branding Visual"],
    color: "from-pink-600 to-rose-700",
    stats: "100% Satisfacción",
    bgPattern: "design"
  }
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];

  return (
    <div className="services-carousel-container">
      {/* Header */}
      <div className="carousel-header">
        <div className="header-content">
          <span className="header-badge">Nuestros Servicios</span>
          <h2 className="header-title">
            Soluciones <span className="text-gradient">Integrales</span>
          </h2>
          <p className="header-description">
            Transformamos ideas en resultados extraordinarios con nuestro equipo especializado
          </p>
        </div>
      </div>

      {/* Main Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-main">
          {/* Left Side - Service Info */}
          <div className="service-info">
            <div className="service-icon-container">
              <div className={`service-icon bg-gradient-to-br ${currentService.color}`}>
                {currentService.icon}
              </div>
              <div className="service-stats">
                {currentService.stats}
              </div>
            </div>
            
            <div className="service-content">
              <h3 className="service-title">{currentService.title}</h3>
              <p className="service-description">{currentService.description}</p>
              
              <div className="service-features">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="feature-tag">
                    <div className="feature-dot"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className={`cta-button bg-gradient-to-r ${currentService.color}`}>
                <span>Conocer Más</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="image-carousel">
            <div className="image-container">
              <Image
                src={currentService.image}
                alt={currentService.title}
                className="carousel-image"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
              />
            <div className={`image-overlay bg-gradient-to-t ${currentService.color} opacity-20`}></div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="nav-arrow nav-arrow-left"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="nav-arrow nav-arrow-right"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="carousel-dots">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className={`progress-fill bg-gradient-to-r ${currentService.color}`}
              style={{
                animation: isPlaying ? 'progress 4s linear infinite' : 'none',
                animationDelay: '0s'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Services Preview Grid */}
      <div className="services-preview">
        <div className="preview-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`preview-card ${index === currentIndex ? 'preview-active' : ''}`}
            >
              <div className={`preview-icon bg-gradient-to-br ${service.color}`}>
                {service.icon}
              </div>
              <span className="preview-title">{service.title}</span>
            </div>
          ))}
        </div>
      <style jsx>{`
        .services-carousel-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          padding: 10rem 0;
          position: relative;
          overflow: hidden;
        }

        .services-carousel-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .header-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          color: #60a5fa;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .header-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .text-gradient {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .header-description {
          font-size: 1.25rem;
          color: #d1d5db;
          line-height: 1.6;
          opacity: 0.9;
        }

        .carousel-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .carousel-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .service-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-icon-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .service-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
        }

        .service-stats {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
          backdrop-filter: blur(10px);
        }

        .service-content {
          flex: 1;
        }

        .service-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .service-description {
          font-size: 1.125rem;
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          color: #e5e7eb;
          font-size: 0.875rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .image-carousel {
          position: relative;
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 3;
        }

        .nav-arrow:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow-left {
          left: 1rem;
        }

        .nav-arrow-right {
          right: 1rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s ease;
        }

        .dot-active {
          border-color: #60a5fa;
        }

        .dot-active .dot-inner {
          background: #60a5fa;
        }

        .progress-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          width: 100%;
          transform: translateX(-100%);
          border-radius: 2px;
        }

        .services-preview {
          margin-top: 4rem;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .preview-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .preview-card:hover,
        .preview-active {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
        }

        .preview-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .preview-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 1024px) {
          .carousel-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .header-title {
            font-size: 2.5rem;
          }
          
          .service-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .services-carousel-container {
            padding: 2rem 0;
          }
          
          .carousel-wrapper {
            padding: 0 1rem;
          }
          
          .header-title {
            font-size: 2rem;
          }
          
          .service-title {
            font-size: 1.5rem;
          }
          
          .image-carousel {
            height: 300px;
          }
          
          .preview-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
          }
          
          .preview-card {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
    </div>
    </div>
  );
}
