import React, { useState, useEffect } from 'react';
import { X, Home, Menu, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/languageStore';

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  challenge?: string;
  solution?: string;
  impact?: string;
  techSpecs?: Record<string, string>;
  features?: string[];
  isMobile?: boolean;
  link?: string;
}

const projectsData: Record<string, Record<string, ProjectData>> = {
  "1": {
    en: {
      title: "QuickTurn",
      category: "SaaS Platform",
      description: "Freelance marketplace connecting Talent (Students) & Clients (SMEs) with project management features.",
      image: "/quickturn.png",
      isMobile: true,
      tags: ["Spring Boot", "React", "MySQL", "MongoDB"],
      link: "https://quickturn.web.id",
      challenge: "Two-sided market failure: SMEs struggle to find affordable digital talent, while students lack platform to gain real-world project experience (The 'Experience Gap' problem).",
      solution: "A specialized freelance marketplace that connects micro-tasks with student portfolios, creating a symbiotic ecosystem for local business growth with integrated project management tools.",
      impact: "Facilitated over 50+ successful project matches in the beta phase with a 95% satisfaction rate.",
      features: [
        "Project Board & Job Application System",
        "Real-time Chat (WebSocket/STOMP)",
        "Reputation System (Rating & Reviews)",
        "Decoupled Architecture (Backend/Frontend split)"
      ],
      techSpecs: {
        "Backend": "Spring Boot 3.x (Java)",
        "Frontend": "React.js 18 (SPA)",
        "Database": "MySQL 8.0 (Main) + MongoDB (Chat)",
        "Auth": "JWT & Google OAuth2",
        "Storage": "Azure Blob Storage",
        "Deployment": "Railway (BE) + Vercel (FE)"
      }
    },
    id: {
      title: "QuickTurn",
      category: "Platform SaaS",
      description: "Marketplace freelance yang menghubungkan Talenta (Mahasiswa) & Klien (UMKM) dengan fitur manajemen proyek.",
      image: "/quickturn.png",
      isMobile: true,
      tags: ["Spring Boot", "React", "MySQL", "MongoDB"],
      link: "https://quickturn.web.id",
      challenge: "Kegagalan pasar dua sisi: UMKM kesulitan mencari talenta digital terjangkau, sementara mahasiswa kekurangan platform untuk pengalaman proyek nyata (Masalah 'Experience Gap').",
      solution: "Marketplace freelance khusus yang menghubungkan tugas mikro dengan portofolio mahasiswa, menciptakan ekosistem simbiosis untuk pertumbuhan bisnis lokal dengan alat manajemen proyek terintegrasi.",
      impact: "Memfasilitasi lebih dari 50+ kecocokan proyek yang sukses dalam fase beta dengan tingkat kepuasan 95%.",
      features: [
        "Papan Proyek & Sistem Lamaran Kerja",
        "Chat Real-time (WebSocket/STOMP)",
        "Sistem Reputasi (Rating & Ulasan)",
        "Arsitektur Terpisah (Split Backend/Frontend)"
      ],
      techSpecs: {
        "Backend": "Spring Boot 3.x (Java)",
        "Frontend": "React.js 18 (SPA)",
        "Database": "MySQL 8.0 (Utama) + MongoDB (Chat)",
        "Auth": "JWT & Google OAuth2",
        "Storage": "Azure Blob Storage",
        "Deployment": "Railway (BE) + Vercel (FE)"
      }
    }
  },
  "2": {
    en: {
      title: "Network Traffic Analysis",
      category: "Cybersecurity",
      description: "Netsupport RAT detection and network forensics analysis. Identifying malicious traffic patterns through deep packet inspection.",
      image: "/network-analysis.png",
      tags: ["Wireshark", "Pcap", "Forensics", "Threat Intel"],
      challenge: "Identifying and documenting Netsupport RAT activity hidden within legitimate network traffic, requiring precise packet-level analysis to distinguish malicious patterns.",
      solution: "Systematic network traffic capture and analysis using Wireshark and pcap tools, identifying RAT command-and-control patterns, DNS queries, and payload signatures.",
      impact: "Produced comprehensive documentation of Netsupport RAT network behaviors, enabling faster threat detection and response for blue team operations.",
      features: [
        "Deep Packet Inspection & Analysis",
        "RAT C2 Traffic Pattern Identification",
        "DNS & HTTP Anomaly Detection",
        "Comprehensive Threat Documentation"
      ],
      techSpecs: {
        "Analysis Tool": "Wireshark",
        "Data Format": "Pcap / Pcapng",
        "Focus": "Netsupport RAT Detection",
        "Output": "Threat Intelligence Report",
        "Repository": "GitHub (Public)"
      }
    },
    id: {
      title: "Network Traffic Analysis",
      category: "Keamanan Siber",
      description: "Deteksi Netsupport RAT dan analisis forensik jaringan. Mengidentifikasi pola lalu lintas berbahaya melalui inspeksi paket mendalam.",
      image: "/network-analysis.png",
      tags: ["Wireshark", "Pcap", "Forensik", "Intelijen Ancaman"],
      challenge: "Mengidentifikasi dan mendokumentasikan aktivitas Netsupport RAT yang tersembunyi dalam lalu lintas jaringan sah, membutuhkan analisis tingkat paket yang presisi.",
      solution: "Penangkapan dan analisis lalu lintas jaringan secara sistematis menggunakan Wireshark dan alat pcap, mengidentifikasi pola command-and-control RAT, query DNS, dan signature payload.",
      impact: "Menghasilkan dokumentasi komprehensif perilaku jaringan Netsupport RAT, memungkinkan deteksi dan respons ancaman yang lebih cepat untuk operasi blue team.",
      features: [
        "Inspeksi & Analisis Paket Mendalam",
        "Identifikasi Pola Lalu Lintas C2 RAT",
        "Deteksi Anomali DNS & HTTP",
        "Dokumentasi Ancaman Komprehensif"
      ],
      techSpecs: {
        "Alat Analisis": "Wireshark",
        "Format Data": "Pcap / Pcapng",
        "Fokus": "Deteksi Netsupport RAT",
        "Output": "Laporan Intelijen Ancaman",
        "Repositori": "GitHub (Publik)"
      }
    }
  },
  "3": {
    en: {
      title: "Rootine",
      category: "B2C E-Commerce",
      description: "Platform E-Commerce B2C for daily needs (groceries), connecting Customers with high-quality products via a seamless shopping experience.",
      image: "/rootine.png",
      tags: ["Spring Boot 3.4", "Next.js 16", "Docker", "MariaDB"],
      challenge: "Building a scalable, secure ecosystem for grocery retail that handles complex user roles (Admin vs Client), real-time stock management, and secure transactional flows in a competitive market.",
      solution: "Implemented a robust Monolith architecture deployed as Microservices via Docker. Features a Spring Boot backend with JWT security and a Next.js frontend for a highly responsive user experience.",
      impact: "Streamlined the grocery shopping process with a secure, user-friendly platform that simplifies product management for admins and purchasing for customers.",
      features: [
        "Role-Based Access (Client & Admin)",
        "Cart & Order Management System",
        "Secure Auth with Spring Security (JWT)",
        "Dockerized Deployment Environment"
      ],
      techSpecs: {
        "Backend": "Spring Boot 3.4.5 (Java 23)",
        "Frontend": "Next.js 16 (TypeScript + Tailwind v4)",
        "Database": "MariaDB 11.4 + Hibernate/JPA",
        "Security": "Spring Security + JWT",
        "Infra": "Docker Containers (FE, BE, DB)"
      }
    },
    id: {
      title: "Rootine",
      category: "E-Commerce B2C",
      description: "Platform E-Commerce B2C untuk kebutuhan sehari-hari (sembako), menghubungkan Pelanggan dengan produk berkualitas tinggi melalui pengalaman belanja yang mulus.",
      image: "/rootine.png",
      tags: ["Spring Boot 3.4", "Next.js 16", "Docker", "MariaDB"],
      challenge: "Membangun ekosistem yang dapat diskalakan dan aman untuk ritel bahan makanan yang menangani peran pengguna kompleks (Admin vs Klien), manajemen stok real-time, dan alur transaksi aman di pasar yang kompetitif.",
      solution: "Mengimplementasikan arsitektur Monolit yang tangguh yang disebarkan sebagai Microservices via Docker. Menampilkan backend Spring Boot dengan keamanan JWT dan frontend Next.js untuk pengalaman pengguna yang sangat responsif.",
      impact: "Menyederhanakan proses belanja bahan makanan dengan platform yang aman dan ramah pengguna yang memudahkan manajemen produk bagi admin dan pembelian bagi pelanggan.",
      features: [
        "Akses Berbasis Peran (Klien & Admin)",
        "Sistem Manajemen Keranjang & Pesanan",
        "Otentikasi Aman dengan Spring Security (JWT)",
        "Lingkungan Deployment Dockerized"
      ],
      techSpecs: {
        "Backend": "Spring Boot 3.4.5 (Java 23)",
        "Frontend": "Next.js 16 (TypeScript + Tailwind v4)",
        "Database": "MariaDB 11.4 + Hibernate/JPA",
        "Security": "Spring Security + JWT",
        "Infra": "Docker Container (FE, BE, DB)"
      }
    }
  }
};

