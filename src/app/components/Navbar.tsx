'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type MenuType = 'recursos' | 'recursos-mobile' | null;
type SubMenuType = 'documentacion' | 'soluciones' | 'alianzas' | 'documentacion-mobile' | 'soluciones-mobile' | 'alianzas-mobile' | null;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const recursosRef = useRef<HTMLDivElement>(null);

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    if (pathname === '/') {
      const target = document.querySelector(anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${anchor}`);
    }
    setActiveMenu(null);
    setActiveSubMenu(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    console.log('Mobile Menu State:', isMobileMenuOpen); // Debug state
    const handleClickOutside = (event: MouseEvent) => {
      if (
        recursosRef.current &&
        !recursosRef.current.contains(event.target as Node) &&
        !isMobileMenuOpen
      ) {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = (menu: MenuType, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenu(prev => (prev === menu ? null : menu));
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (subMenu: SubMenuType, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSubMenu(prev => (prev === subMenu ? null : subMenu));
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const // Custom cubic bezier
    }
  }),
  hover: {
    y: -4,
    transition: { duration: 0.2 }
  }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const // Custom cubic bezier
    }
  }),
  hover: {
    y: -4,
    transition: { duration: 0.2 }
  }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-lg z-50 border-b border-gray-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center z-[80]"
            onClick={() => {
              setActiveMenu(null);
              setActiveSubMenu(null);
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="relative h-20 w-56 md:h-24 md:w-72 lg:h-32 lg:w-96 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/bwp1.png"
                alt="BW Pentesting Logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                priority
                quality={100}
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
              />
            </div>
          </Link>

          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 z-[1000]">
            <button
              onClick={() => {
                console.log('Hamburger clicked, isMobileMenuOpen:', !isMobileMenuOpen); // Debug click
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              onTouchStart={() => {
                console.log('Hamburger touched, isMobileMenuOpen:', !isMobileMenuOpen); // Debug touch
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="text-gray-200 hover:text-[#8B0000] text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <span>{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 relative">
            {[
              { href: '/#CyberWarRoom', label: 'Features', anchor: '#CyberWarRoom' },
              { href: '/#TechStackShowcase', label: 'ServTech', anchor: '#TechStackShowcase' },
              { href: '/contact', label: 'Contact' },
              { href: '/cotizacion', label: 'Cotización' },
              { href: '/login', label: 'Login' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/19952025', label: 'BWP' },
              { href: '/20251995', label: 'CVE' },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.anchor ? (e) => handleAnchorClick(e, item.anchor) : () => {}}
                className="group relative text-gray-200 text-sm lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#8B0000]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <div className="relative" ref={recursosRef}>
              <button
                onClick={(e) => toggleMenu('recursos', e)}
                className="group relative text-gray-200 text-sm lg:text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#8B0000]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Recursos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              <AnimatePresence>
                {activeMenu === 'recursos' && (
                  <motion.div
                   
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed left-0 top-16 lg:top-20 w-full bg-gray-900/95 backdrop-blur-lg border border-gray-800/50 rounded-xl shadow-2xl z-40"
                  >
                    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group">
                        <button
                          onClick={(e) => toggleSubMenu('documentacion', e)}
                          className="w-full text-left p-4 rounded-lg bg-gray-800/50 hover:bg-[#8B0000]/20 transition-all duration-300 border border-gray-700/50 group-hover:border-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        >
                          <h3 className="text-gray-100 font-semibold">Documentación</h3>
                          <p className="text-gray-400 text-sm mt-1">Accede a guías, manuales de implementación y herramientas.</p>
                        </button>
                        <AnimatePresence>
                          {activeSubMenu === 'documentacion' && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-2 flex flex-col space-y-2 pl-4"
                            >
                              {[
                                { href: '/recursos/documentacion/guias', label: 'Implementación' },
                                { href: '/recursos/documentacion/manuales', label: 'Herramientas' },
                              ].map(item => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setActiveSubMenu(null);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="group">
                        <button
                          onClick={(e) => toggleSubMenu('soluciones', e)}
                          className="w-full text-left p-4 rounded-lg bg-gray-800/50 hover:bg-[#8B0000]/20 transition-all duration-300 border border-gray-700/50 group-hover:border-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        >
                          <h3 className="text-gray-100 font-semibold">Soluciones</h3>
                          <p className="text-gray-400 text-sm mt-1">Explora nuestras soluciones personalizadas para proteger tu infraestructura.</p>
                        </button>
                        <AnimatePresence>
                          {activeSubMenu === 'soluciones' && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-2 flex flex-col space-y-2 pl-4"
                            >
                              {[
                                { href: '/recursos/soluciones/web', label: 'Seguridad Web' },
                                { href: '/recursos/soluciones/redes', label: 'Protección de Redes y Infraestructura' },
                                { href: '/recursos/soluciones/cloud', label: 'Seguridad en la Nube y Equipo PC' },
                                { href: '/recursos/soluciones/camara', label: 'Seguridad Equipo de Cámara' },
                              ].map(item => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setActiveSubMenu(null);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="group">
                        <button
                          onClick={(e) => toggleSubMenu('alianzas', e)}
                          className="w-full text-left p-4 rounded-lg bg-gray-800/50 hover:bg-[#8B0000]/20 transition-all duration-300 border border-gray-700/50 group-hover:border-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                        >
                          <h3 className="text-gray-100 font-semibold">Technology Pentesting</h3>
                          <p className="text-gray-400 text-sm mt-1">Conoce nuestras asociaciones con líderes tecnológicos en ciberseguridad.</p>
                        </button>
                        <AnimatePresence>
                          {activeSubMenu === 'alianzas' && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-2 flex flex-col space-y-2 pl-4"
                            >
                              {[
                                { href: '/recursos/alianzas/partner1', label: 'KaliLinux Archlinux' },
                                { href: '/19951995', label: 'Machine Learning BWP' },
                                { href: '/19952001', label: 'BWPentesting CyberLab' },
                                { href: '/20252025', label: 'simulador C2' },
                                { href: '/19950000', label: 'Pentesting' },
                                { href: '/20012001', label: 'SecurityMatrix' },
                                { href: '/19959999', label: 'SecurityDecision' },
                                { href: '/00001995', label: 'ThreatRadar' },
                                { href: '/00191995', label: 'ExploitRoom' },
                                { href: '/19951111', label: 'fareSimulator' },
                                { href: '/2001-2025', label: 'Network Segmentation' },
                              ].map(item => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                  onClick={() => {
                                    setActiveMenu(null);
                                    setActiveSubMenu(null);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <button
                        onClick={() => {
                          setActiveMenu(null);
                          setActiveSubMenu(null);
                        }}
                        className="absolute top-4 right-4 text-gray-300 hover:text-white text-lg focus:outline-none transition-transform duration-300 hover:scale-110"
                      >
                        ✕
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg px-4 py-3 z-[999] max-h-[calc(100dvh-64px)] overflow-y-auto"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex flex-col space-y-2">
                {[
                  { href: '/#features', label: 'Features', anchor: '#features' },
                  { href: '/#TechStackShowcase', label: 'ServTech', anchor: '#TechStackShowcase' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/cotizacion', label: 'Cotización' },
                  { href: '/login', label: 'Login' },
                  { href: '/pricing', label: 'Pricing' },
                  { href: '/19952025', label: 'BWP' },
                  { href: '/20251995', label: 'CVE' },
                ].map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={item.anchor ? (e) => handleAnchorClick(e, item.anchor) : () => setIsMobileMenuOpen(false)}
                    className="text-gray-200 text-sm font-medium py-2 px-3 rounded-lg bg-gray-800/50 hover:bg-[#8B0000]/80 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-[#8B0000]"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="relative" ref={recursosRef}>
                  <button
                    onClick={(e) => toggleMenu('recursos-mobile', e)}
                    className="w-full text-gray-200 text-sm font-medium py-2 px-3 rounded-lg bg-gray-800/50 hover:bg-[#8B0000]/80 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-[#8B0000]"
                  >
                    Recursos
                  </button>
                  <AnimatePresence>
                    {activeMenu === 'recursos-mobile' && (
                      <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mt-2 flex flex-col space-y-2 pl-4"
                      >
                        <div>
                          <button
                            onClick={(e) => toggleSubMenu('documentacion-mobile', e)}
                            className="w-full text-left text-gray-200 text-sm font-medium py-2 px-3 rounded-lg bg-gray-800/70 hover:bg-[#8B0000]/50 transition-all duration-300 border border-gray-700/50 hover:border-[#8B0000]"
                          >
                            <h3 className="font-semibold text-sm">Documentación</h3>
                            <p className="text-gray-400 text-xs mt-1">Accede a guías, manuales de implementación y herramientas.</p>
                          </button>
                          <AnimatePresence>
                            {activeSubMenu === 'documentacion-mobile' && (
                              <motion.div
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-2 flex flex-col space-y-1 pl-4"
                              >
                                {[
                                  { href: '/recursos/documentacion/guias', label: 'Guías' },
                                  { href: '/recursos/documentacion/manuales', label: 'Manuales' },
                                ].map(item => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 text-sm hover:text-white px-3 py-1 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveMenu(null);
                                      setActiveSubMenu(null);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <button
                            onClick={(e) => toggleSubMenu('soluciones-mobile', e)}
                            className="w-full text-left text-gray-200 text-sm font-medium py-2 px-3 rounded-lg bg-gray-800/70 hover:bg-[#8B0000]/50 transition-all duration-300 border border-gray-700/50 hover:border-[#8B0000]"
                          >
                            <h3 className="font-semibold text-sm">Soluciones</h3>
                            <p className="text-gray-400 text-xs mt-1">Explora nuestras soluciones personalizadas para proteger tu infraestructura.</p>
                          </button>
                          <AnimatePresence>
                            {activeSubMenu === 'soluciones-mobile' && (
                              <motion.div
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-2 flex flex-col space-y-1 pl-4"
                              >
                                {[
                                  { href: '/recursos/soluciones/web', label: 'Seguridad Web' },
                                  { href: '/recursos/soluciones/redes', label: 'Protección de Redes y Infraestructura' },
                                  { href: '/recursos/soluciones/cloud', label: 'Seguridad en la Nube y Equipos PC' },
                                  { href: '/recursos/soluciones/camara', label: 'Seguridad en Equipos de Cámara' },
                                ].map(item => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 text-sm hover:text-white px-3 py-1 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveMenu(null);
                                      setActiveSubMenu(null);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <button
                            onClick={(e) => toggleSubMenu('alianzas-mobile', e)}
                            className="w-full text-left text-gray-200 text-sm font-medium py-2 px-3 rounded-lg bg-gray-800/70 hover:bg-[#8B0000]/50 transition-all duration-300 border border-gray-700/50 hover:border-[#8B0000]"
                          >
                            <h3 className="font-semibold text-sm">Technology Alliances</h3>
                            <p className="text-gray-400 text-xs mt-1">Conoce nuestras asociaciones con líderes en ciberseguridad.</p>
                          </button>
                          <AnimatePresence>
                            {activeSubMenu === 'alianzas-mobile' && (
                              <motion.div
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-2 flex flex-col space-y-1 pl-4"
                              >
                                {[
                                  { href: '/recursos/alianzas/partner1', label: 'KaliLinux Archlinux' },
                                  { href: '/19951995', label: 'Machine Learning BWP' },
                                  { href: '/19952001', label: 'BWPentesting CyberLab' },
                                  { href: '/20252025', label: 'simulador C2' },
                                  { href: '/19950000', label: 'Pentesting' },
                                  { href: '/20012001', label: 'SecurityMatrix' },
                                  { href: '/19959999', label: 'SecurityDecision' },
                                  { href: '/00001995', label: 'Sppp' },
                                ].map(item => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 text-sm hover:text-white px-3 py-1 rounded-lg hover:bg-[#8B0000]/30 transition-all duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveMenu(null);
                                      setActiveSubMenu(null);
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
