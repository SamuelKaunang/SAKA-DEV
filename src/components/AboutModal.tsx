import { useState, useEffect } from 'react';
import { X, Mail, Github, Linkedin, Terminal, Cpu, Database, Layout, Shield } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/languageStore';

const content = {
  en: {
    role: "Cybersecurity Blue Team | IT Consultant",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summaryP1: "A <span class=\"font-bold bg-yellow-300 px-1\">Cybersecurity Blue Team Analyst & IT Consultant</span> passionate about defending digital infrastructure and empowering organizations through strategic technology consulting. My focus is on threat detection, incident response, and building resilient security postures.",
    summaryP2: "I have deep interest in <strong>Cyber Defense</strong>, <strong>IT Consulting</strong>, and <strong>Digital Forensics</strong>. My greatest strength lies in <span class=\"underline decoration-4 decoration-[#ea2a33]\">Analytical Thinking</span> and adaptive communication—translating complex security threats into actionable business strategies. I am driven by the ambition to protect digital ecosystems and build <em>secure</em> and <em>resilient</em> IT infrastructure.",
    buttons: {
      contact: "Contact Me",
      open: "Open for Work"
    },
    toolkit: "Technical Toolkit",
    categories: {
      languages: "Languages",
      soc: "SOC & Monitoring",
      siem: "SIEM & Log Analysis",
      cloud: "Cloud & DevOps",
      network: "Network & Forensics"
    },
    businessTitle: "Business Focus",
    careerGoals: "CAREER GOALS",
    businessDesc: "Expanding beyond code to strategic roles:",
    businessTags: ["Cybersecurity Blue Team", "IT Consultant", "Digital Forensics", "Threat Detection"],
    cEngineering: "Cyber Defense",
    cStrategy: "IT Strategy",
    cSystems: "Threat Analysis",
    cScalability: "Incident Response",
    coreDescs: [
      "Proficient in network security monitoring, SIEM tools, and defense-in-depth strategies.",
      "Expert in IT consulting, digital transformation, and technology strategy for organizations.",
      "Deep understanding of threat modeling, log analysis, and security incident investigation.",
      "Focus on incident response planning, vulnerability assessment, and security architecture."
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "Blockchain Basics", issuer: "Cyfrin Updraft", date: "Mar 2026", id: "BBCC-SSLHD74M97PVZ", logo: "/logos/cyfrin.svg", color: "#6366f1" },
      { name: "Google Cybersecurity", issuer: "Google", date: "Mar 2026", id: "6RI3Y1YSE77N", logo: "/logos/google.svg", color: "#4285F4" },
      { name: "Cyber Job Simulation", issuer: "Deloitte Australia", date: "Mar 2026", id: "feei7F6FK3ELf95EF", logo: "/logos/deloitte.svg", color: "#86BC25" },
      { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Mar 2026", id: "yXwx-uTCL", logo: "/logos/microsoft.svg", color: "#0078D4" },
      { name: "Technology Job Simulation", issuer: "Deloitte Australia", date: "Mar 2026", id: "pHPSRY9zAhDy3HJLM", logo: "/logos/deloitte.svg", color: "#86BC25" },
      { name: "Strategy Consulting Job Simulation", issuer: "Accenture Australia", date: "Mar 2026", id: "wZYs263E2mAB2LLF8", logo: "/logos/accenture.svg", color: "#A100FF" }
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "QuickTurn",
        role: "Founder & Lead Dev",
        tag: "SaaS Platform for Micro-Internships",
        business: "Designing business strategy from scratch to connect SMEs with students. Cost efficiency & real impact.",
        tech: "Full-stack Spring Boot & React. Features: Order Flow, Cart System, MySQL DB Management.",
        quote: "\"Building an efficient toll bridge for distributing student talent to the small business sector.\""
      },
      {
        title: "Network Traffic Analysis",
        role: "Security Analyst",
        tag: "Netsupport RAT Detection & Analysis",
        business: "Analyzing malicious network traffic patterns to detect and document Netsupport RAT activity.",
        tech: "Wireshark, Pcap analysis, traffic pattern recognition, threat intelligence.",
        quote: "\"Detecting threats through deep packet inspection—turning raw traffic into actionable security intelligence.\""
      },
      {
        title: "DFIR Workbench",
        role: "DFIR Engineer",
        tag: "NIST SP 800-61 Incident Response Platform",
        business: "Building an end-to-end incident response workflow for analysts, from alert detection and case management to forensic reporting.",
        tech: "Python, Flask, SQLite, SQLAlchemy, fpdf2, Chart.js, Jinja2, Honeypot SQLite Sync.",
        quote: "\"Turning incident chaos into a structured, traceable, and report-ready DFIR process.\""
      }
    ],
    backgroundTitle: "Background",
    born: "Born",
    origin: "Origin",
    base: "Base",
    eduPathTitle: "Education Path",
    present: "Present",
    science: "Science Major"
  },
  id: {
    role: "Cybersecurity Blue Team | Konsultan IT",
    summaryTitle: "RINGKASAN PROFESIONAL",
    summaryP1: "Seorang <span class=\"font-bold bg-yellow-300 px-1\">Cybersecurity Blue Team Analyst & Konsultan IT</span> yang bersemangat melindungi infrastruktur digital dan memberdayakan organisasi melalui konsultansi teknologi strategis. Fokus utama saya pada deteksi ancaman, respons insiden, dan membangun postur keamanan yang tangguh.",
    summaryP2: "Saya memiliki ketertarikan mendalam pada <strong>Pertahanan Siber</strong>, <strong>Konsultansi IT</strong>, dan <strong>Forensik Digital</strong>. Kekuatan terbesar saya terletak pada <span class=\"underline decoration-4 decoration-[#ea2a33]\">Berpikir Analitis</span> dan kemampuan komunikasi adaptif—menerjemahkan ancaman keamanan kompleks menjadi strategi bisnis yang dapat ditindaklanjuti. Saya didorong oleh ambisi untuk melindungi ekosistem digital dan membangun infrastruktur IT yang <em>aman</em> dan <em>tangguh</em>.",
    buttons: {
      contact: "Hubungi Saya",
      open: "Siap Bekerja"
    },
    toolkit: "Toolkit Teknis",
    categories: {
      languages: "Bahasa",
      soc: "SOC & Pemantauan",
      siem: "SIEM & Analisis Log",
      cloud: "Cloud & DevOps",
      network: "Jaringan & Forensik"
    },
    businessTitle: "Fokus Bisnis",
    careerGoals: "TUJUAN KARIR",
    businessDesc: "Berekspansi melampaui kode ke peran strategis:",
    businessTags: ["Cybersecurity Blue Team", "Konsultan IT", "Forensik Digital", "Deteksi Ancaman"],
    cEngineering: "Pertahanan Siber",
    cStrategy: "Strategi IT",
    cSystems: "Analisis Ancaman",
    cScalability: "Respons Insiden",
    coreDescs: [
      "Mahir dalam pemantauan keamanan jaringan, SIEM tools, dan strategi pertahanan berlapis.",
      "Ahli dalam konsultansi IT, transformasi digital, dan strategi teknologi untuk organisasi.",
      "Paham mendalam pemodelan ancaman, analisis log, dan investigasi insiden keamanan.",
      "Fokus pada perencanaan respons insiden, penilaian kerentanan, dan arsitektur keamanan."
    ],
    certsTitle: "Sertifikasi",
    certs: [
      { name: "Blockchain Basics", issuer: "Cyfrin Updraft", date: "Mar 2026", id: "BBCC-SSLHD74M97PVZ", logo: "/logos/cyfrin.svg", color: "#6366f1" },
      { name: "Google Cybersecurity", issuer: "Google", date: "Mar 2026", id: "6RI3Y1YSE77N", logo: "/logos/google.svg", color: "#4285F4" },
      { name: "Cyber Job Simulation", issuer: "Deloitte Australia", date: "Mar 2026", id: "feei7F6FK3ELf95EF", logo: "/logos/deloitte.svg", color: "#86BC25" },
      { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Mar 2026", id: "yXwx-uTCL", logo: "/logos/microsoft.svg", color: "#0078D4" },
      { name: "Technology Job Simulation", issuer: "Deloitte Australia", date: "Mar 2026", id: "pHPSRY9zAhDy3HJLM", logo: "/logos/deloitte.svg", color: "#86BC25" },
      { name: "Strategy Consulting Job Simulation", issuer: "Accenture Australia", date: "Mar 2026", id: "wZYs263E2mAB2LLF8", logo: "/logos/accenture.svg", color: "#A100FF" }
    ],
    projectsTitle: "Proyek",
    projects: [
      {
        title: "QuickTurn",
        role: "Founder & Lead Dev",
        tag: "Platform SaaS untuk Magang Mikro",
        business: "Merancang strategi dari nol untuk menghubungkan UMKM dengan mahasiswa. Efisiensi biaya & dampak nyata.",
        tech: "Full-stack Spring Boot & React. Fitur: Alur Pesanan, Sistem Keranjang, Manajemen DB MySQL.",
        quote: "\"Membangun jembatan tol yang efisien buat distribusi talent mahasiswa ke sektor bisnis kecil.\""
      },
      {
        title: "Network Traffic Analysis",
        role: "Analis Keamanan",
        tag: "Deteksi & Analisis Netsupport RAT",
        business: "Menganalisis pola lalu lintas jaringan berbahaya untuk mendeteksi dan mendokumentasikan aktivitas Netsupport RAT.",
        tech: "Wireshark, analisis Pcap, pengenalan pola lalu lintas, intelijen ancaman.",
        quote: "\"Mendeteksi ancaman melalui inspeksi paket mendalam—mengubah lalu lintas mentah menjadi intelijen keamanan yang dapat ditindaklanjuti.\""
      },
      {
        title: "DFIR Workbench",
        role: "DFIR Engineer",
        tag: "Platform Respons Insiden NIST SP 800-61",
        business: "Membangun alur kerja respons insiden end-to-end untuk analis, dari deteksi alert, manajemen kasus, hingga pelaporan forensik.",
        tech: "Python, Flask, SQLite, SQLAlchemy, fpdf2, Chart.js, Jinja2, Honeypot SQLite Sync.",
        quote: "\"Mengubah kekacauan insiden menjadi proses DFIR yang terstruktur, terlacak, dan siap dilaporkan.\""
      }
    ],
    backgroundTitle: "Latar Belakang",
    born: "Lahir",
    origin: "Asal",
    base: "Basis",
    eduPathTitle: "Jalur Pendidikan",
    present: "Sekarang",
    science: "Jurusan IPA"
  }
};

