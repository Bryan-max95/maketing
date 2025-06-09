"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter,
  Linkedin,
  Clock,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

// Define TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  value: string;
  description: string;
}

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  url: string;
  color: string;
  hoverColor: string;
  label: string;
}

const marketingWords = [
  "Branding", "SEO", "ROI", "Engagement", "Conversión", "Analytics", 
  "Digital", "Growth", "Leads", "Content", "Social Media", "Campañas",
  "Performance", "KPIs", "Targeting", "Retargeting", "Funnels", "CRM",
  "Email Marketing", "Influencer", "Viral", "Trending", "Community",
  "Brand Awareness", "Customer Journey", "Omnichannel", "UX/UI",
  "A/B Testing", "Automation", "Storytelling", "Visual Identity"
];

const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6" />,
    url: "https://wa.me/50495791301",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-400 hover:to-green-500",
    label: "Chatea con nosotros"
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "#",
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-500 hover:to-blue-600",
    label: "Síguenos en Facebook"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "#",
    color: "from-pink-500 to-purple-600",
    hoverColor: "hover:from-pink-400 hover:to-purple-500",
    label: "Ve nuestro contenido"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "#",
    color: "from-blue-700 to-blue-800",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
    label: "Conecta profesionalmente"
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    url: "#",
    color: "from-sky-500 to-sky-600",
    hoverColor: "hover:from-sky-400 hover:to-sky-500",
    label: "Últimas noticias"
  }
];

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Teléfono",
    value: "+504 1234-5678",
    description: "Lun - Vie: 8:00 AM - 6:00 PM"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "contacto@tuempresa.com",
    description: "Respuesta en 24 horas"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Ubicación",
    value: "Coxen Hole, Bay Islands",
    description: "Honduras, Centroamérica"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="header-badge">
            <Zap className="w-4 h-4" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="header-title">
            Impulsa tu <span className="text-gradient">Marketing</span>
          </h2>
          <p className="header-subtitle">
            Conecta con nosotros y descubre cómo podemos llevar tu marca al siguiente nivel
          </p>
        </div>

        <div className="contact-content">
          {/* Formulario */}
          <div className="form-section">
            <div className="form-header">
              <h3 className="form-title">¿Listo para crecer?</h3>
              <p className="form-subtitle">
                Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+504 1234-5678"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Servicio de Interés</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="redes-sociales">Redes Sociales</option>
                    <option value="branding">Branding</option>
                    <option value="campanas">Campañas Digitales</option>
                    <option value="produccion">Producción Visual</option>
                    <option value="diseno">Diseño Gráfico</option>
                    <option value="integral">Servicio Integral</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`submit-button ${submitted ? 'button-success' : ''}`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Información de contacto y redes sociales */}
          <div className="info-section">
            {/* Información de contacto */}
            <div className="contact-info">
              <h4 className="info-title">Información de Contacto</h4>
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h5 className="info-name">{info.title}</h5>
                      <p className="info-value">{info.value}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="social-section">
              <h4 className="social-title">
                <Star className="w-5 h-5" />
                Síguenos en Redes
              </h4>
              <p className="social-subtitle">
                Mantente al día con las últimas tendencias de marketing
              </p>

              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-card bg-gradient-to-br ${social.color} ${social.hoverColor}`}
                  >
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    <div className="social-content">
                      <span className="social-name">{social.name}</span>
                      <span className="social-label">{social.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp destacado */}
            <div className="whatsapp-section">
              <div className="whatsapp-card">
                <div className="whatsapp-icon">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="whatsapp-content">
                  <h5 className="whatsapp-title">¿Necesitas ayuda inmediata?</h5>
                  <p className="whatsapp-text">Chatea con nuestro equipo por WhatsApp</p>
                  <a
                    href="https://wa.me/50412345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chatear Ahora
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="schedule-section">
              <div className="schedule-card">
                <Clock className="w-6 h-6 text-blue-400" />
                <div>
                  <h5 className="schedule-title">Horarios de Atención</h5>
                  <div className="schedule-list">
                    <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 2:00 PM</p>
                    <p>Domingos: WhatsApp disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          padding: 10rem 0;
          position: relative;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
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

        .header-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .form-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 3rem;
          backdrop-filter: blur(20px);
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.5;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: #e5e7eb;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input,
        .form-textarea {
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #60a5fa;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -5px rgba(37, 99, 235, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-success {
          background: linear-gradient(135deg, #059669, #10b981) !important;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(4px);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 12px;
          color: white;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .info-description {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .social-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
        }

        .social-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .social-subtitle {
          color: #d1d5db;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .social-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .social-content {
          display: flex;
          flex-direction: column;
        }

        .social-name {
          font-weight: 600;
          font-size: 0.875rem;
        }

        .social-label {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .whatsapp-section {
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
        }

        .whatsapp-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .whatsapp-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          flex-shrink: 0;
        }

        .whatsapp-content {
          flex: 1;
        }

        .whatsapp-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.25rem;
        }

        .whatsapp-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .whatsapp-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .schedule-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
        }

        .schedule-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .schedule-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .schedule-list p {
          color: #d1d5db;
          font-size: 0.875rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .header-title {
            font-size: 2.5rem;
          }
          
          .form-section {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 0;
          }
          
          .contact-container {
            padding: 0 1rem;
          }
          
          .header-title {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .form-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
