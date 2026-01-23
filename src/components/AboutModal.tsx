import { useState, useEffect } from 'react';
import { X, Mail, Github, Linkedin, Terminal, Cpu, Database, Layout } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/languageStore';

const content = {
  en: {
    role: "Full-Stack Engineer | Digital Business Strategist",
    summaryTitle: "PROFESSIONAL SUMMARY",
    summaryP1: "A <span class=\"font-bold bg-yellow-300 px-1\">Digital Business Strategist & Engineer</span> bridging the gap between technical execution and market strategy. My focus isn't just writing code, but creating solutions that solve real business problems and drive measurable growth.",
    summaryP2: "I have deep interest in <strong>Product Management</strong>, <strong>IT Consulting</strong>, and <strong>Digital Transformation</strong>. My greatest strength lies in <span class=\"underline decoration-4 decoration-[#ea2a33]\">Strategic Leadership</span> and adaptive communication—translating complex technical language into high-value business solutions. I am driven by the ambition to turn raw ideas into <em>scalable</em> and <em>profitable</em> digital products.",
    buttons: {
      contact: "Contact Me",
      open: "Open for Work"
    },
    toolkit: "Technical Toolkit",
    categories: {
      languages: "Languages",
      backend: "Backend & DB",
      frontend: "Frontend",
      cloud: "Cloud & DevOps",
      logic: "Logic & Emerging Tech"
    },
    edgeTitle: "The \"Saka\" Edge",
    edge: [
      {
        title: "Revenue-Driven",
        desc: "I don't just code; I build for business profitability."
      },
      {
        title: "Logic Over Fluff",
        desc: "Database optimization > Button colors."
      },
      {
        title: "Optimizer",
        desc: "Fastest path to market without sacrificing quality."
      }
    ],
    businessTitle: "Business Focus",
    careerGoals: "CAREER GOALS",
    businessDesc: "Expanding beyond code to strategic roles:",
    businessTags: ["Product Management", "IT Consultant", "Digital Strategy", "Tech Solutions"],
    cEngineering: "Engineering",
    cStrategy: "SaaS Strategy",
    cSystems: "Systems Logic",
    cScalability: "Scalability",
    coreDescs: [
      "Proficient in complex backend development (Spring Boot) & high-performance systems (C++, Golang).",
      "Expert in designing product roadmaps, BMC, and market-oriented Value Propositions.",
      "Deep understanding of data structures, algorithm optimization, and complex state management.",
      "Focus on secure applications, robust architecture, and readiness for massive scaling."
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
        title: "VRAIS",
        role: "Product Visionary",
        tag: "Digital Art Certification Platform",
        business: "Identifying AI-era market gaps for valuable digital art certification.",
        tech: "Data integrity & security architecture. Valid \"digital fingerprints\".",
        quote: "\"Not just a gallery, but a digital land deed bureau to keep artist works safe from AI.\""
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
    role: "Full-Stack Engineer | Strategis Bisnis Digital",
    summaryTitle: "RINGKASAN PROFESIONAL",
    summaryP1: "Seorang <span class=\"font-bold bg-yellow-300 px-1\">Digital Business Strategist & Engineer</span> dengan visi menjembatani kesenjangan antara eksekusi teknis dan strategi pasar. Fokus utama saya bukan sekadar menulis kode, melainkan menciptakan solusi yang memecahkan masalah bisnis nyata dan mendorong pertumbuhan yang terukur.",
    summaryP2: "Saya memiliki ketertarikan mendalam pada <strong>Manajemen Produk</strong>, <strong>Konsultansi IT</strong>, dan <strong>Transformasi Digital</strong>. Kekuatan terbesar saya terletak pada <span class=\"underline decoration-4 decoration-[#ea2a33]\">Strategic Leadership</span> dan kemampuan komunikasi adaptif—menerjemahkan bahasa teknis yang kompleks menjadi solusi bisnis yang bernilai tinggi. Saya didorong oleh ambisi untuk mengubah ide mentah menjadi produk digital yang <em>scalable</em> dan <em>profitable</em>.",
    buttons: {
      contact: "Hubungi Saya",
      open: "Siap Bekerja"
    },
    toolkit: "Toolkit Teknis",
    categories: {
      languages: "Bahasa",
      backend: "Backend & DB",
      frontend: "Frontend",
      cloud: "Cloud & DevOps",
      logic: "Logika & Tek. Baru"
    },
    edgeTitle: "Keunggulan \"Saka\"",
    edge: [
      {
        title: "Berorientasi Pendapatan",
        desc: "Saya tidak hanya koding; saya membangun untuk profitabilitas bisnis."
      },
      {
        title: "Logika > Kosmetik",
        desc: "Optimasi database > Warna tombol."
      },
      {
        title: "Optimizer",
        desc: "Jalur tercepat ke pasar tanpa mengorbankan kualitas."
      }
    ],
    businessTitle: "Fokus Bisnis",
    careerGoals: "TUJUAN KARIR",
    businessDesc: "Berekspansi melampaui kode ke peran strategis:",
    businessTags: ["Manajemen Produk", "Konsultan IT", "Strategi Digital", "Solusi Teknis"],
    cEngineering: "Rekayasa",
    cStrategy: "Strategi SaaS",
    cSystems: "Logika Sistem",
    cScalability: "Skalabilitas",
    coreDescs: [
      "Mahir dalam pengembangan backend kompleks (Spring Boot) & sistem performa tinggi (C++, Golang).",
      "Ahli merancang roadmap produk, BMC, dan Value Proposition yang berorientasi pasar.",
      "Paham mendalam struktur data, optimasi algoritma, dan manajemen state kompleks.",
      "Fokus pada aplikasi yang aman, arsitektur kokoh, dan siap untuk scaling masif."
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
        title: "VRAIS",
        role: "Visioner Produk",
        tag: "Platform Sertifikasi Seni Digital",
        business: "Identifikasi celah pasar era AI untuk sertifikasi karya seni digital bernilai jual.",
        tech: "Arsitektur integritas data & keamanan. \"Sidik jari digital\" valid.",
        quote: "\"Bukan cuma galeri, tapi biro sertifikat tanah digital agar karya seniman aman dari AI.\""
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
                         <a href="https://www.linkedin.com/in/samuel-kaunang-948246286" target="_blank" className="p-3 bg-white border-2 border-black hover:bg-[#0077b5] hover:text-white transition-colors">
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
                                        {['Java', 'C++', 'Golang', 'Python', 'TypeScript', 'Node.js'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600 ml-0">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.backend}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Spring Boot', 'MySQL', 'MongoDB', 'JPA'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.frontend}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'State Mgmt', 'Tailwind'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.cloud}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Docker', 'Railway', 'Oracle Cloud', 'Render'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ea2a33] mb-2 text-sm uppercase">{t.categories.logic}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Blockchain Dev', 'Complex Algos', 'Process Mining'].map(tech => (
                                            <span key={tech} className="bg-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Me */}
                        <div className="bg-[#ea2a33] p-6 border-4 border-black shadow-hard">
                             <h3 className="text-xl font-black uppercase mb-4 text-white border-b-4 border-black inline-block">{t.edgeTitle}</h3>
                             <ul className="space-y-4">
                                {t.edge.map((item, i) => (
                                    <li key={i} className="bg-white border-4 border-black p-3 text-sm font-bold shadow-sm">
                                        <span className="block text-[#ea2a33] uppercase text-xs mb-1">{item.title}</span>
                                        {item.desc}
                                    </li>
                                ))}
                             </ul>
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