// Define the custom event on the window object to fix event type errors
declare global {
  interface WindowEventMap {
    'open-project-modal': CustomEvent<{ id: string }>;
  }
}

const ProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);
  const language = useStore(languageStore);

  useEffect(() => {
    // Event now expects { id: string }
    const handleOpen = (event: CustomEvent<{ id: string }>) => {
      setProjectId(event.detail.id);
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; 
    };

    window.addEventListener('open-project-modal', handleOpen);
    return () => {
      window.removeEventListener('open-project-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setProjectId(null);
    document.body.style.overflow = '';
  };

  if (!isOpen || !projectId || !projectsData[projectId as keyof typeof projectsData]) return null;

  const projectBundle = projectsData[projectId as keyof typeof projectsData];
  const project = projectBundle[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={handleClose}
      ></div>

      {/* Modal Content - Compact Dashboard Style */}
      <div className="relative w-full max-w-[95vw] h-[90vh] bg-white border-4 border-black shadow-[12px_12px_0px_0px_#ea2a33] flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 bg-white border-4 border-black p-2 hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000]"
        >
          <X size={28} strokeWidth={3} />
        </button>

        {/* COL 1: Image (30%) */}
        <div className={`w-full md:w-[30%] border-b-4 md:border-b-0 md:border-r-4 border-black bg-gray-100 relative group flex flex-col items-center justify-center shrink-0 h-[40%] md:h-full overflow-hidden ${project.isMobile ? 'p-8 bg-gray-200' : ''}`}>
             {project.title !== 'Network Traffic Analysis' && project.title !== 'QuickTurn' && project.title !== 'Rootine' && (
                 <div className={`relative w-full overflow-hidden ${project.isMobile ? 'h-auto aspect-[9/19] rounded-[2rem] border-8 border-gray-900 shadow-xl bg-black' : 'h-full'}`}>
                     <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none ${project.isMobile ? 'rounded-[1.5rem]' : ''}`}></div>
                     <picture>
                       <source 
                         type="image/webp" 
                         srcSet={project.image.replace(/\.(png|jpe?g)$/i, '.webp')} 
                       />
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         loading="lazy"
                         decoding="async"
                         className={`w-full h-full object-cover transition-all duration-500 ${project.isMobile ? 'rounded-[1.4rem]' : 'grayscale group-hover:grayscale-0'}`}
                       />
                     </picture>
                     
                     {/* Not Mobile: Default Overlay Controls */}
                     {!project.isMobile && (
                       <>
                        <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="bg-[#ea2a33] text-white border-2 border-black px-3 py-1 text-sm font-bold uppercase shadow-[2px_2px_0px_0px_#000]">
                                {tag}
                                </span>
                            ))}
                         </div>
                         <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t-4 border-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-[#ea2a33] font-black uppercase text-base">{project.category}</p>
                            <h2 className="text-4xl font-black uppercase leading-none text-black">{project.title}</h2>
                         </div>
                       </>
                     )}
                 </div>
             )}

        
        {project.title === 'Network Traffic Analysis' && (
             <div className="w-full h-full bg-gray-950 p-8 flex flex-col font-mono relative overflow-hidden text-left group overflow-y-auto no-scrollbar">
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-12 right-8 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}></div>
                  <div className="absolute top-24 right-16 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
                  <div className="absolute top-16 left-12 w-4 h-4 bg-green-300 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8 animate-in slide-in-from-top-4 fade-in duration-700">
                    <div className="flex items-center gap-2">
                         <div className="bg-green-500 p-1.5 rounded-lg text-black hover:scale-125 hover:rotate-12 hover:shadow-lg transition-all duration-300 cursor-pointer shadow-md animate-pulse" style={{animationDuration: '3s'}}>
                            <Shield size={18} />
                         </div>
                      <span className="font-bold text-xl tracking-tight text-green-400 cursor-default hover:text-green-300 transition-colors">NetTraffic</span>
                    </div>
                    <Menu size={24} className="text-green-400 hover:rotate-180 hover:text-red-400 transition-all duration-700 cursor-pointer" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                    
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/30 px-3 py-1.5 rounded-full text-xs font-bold text-red-400 mb-6 w-fit hover:scale-110 hover:bg-red-900/50 hover:shadow-md transition-all cursor-help shadow-sm animate-in zoom-in duration-500 delay-300">
                        <span className="animate-pulse" style={{animationDuration: '1.5s'}}>⚠</span>
                        RAT DETECTED
                      </div>
                      
                      <h1 className="text-5xl md:text-5xl font-black leading-[0.9] text-green-400 mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500 cursor-default">
                        <span className="inline-block hover:text-red-400 hover:-rotate-2 transition-all duration-300">Netsupport</span><br />
                        <span className="text-gray-600 group-hover:text-green-600 transition-colors duration-500">RAT<br />Analysis.</span>
                      </h1>
                      
                      <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-xs mb-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                         {language === 'en' 
                          ? <>Deep packet inspection and traffic analysis to detect and document <em className="text-green-400 not-italic font-bold hover:underline cursor-help">Netsupport RAT</em> command-and-control patterns.</>
                          : <>Inspeksi paket mendalam dan analisis lalu lintas untuk mendeteksi dan mendokumentasikan pola <em className="text-green-400 not-italic font-bold hover:underline cursor-help">Netsupport RAT</em> command-and-control.</>
                         }
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3 z-30 relative">
                      <a href="https://github.com/SamuelKaunang/network-traffic-analysis-netsupport-rat" target="_blank" className="w-full py-4 bg-green-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-400 hover:-translate-y-2 hover:shadow-xl active:scale-95 transition-all shadow-lg shadow-green-900 hover:shadow-green-700 text-lg group/btn">
                        <span className="group-hover/btn:tracking-wider transition-all">{language === 'en' ? 'View on GitHub' : 'Lihat di GitHub'}</span>
                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all" />
                      </a>
                      <button className="w-full py-4 bg-gray-900 text-green-400 border-2 border-gray-700 rounded-xl font-bold hover:bg-gray-800 hover:border-green-500 hover:-translate-y-1 active:scale-95 transition-all text-lg hover:shadow-md">
                        {language === 'en' ? 'View Report' : 'Lihat Laporan'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative Blobs */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-900 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse"></div>
                  <div className="absolute -top-32 -left-32 w-48 h-48 bg-green-950 rounded-full blur-2xl opacity-40 pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>
             </div>
        )}

        {/* QuickTurn Custom UI */}
        {project.title === 'QuickTurn' && (
             <div className="w-full h-full bg-white p-8 flex flex-col font-sans relative overflow-hidden text-left group overflow-y-auto no-scrollbar">
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-16 right-6 w-4 h-4 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.2s', animationDuration: '1.8s'}}></div>
                  <div className="absolute top-28 right-14 w-2 h-2 bg-red-300 rounded-full animate-bounce" style={{animationDelay: '0.7s', animationDuration: '2.2s'}}></div>
                  <div className="absolute top-20 left-10 w-3 h-3 bg-orange-200 rounded-full animate-ping" style={{animationDuration: '2.5s'}}></div>
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-12 animate-in slide-in-from-top-4 fade-in duration-700">
                     {/* Logo */}
                     <picture>
                       <source type="image/webp" srcSet="/logoquickturn.webp" />
                       <img src="/logoquickturn.png" alt="QuickTurn" className="h-10 object-contain hover:scale-110 hover:-rotate-3 hover:drop-shadow-lg transition-all duration-300 cursor-pointer" loading="lazy" />
                     </picture>
                    <Menu size={24} className="text-black hover:rotate-180 hover:text-red-600 transition-all duration-700 cursor-pointer" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                    
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full text-xs font-bold text-red-700 mb-6 w-fit hover:scale-110 hover:bg-red-100 hover:shadow-md transition-all cursor-help shadow-sm animate-in zoom-in duration-500 delay-300">
                        <Sparkles size={14} className="text-red-600 animate-spin" style={{animationDuration: '4s'}} />
                        MICRO-INTERNSHIPS
                      </div>
                      
                      <h1 className="text-5xl md:text-5xl font-black leading-[0.9] text-black mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500 cursor-default">
                        <span className="inline-block hover:text-red-600 hover:-rotate-1 transition-all duration-300">{language === 'en' ? 'Real Work.' : 'Kerja Nyata.'}</span><br />
                        <span className="text-gray-300 group-hover:text-red-200 transition-colors duration-500">{language === 'en' ? 'Real' : 'Pengalaman'} <br />{language === 'en' ? 'Experience.' : 'Nyata.'}</span>
                      </h1>
                      
                      <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-xs mb-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                        {language === 'en'
                          ? <>Bridge the gap between academic theory and industry reality. <em className="text-red-600 not-italic font-bold hover:underline cursor-help">QuickTurn</em> connects students with meaningul SME projects.</>
                          : <>Jembatani kesenjangan antara teori akademik dan realitas industri. <em className="text-red-600 not-italic font-bold hover:underline cursor-help">QuickTurn</em> menghubungkan mahasiswa dengan proyek UMKM yang bermakna.</>
                        }
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3 z-30 relative">
                      <button className="w-full py-4 bg-[#ea2a33] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#c9232b] hover:-translate-y-2 hover:shadow-xl active:scale-95 transition-all shadow-lg shadow-red-200 hover:shadow-red-400 text-lg group/btn">
                        <span className="group-hover/btn:tracking-wider transition-all">{language === 'en' ? 'Find Talent' : 'Cari Talenta'}</span>
                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all" />
                      </button>
                      <button className="w-full py-4 bg-white text-black border-2 border-gray-100 rounded-xl font-bold hover:bg-red-50 hover:border-red-300 hover:-translate-y-1 active:scale-95 transition-all text-lg hover:shadow-md">
                        {language === 'en' ? 'Explore Jobs' : 'Jelajahi Pekerjaan'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative Blobs */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse"></div>
                  <div className="absolute -top-32 -left-32 w-48 h-48 bg-orange-50 rounded-full blur-2xl opacity-40 pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>
             </div>
        )}

        {/* Rootine Custom UI */}
        {project.title === 'Rootine' && (
             <div className="w-full h-full bg-gradient-to-b from-green-50 via-white to-orange-50 p-6 flex flex-col font-sans relative overflow-hidden text-left group overflow-y-auto no-scrollbar">
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-20 right-8 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}></div>
                  <div className="absolute top-32 right-4 w-2 h-2 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
                  <div className="absolute top-24 left-6 w-4 h-4 bg-green-200 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute bottom-32 right-12 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '1.8s'}}></div>
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6 animate-in slide-in-from-top-4 fade-in duration-700">
                     {/* Logo */}
                     <div className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 text-green-600 animate-pulse" style={{animationDuration: '3s'}} fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="font-black text-xl text-green-700 tracking-tight hover:text-green-800 transition-colors">Rootine</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-xs font-bold hover:scale-125 hover:bg-green-200 hover:shadow-md transition-all cursor-pointer">S</span>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-red-500 hover:scale-125 transition-all cursor-pointer"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <div className="relative">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 hover:text-green-600 hover:scale-125 transition-all cursor-pointer"><path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center animate-pulse">3</span>
                        </div>
                     </div>
                  </div>

                  {/* Welcome Badge */}
                  <div className="flex justify-center mb-4 animate-in fade-in zoom-in duration-700 delay-100">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full text-sm font-semibold text-green-700 hover:scale-110 hover:bg-green-100 hover:shadow-md transition-all cursor-default shadow-sm">
                      <span className="text-lg animate-bounce" style={{animationDuration: '2s'}}>👋</span> {language === 'en' ? 'Welcome to Rootine' : 'Selamat datang di Rootine'}
                    </div>
                  </div>

                  {/* Main Headline */}
                  <div className="text-center mb-6 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                    <h1 className="text-4xl font-black leading-[1.1] text-gray-900 mb-1 tracking-tight group-hover:scale-105 transition-transform cursor-default">
                      <span className="inline-block hover:text-green-700 hover:-rotate-1 transition-all">{language === 'en' ? 'Fresh' : 'Bahan'}</span><br />
                      <span className="inline-block hover:text-green-700 hover:rotate-1 transition-all">{language === 'en' ? 'Groceries' : 'Segar'}</span>
                    </h1>
                    <h2 className="text-3xl font-black leading-[1.1] text-green-600 tracking-tight">
                      <span className="inline-block hover:scale-110 transition-transform">{language === 'en' ? 'Delivered' : 'Diantar'}</span><br />
                      <span className="inline-block hover:scale-110 transition-transform">{language === 'en' ? 'Daily' : 'Tiap Hari'}</span>
                    </h2>
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 mb-4 shadow-sm hover:shadow-lg hover:border-green-300 transition-all animate-in fade-in duration-700 delay-200 group/search">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400 mr-2 group-hover/search:text-green-600 transition-colors"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    <span className="text-gray-400 text-sm flex-1">{language === 'en' ? 'What are...' : 'Cari apa...'}</span>
                    <button className="bg-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-green-700 hover:scale-105 hover:shadow-md active:scale-95 transition-all">Search</button>
                  </div>

                  {/* Popular Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6 animate-in fade-in duration-700 delay-250">
                    <span className="text-xs text-gray-400 font-medium">Popular:</span>
                    {['Organic Fruits', 'Vegetables', 'Fresh Meat', 'Bakery'].map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-md transition-all cursor-pointer" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
                    ))}
                  </div>

                  {/* Express Delivery Card */}
                  <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all cursor-pointer group/card">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-xl shadow-sm group-hover/card:shadow-md group-hover/card:scale-110 transition-all">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500 group-hover/card:animate-bounce"><path fill="currentColor" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm mb-0.5 group-hover/card:text-orange-700 transition-colors">Express Delivery</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{language === 'en' ? 'Get your order delivered to your doorstep in 30 minutes.' : 'Pesanan sampai depan pintu dalam 30 menit.'}</p>
                        <button className="text-orange-600 text-xs font-bold mt-2 flex items-center gap-1 hover:gap-3 transition-all group-hover/card:text-orange-700">
                          {language === 'en' ? 'Read More' : 'Selengkapnya'} <ArrowRight size={12} className="group-hover/card:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Blobs */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-50 pointer-events-none animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -right-16 w-24 h-24 bg-green-50 rounded-full blur-xl opacity-40 pointer-events-none animate-pulse" style={{animationDelay: '0.5s'}}></div>
             </div>
        )}
        </div>

        {/* COL 2: Dense Content Grid (70%) */}
        <div className="w-full md:w-[70%] bg-white p-5 md:p-12 flex flex-col flex-1 md:h-full overflow-hidden min-h-0">
          
            {/* Header Area */}
            <div className="flex justify-between items-start mb-4 md:mb-8">
                 <div>
                    <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] text-black mb-1 md:mb-3">{project.title}</h2>
                    <p className="text-[#ea2a33] font-bold uppercase tracking-wider text-sm md:text-xl">{project.category} {language === 'en' ? 'Project' : 'Proyek'}</p>
                 </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pr-6 flex flex-col gap-10 no-scrollbar">
                
                {/* Row 1: Narrative (2 Cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 border-2 border-black p-6">
                        <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                          <span className="w-4 h-4 bg-black"></span> {language === 'en' ? 'Challenge' : 'Tantangan'}
                        </h3>
                        <p className="text-lg font-medium text-gray-800 leading-relaxed">
                          {project.challenge}
                        </p>
                    </div>
                    <div className="bg-gray-50 border-2 border-black p-6">
                       <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                          <span className="w-4 h-4 bg-black"></span> {language === 'en' ? 'Solution' : 'Solusi'}
                        </h3>
                        <p className="text-lg font-medium text-gray-800 leading-relaxed">
                          {project.solution}
                        </p>
                    </div>
                </div>

                {/* Row 2: Features & Specs (2 Cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {/* Features */}
                    {project.features && (
                      <div>
                        <h3 className="text-xl font-black uppercase mb-5 border-b-4 border-black inline-block">{language === 'en' ? 'Key Features' : 'Fitur Utama'}</h3>
                        <ul className="flex flex-col gap-4">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-lg font-bold text-gray-900">
                              <span className="text-[#ea2a33] font-black text-2xl mt-[-4px]">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Specs */}
                    {project.techSpecs && (
                      <div className="bg-black text-white p-8 border-4 border-[#ea2a33] shadow-[8px_8px_0px_0px_#ea2a33]">
                        <h3 className="text-xl font-black uppercase mb-5 text-[#ea2a33] flex items-center gap-3">
                           <span className="material-symbols-outlined text-xl">code</span> Stack
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {Object.entries(project.techSpecs).slice(0,5).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center border-b border-gray-700 pb-3">
                              <span className="text-gray-400 font-bold uppercase text-sm">{key}</span>
                              <span className="text-white font-bold text-base text-right">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
            </div>

             {/* Footer Action */}
            <div className="mt-8 pt-6 border-t-2 border-gray-200">
               {project.link && (
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-5 bg-black text-white font-black text-3xl uppercase border-4 border-transparent hover:bg-[#ea2a33] hover:border-black shadow-[8px_8px_0px_0px_#ea2a33] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 transition-all">
                     {language === 'en' ? 'Visit Site' : 'Kunjungi Situs'}
                   </a>
               )}
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