declare global {
  interface WindowEventMap {
    'open-about-modal': Event;
  }
}

const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useStore(languageStore);
  const t = content[lang];

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-about-modal', handleOpen);
    return () => {
      window.removeEventListener('open-about-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop - Semi-transparent to show main page */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content - CV Style */}
      <div className="relative w-full max-w-[1100px] h-[90vh] bg-white border-4 border-black shadow-[12px_12px_0px_0px_#ea2a33] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header / Top Bar */}
        <div className="bg-black text-white p-6 border-b-4 border-[#ea2a33] flex flex-col md:flex-row justify-between items-center sticky top-0 z-10 gap-4">
            <div className="flex items-center gap-4">
                <div className="bg-[#ea2a33] p-2 border-2 border-white -rotate-3">
                    <span className="font-black text-2xl">SYMK</span>
                </div>
                <div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">Samuel (Saka) Kaunang</h2>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#ea2a33] mt-1">{t.role}</p>
                </div>
            </div>
             <button 
                onClick={handleClose}
                className="bg-white text-black p-2 border-2 border-white hover:bg-[#ea2a33] hover:text-white hover:border-black transition-colors"
                >
                <X size={24} strokeWidth={3} />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-pattern p-6 md:p-10">
            <div className="max-w-5xl mx-auto space-y-12">
            
                {/* Intro / Summary */}
                <section className="bg-white border-4 border-black p-8 shadow-hard relative group hover:-translate-y-1 transition-transform">
                    <div className="absolute -top-4 -left-4 bg-[#ea2a33] text-white px-4 py-1 font-bold border-2 border-black rotate-2 shadow-sm group-hover:rotate-0 transition-transform">
                        {t.summaryTitle}
                    </div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed mt-4 text-justify" dangerouslySetInnerHTML={{ __html: t.summaryP1 }} />
                    <p className="text-lg md:text-xl font-medium leading-relaxed mt-4 text-justify" dangerouslySetInnerHTML={{ __html: t.summaryP2 }} />
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                         <a href="mailto:samuelymkaunang@gmail.com" className="flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase border-2 border-transparent hover:bg-[#ea2a33] hover:border-black transition-all hover:shadow-[4px_4px_0px_0px_#000]">
                            <Mail size={20} /> {t.buttons.contact}
                         </a>
                         <div className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-gray-100 font-bold text-sm">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span> {t.buttons.open}
                         </div>
                         <a href="https://github.com/SamuelKaunang" target="_blank" className="p-3 bg-white border-2 border-black hover:bg-black hover:text-white transition-colors">
                            <Github size={20} />
                         </a>
                         <a href="https://www.linkedin.com/in/sakahere4u" target="_blank" className="p-3 bg-white border-2 border-black hover:bg-[#0077b5] hover:text-white transition-colors">
                            <Linkedin size={20} />
                         </a>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Skills & Stack */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Technical Toolkit */}
                        <div className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#ea2a33]">
                            <h3 className="text-xl font-black uppercase mb-6 text-[#ea2a33] border-b-2 border-gray-800 pb-2 flex items-center gap-2">
                                <Terminal size={24} /> {t.toolkit}
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.languages}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'Golang', 'Python'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600 ml-0">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.soc}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Splunk', 'ELK Stack', 'Wazuh', 'CrowdStrike'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.siem}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['QRadar', 'ArcSight', 'Graylog', 'Syslog'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.cloud}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Docker', 'Oracle Cloud', 'Azure', 'AWS'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.network}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Wireshark', 'Nmap', 'Volatility', 'Autopsy'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Interests */}
                        <div className="bg-white p-6 border-4 border-black shadow-hard relative">
                             <div className="absolute -right-2 -top-2 bg-yellow-300 border-2 border-black px-2 py-1 font-bold text-xs rotate-3">
                                {t.careerGoals}
                             </div>
                             <h3 className="text-xl font-black uppercase mb-4 border-b-4 border-[#ea2a33] inline-block">
                                {t.businessTitle}
                             </h3>
                             <p className="text-sm font-medium mb-4 text-gray-700">{t.businessDesc}</p>
                             <div className="flex flex-wrap gap-2">
                                {t.businessTags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-black text-white font-bold text-xs uppercase border-2 border-transparent hover:bg-[#ea2a33] hover:border-black transition-colors cursor-default">{tag}</span>
                                ))}
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Experience & core strengths */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Core Strengths */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white border-4 border-black p-4 shadow-hard-sm">
                                <h4 className="font-black uppercase text-lg mb-2 flex items-center gap-2"><Cpu size={20}/> {t.cEngineering}</h4>
                                <p className="text-sm font-medium">{t.coreDescs[0]}</p>
                            </div>
                            <div className="bg-white border-4 border-black p-4 shadow-hard-sm">
                                <h4 className="font-black uppercase text-lg mb-2 flex items-center gap-2"><Layout size={20}/> {t.cStrategy}</h4>
                                <p className="text-sm font-medium">{t.coreDescs[1]}</p>
                            </div>
                            <div className="bg-white border-4 border-black p-4 shadow-hard-sm">
                                <h4 className="font-black uppercase text-lg mb-2 flex items-center gap-2"><Terminal size={20}/> {t.cSystems}</h4>
                                <p className="text-sm font-medium">{t.coreDescs[2]}</p>
                            </div>
                            <div className="bg-white border-4 border-black p-4 shadow-hard-sm">
                                <h4 className="font-black uppercase text-lg mb-2 flex items-center gap-2"><Database size={20}/> {t.cScalability}</h4>
                                <p className="text-sm font-medium">{t.coreDescs[3]}</p>
                            </div>
                        </section>

                        {/* Projects Experience */}
                        <section>
                            <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 bg-black"></span> {t.projectsTitle}
                            </h3>
                            
                            <div className="space-y-8 border-l-4 border-black ml-4 pl-8 relative">
                                {t.projects.map((project, i) => (
                                    <div key={i} className="relative group">
                                        <div className={`absolute -left-[45px] top-0 w-6 h-6 ${i === 0 ? 'bg-[#ea2a33]' : 'bg-black'} border-2 border-black rounded-full group-hover:scale-125 transition-transform`}></div>
                                        <div className="bg-white border-4 border-black p-6 shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all">
                                            <div className="flex flex-col md:flex-row justify-between mb-2">
                                                <h4 className="text-2xl font-black uppercase">{project.title}</h4>
                                                <span className="font-bold bg-black text-white px-3 py-1 text-xs flex items-center uppercase">{project.role}</span>
                                            </div>
                                            <p className="font-bold text-[#ea2a33] mb-4 text-sm uppercase tracking-wide">{project.tag}</p>
                                            <div className="space-y-3">
                                                <p className="font-medium text-gray-800 text-sm">
                                                    <strong className="block mb-1">Business:</strong> {project.business}
                                                </p>
                                                <p className="font-medium text-gray-800 text-sm">
                                                    <strong className="block mb-1">Tech:</strong> {project.tech}
                                                </p>
                                                <p className="text-xs italic bg-gray-100 p-2 border-l-4 border-gray-400">
                                                    {project.quote}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Certifications - HIGHLIGHTED SECTION */}
                        <section className="relative">
                            {/* Section Header - Bold Banner */}
                            <div className="bg-black border-4 border-black p-6 mb-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#ea2a33]"></div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-black uppercase text-white flex items-center gap-4">
                                        <Shield size={32} className="text-[#ea2a33] animate-pulse" style={{animationDuration: '2s'}} /> {t.certsTitle}
                                    </h3>
                                    <div className="bg-[#ea2a33] text-white px-4 py-2 font-black text-lg border-2 border-white rotate-3 hover:-rotate-3 transition-transform cursor-default">
                                        {t.certs.length} ✓
                                    </div>
                                </div>
                            </div>
                            
                            {/* Cert Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {t.certs.map((cert, i) => (
                                    <div key={i} className="bg-white border-4 border-black p-0 shadow-hard-sm hover:shadow-hard hover:-translate-y-2 transition-all group relative overflow-hidden" style={{borderBottomColor: cert.color}}>
                                        {/* Top color strip */}
                                        <div className="h-1.5 w-full" style={{backgroundColor: cert.color}}></div>
                                        
                                        <div className="p-5">
                                            <div className="flex items-start gap-4">
                                                {/* Logo container with brand bg */}
                                                <div className="w-14 h-14 rounded-lg border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-sm overflow-hidden" style={{backgroundColor: cert.color + '15'}}>
                                                    <img 
                                                        src={cert.logo} 
                                                        alt={cert.issuer} 
                                                        className="w-9 h-9 object-contain"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                            (e.target as HTMLImageElement).parentElement!.innerHTML = '<span style="font-size:24px">🛡️</span>';
                                                        }}
                                                    />
                                                </div>
                                                
                                                <div className="flex-1 min-w-0">
                                                    {/* Cert name */}
                                                    <h4 className="font-black text-base uppercase leading-tight mb-1 group-hover:translate-x-1 transition-transform">{cert.name}</h4>
                                                    {/* Issuer with brand color */}
                                                    <p className="text-sm font-bold uppercase" style={{color: cert.color}}>{cert.issuer}</p>
                                                    
                                                    {/* Date and ID row */}
                                                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                                                        <span className="text-xs font-bold text-gray-500 uppercase bg-gray-100 px-2 py-0.5 border border-gray-200">{cert.date}</span>
                                                        <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 tracking-wider">{cert.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Verified badge on hover */}
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-green-500 text-white text-[10px] font-black px-2 py-0.5 uppercase border border-black rotate-3">Verified ✓</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                         <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Origin & Status */}
                             <div className="bg-black text-white border-4 border-black p-6 shadow-hard-sm">
                                <h4 className="text-xl font-black uppercase text-[#ea2a33] mb-4">{t.backgroundTitle}</h4>
                                <ul className="space-y-3 text-sm font-medium">
                                    <li className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">{t.born}</span>
                                        <span>Kotamobagu, 26 Sep 2006</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">{t.origin}</span>
                                        <span>Manado, Sulawesi Utara</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">{t.base}</span>
                                        <span>Bandung, Jawa Barat</span>
                                    </li>
                                </ul>
                             </div>

                             {/* Education History */}
                             <div className="bg-white border-4 border-black p-6 shadow-hard-sm">
                                <h4 className="text-xl font-black uppercase text-[#ea2a33] mb-4">{t.eduPathTitle}</h4>
                                <ul className="space-y-4 relative border-l-4 border-gray-200 ml-2 pl-6">
                                    <li className="relative">
                                        <div className="absolute -left-[34px] top-1 w-5 h-5 bg-[#ea2a33] rounded-full border-2 border-white shadow-[0_0_0_2px_#000]"></div>
                                        <h5 className="font-bold text-sm">Telkom University</h5>
                                        <p className="text-xs text-gray-500">Informatics • {t.present}</p>
                                    </li>
                                    <li className="relative">
                                        <div className="absolute -left-[34px] top-1 w-5 h-5 bg-black rounded-full border-2 border-white shadow-[0_0_0_2px_#000] text-white text-[9px] flex items-center justify-center overflow-hidden">SMA</div>
                                        <h5 className="font-bold text-sm">SMAN 9 Binsus Manado</h5>
                                        <p className="text-xs text-gray-500">{t.science}</p>
                                    </li>
                                    <li className="relative">
                                        <div className="absolute -left-[34px] top-1 w-5 h-5 bg-gray-400 rounded-full border-2 border-white shadow-[0_0_0_2px_#gray-400]"></div>
                                        <h5 className="font-bold text-sm">SMP N 1 Manado</h5>
                                    </li>
                                    <li className="relative">
                                        <div className="absolute -left-[34px] top-1 w-5 h-5 bg-gray-300 rounded-full border-2 border-white"></div>
                                        <h5 className="font-bold text-sm">SDN 06 Manado</h5>
                                    </li>
                                </ul>
                             </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
