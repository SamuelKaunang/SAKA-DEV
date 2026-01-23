import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/languageStore';

const articlesData = {
  1: {
    id: {
      title: "Membangun Fondasi Digital: Tiga Bahasa Pemrograman Esensial untuk Pengembang Web Pemula di Tahun 2026",
      category: "Tech",
      readTime: "10 min read",
      color: "#2563eb", // Blue
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Memasuki tahun 2026, ekosistem pengembangan web telah berevolusi menjadi jauh lebih kompleks dibandingkan satu dekade lalu.
        </p>
        <p class="mb-4 text-gray-800">
          Bagi seorang pengembang pemula yang tidak hanya ingin sekadar "bisa koding" tetapi juga memiliki ambisi untuk membangun bisnis digital atau SaaS yang skalabel, pemilihan bahasa pemrograman pertama adalah keputusan strategis yang menentukan efisiensi kerja. Berdasarkan tren industri terbaru, terdapat tiga bahasa yang menawarkan kombinasi terbaik antara kemudahan pembelajaran dan utilitas bisnis yang tinggi.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">1. JavaScript & TypeScript: Sistem Saraf Utama Ekonomi Digital</h3>
        <p class="mb-4">
          JavaScript tetap memegang mahkota sebagai bahasa yang paling wajib dikuasai karena statusnya sebagai satu-satunya bahasa yang dipahami secara asli oleh peramban web. Namun, di tahun 2026, TypeScript telah menjadi standar baru yang memberikan lapisan keamanan ekstra pada JavaScript. Menguasai duo ini bukan lagi pilihan, melainkan keharusan bagi siapa pun yang ingin membangun antarmuka pengguna yang interaktif dan modern.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogi:</strong> Sistem Saraf pada tubuh manusia. Tanpa sistem saraf, sebuah website (ibarat tubuh) mungkin memiliki bentuk, namun tidak dapat bergerak atau merespons rangsangan dari luar.
        </div>
        <p class="mb-4">
          Dengan JavaScript dan bantuan framework seperti React, pengembang dapat menciptakan interaksi yang sangat mulus, yang secara langsung meningkatkan tingkat kepuasan pengguna (user retention). Dari sisi bisnis, fleksibilitas JavaScript memungkinkan satu bahasa digunakan untuk menangani tampilan depan (frontend) hingga mesin di belakangnya (backend), memberikan efisiensi biaya dan waktu yang signifikan bagi para pendiri startup.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">2. Python: Katalisator Inovasi dan Integrasi AI</h3>
        <p class="mb-4">
          Python terus mendominasi pasar karena sintaksisnya yang sangat ramah bagi otak manusia, menyerupai bahasa Inggris sehari-hari. Di era di mana kecerdasan buatan (AI) menjadi fitur standar dalam setiap aplikasi SaaS, Python bertindak sebagai jembatan utama untuk mengintegrasikan model-model pintar tersebut ke dalam aplikasi web.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogi:</strong> Penerjemah Universal. Anda tidak perlu memahami detail teknis mesin yang rumit untuk memberikan perintah; cukup gunakan instruksi yang logis, dan mesin akan mengeksekusinya.
        </div>
        <p class="mb-4">
          Bagi pengembang yang ingin membangun platform berbasis data atau membutuhkan otomatisasi tingkat tinggi, Python menawarkan perpustakaan (libraries) yang sangat luas. Dalam konteks bisnis digital, keunggulan utama Python adalah kecepatan validasi ide. Pengembang dapat membangun prototipe produk (Minimum Viable Product) jauh lebih cepat dibandingkan menggunakan bahasa lain, yang merupakan faktor kunci dalam memenangkan persaingan pasar.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">3. Java: Fondasi Baja untuk Ketangguhan Skala Besar</h3>
        <p class="mb-4">
          Meskipun sering dianggap memiliki kurva belajar yang lebih disiplin, Java tetap menjadi tulang punggung bagi sistem perusahaan besar dan infrastruktur yang membutuhkan stabilitas tanpa kompromi. Java mengajarkan pengembang pemula tentang struktur kode yang rapi dan manajemen data yang ketat, yang sangat penting saat membangun sistem yang melibatkan transaksi sensitif atau data pengguna dalam jumlah masif.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogi:</strong> Fondasi Beton Bertulang pada gedung pencakar langit. Proses pengerjaannya mungkin memakan waktu lebih lama dibandingkan membangun struktur kayu, namun fondasi inilah yang menjamin bahwa saat bisnis Anda meledak penggunanya dan trafik melonjak tajam, sistem tidak akan runtuh.
        </div>
        <p class="mb-4">
          Untuk proyek digital yang berorientasi pada keberlanjutan jangka panjang dan keamanan tingkat tinggi, seperti platform mikro-magang atau sertifikasi digital, Java menyediakan ekosistem yang sangat matang melalui kerangka kerja seperti Spring Boot.
        </p>
  
        <div class="bg-[#2563eb] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Menentukan Arah Pengembangan</h4>
          <p>
            Langkah pertama yang paling bijak bagi seorang pemula bukanlah mencoba menguasai semua bahasa secara bersamaan, melainkan memilih satu yang paling selaras dengan visi produk yang ingin diciptakan. Fokuslah pada pemahaman logika dan arsitektur di balik bahasa tersebut sebelum melakukan ekspansi ke teknologi lain. Konsistensi dalam bereksperimen pada proyek nyata akan jauh lebih berharga daripada sekadar menghafal sintaksis di luar kepala.
          </p>
        </div>
      `
    },
    en: {
      title: "Building a Digital Foundation: Three Essential Programming Languages for Web Dev Beginners in 2026",
      category: "Tech",
      readTime: "10 min read",
      color: "#2563eb", // Blue
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Entering 2026, the web development ecosystem has evolved into something far more complex compared to a decade ago.
        </p>
        <p class="mb-4 text-gray-800">
          For a beginner developer who doesn't just want to "code" but has ambitions to build a scalable digital business or SaaS, choosing the first programming language is a strategic decision that determines work efficiency. Based on recent industry trends, here are three languages offering the best combination of learning ease and high business utility.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">1. JavaScript & TypeScript: The Digital Economy's Central Nervous System</h3>
        <p class="mb-4">
          JavaScript retains the crown as the most mandatory language to master because it is the only language natively understood by web browsers. However, in 2026, TypeScript has become the new standard, providing an extra layer of safety to JavaScript. Mastering this duo is no longer an option, but a necessity for anyone wanting to build modern, interactive user interfaces.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogy:</strong> The Nervous System of the human body. Without a nervous system, a website (like a body) might have form, but cannot move or respond to external stimuli.
        </div>
        <p class="mb-4">
          With JavaScript and frameworks like React, developers can create seamless interactions that directly improve user retention. From a business perspective, JavaScript's flexibility allows one language to handle both the frontend (interface) and backend (engine), providing significant cost and time efficiency for startup founders.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">2. Python: Catalyst for Innovation and AI Integration</h3>
        <p class="mb-4">
          Python continues to dominate the market because its syntax is very friendly to the human brain, resembling everyday English. In an era where Artificial Intelligence (AI) is a standard feature in every SaaS application, Python acts as the main bridge to integrate these smart models into web applications.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogy:</strong> The Universal Translator. You don't need to understand complex machine details to give commands; just use logical instructions, and the machine executes them.
        </div>
        <p class="mb-4">
          For developers wanting to build data-driven platforms or needing high-level automation, Python offers vast libraries. In the digital business context, Python's main advantage is the speed of idea validation. Developers can build Minimum Viable Products (MVP) much faster compared to other languages, which is a key factor in winning market competition.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#2563eb] pl-4">3. Java: Steel Foundation for Large-Scale Resilience</h3>
        <p class="mb-4">
          Although often considered to have a steeper learning curve, Java remains the backbone regarding enterprise systems and infrastructure requiring uncompromising stability. Java teaches beginners about clean code structure and strict data management, which is crucial when building systems involving sensitive transactions or massive user data.
        </p>
        <div class="bg-blue-50 p-4 border-l-4 border-[#2563eb] mb-6 text-sm text-gray-900">
          <strong>Analogy:</strong> Reinforced Concrete Foundation of a skyscraper. The process might take longer than building a wooden structure, but this foundation guarantees that when your business explodes with users and traffic spikes, the system won't collapse.
        </div>
        <p class="mb-4">
          For digital projects oriented towards long-term sustainability and high security, such as micro-internship platforms or digital certification, Java provides a very mature ecosystem through frameworks like Spring Boot.
        </p>
  
        <div class="bg-[#2563eb] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Determining the Direction</h4>
          <p>
            The wisest first step for a beginner is not to try mastering all languages simultaneously, but to choose one that aligns best with the vision of the product you want to create. Focus on understanding the logic and architecture behind the language before expanding to other technologies. Consistency in experimenting with real projects will be far more valuable than just memorizing syntax.
          </p>
        </div>
      `
    }
  },
  2: {
    id: {
      title: "Transformasi Digital UMKM 2026: Strategi Akselerasi Ekonomi Nasional Berbasis Data",
      category: "Business",
      readTime: "12 min read",
      color: "#000000", // Black
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Di tengah dinamika ekonomi global tahun 2026, digitalisasi Usaha Mikro, Kecil, dan Menengah (UMKM) bukan lagi sekadar opsi tambahan, melainkan instrumen vital untuk bertahan.
        </p>
        <p class="mb-6 text-gray-800">
          Sebagai tulang punggung ekonomi Indonesia, UMKM memegang peranan krusial yang didukung oleh data fundamental yang solid. Transformasi ini bukan sekadar memindahkan lapak ke platform daring, melainkan evolusi model bisnis yang melibatkan integrasi teknologi mutakhir seperti Artificial Intelligence (AI) dan solusi Software as a Service (SaaS).
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Urgensi UMKM dalam Perekonomian Indonesia</h3>
        <p class="mb-4">
          UMKM bukan sekadar "usaha sampingan". Secara statistik, sektor ini adalah raksasa tidur yang menggerakkan roda ekonomi nasional. Berdasarkan data terbaru dari Kementerian Koperasi dan UKM (Kemenkop UKM) serta Badan Pusat Statistik (BPS), kontribusi UMKM terhadap Produk Domestik Bruto (PDB) nasional mencapai 61,07%, atau setara dengan nilai ekonomi sebesar Rp8.573,89 triliun.
        </p>
        <p class="mb-6">
          Selain kontribusi nilai, UMKM bertanggung jawab atas penyerapan sekitar 97% tenaga kerja nasional (kurang lebih 117 juta orang). Argumen validnya sederhana: jika UMKM goyah, stabilitas ekonomi nasional ikut terancam. Oleh karena itu, target pemerintah untuk meng-onboarding 30 juta UMKM ke ekosistem digital yang dicanangkan sejak 2024 kini telah berkembang menjadi fokus pada peningkatan kualitas dan daya saing global di tahun 2026.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Efisiensi Melalui Digitalisasi: Data dan Realita</h3>
        <p class="mb-4">
          Transformasi digital memberikan dampak instan pada performa bisnis. Laporan dari berbagai lembaga riset menunjukkan bahwa UMKM yang telah terdigitalisasi mengalami peningkatan omzet rata-rata hingga 26% dibandingkan dengan usaha konvensional. Di tahun 2026, tren menunjukkan pergeseran dari penggunaan media sosial dasar menuju pemanfaatan teknologi yang lebih cerdas.
        </p>
        <p class="mb-6">
          Sekitar 31% UMKM kini mulai mengadopsi teknologi AI untuk otomatisasi layanan pelanggan dan pembuatan konten kreatif. Analogi yang tepat adalah meng-upgrade karakter dalam sebuah video game; digitalisasi adalah "Legendary Gear" yang memberikan buff pada kecepatan transaksi, jangkauan pasar, dan efisiensi biaya operasional. Tanpa gear ini, UMKM akan kesulitan menghadapi kompetitor besar yang memiliki modal teknologi lebih kuat.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Tantangan Sistemik: Literasi dan Infrastruktur</h3>
        <p class="mb-4">Meski potensinya masif, perjalanan menuju transformasi penuh masih terhambat oleh beberapa faktor sistemik. Laporan dari Bank Indonesia dan INDEF menggarisbawahi beberapa hambatan utama:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-800 font-medium">
          <li><strong>Kesenjangan Literasi Digital:</strong> Banyak pelaku usaha mikro masih terjebak pada penggunaan platform digital hanya untuk pemasaran manual, tanpa memahami analisis data atau manajemen inventaris digital.</li>
          <li><strong>Infrastruktur yang Belum Merata:</strong> Masih adanya daerah blank spot menghambat digitalisasi di wilayah luar Pulau Jawa.</li>
          <li><strong>Persepsi Risiko Keamanan:</strong> Kekhawatiran akan keamanan siber dan perlindungan data menjadi alasan klasik bagi pelaku usaha untuk tetap bertahan di metode offline.</li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Peran Teknologi Web dan Peluang Digital Business</h3>
        <p class="mb-4">
          Bagi para pengembang (developers) dan pegiat bisnis digital, kesenjangan ini adalah peluang emas. Industri saat ini membutuhkan aplikasi web yang tidak hanya fungsional, tetapi juga memiliki ambang batas masuk (barrier to entry) yang rendah bagi pengguna awam. Solusi berbasis web yang responsif dan aman sangat dibutuhkan untuk membantu UMKM "naik kelas".
        </p>
        <p class="mb-6">
          Membangun platform seperti SaaS untuk manajemen keuangan atau layanan micro-internship adalah langkah inovatif untuk menjembatani antara talenta teknologi dan kebutuhan praktis UMKM. Dengan nilai ekonomi digital Indonesia yang diprediksi menembus USD 109 miliar, kolaborasi antara inovasi teknologi dan sektor UMKM akan menjadi mesin pertumbuhan yang tidak terhentikan.
        </p>
  
        <div class="bg-black text-white p-6 border-4 border-gray-800 shadow-[8px_8px_0px_0px_#ea2a33] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Kesimpulan</h4>
          <p>
            Transformasi digital UMKM adalah maraton jangka panjang yang memerlukan sinergi antara kebijakan pemerintah, inovasi pengembang teknologi, dan kesiapan mental pelaku usaha. Data membuktikan bahwa digitalisasi adalah jalur tercepat menuju efisiensi dan peningkatan omzet. Di tahun 2026, keberhasilan sebuah UMKM tidak lagi diukur dari seberapa besar toko fisiknya, melainkan seberapa cerdas infrastruktur digital yang mendukungnya.
          </p>
        </div>
      `
    },
    en: {
      title: "MSME Digital Transformation 2026: Data-Driven National Economic Acceleration Strategy",
      category: "Business",
      readTime: "12 min read",
      color: "#000000", // Black
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Amidst the dynamics of the global economy in 2026, the digitalization of Micro, Small, and Medium Enterprises (MSMEs) is no longer just an additional option, but a vital instrument for survival.
        </p>
        <p class="mb-6 text-gray-800">
          As the backbone of Indonesia's economy, MSMEs play a crucial role supported by solid fundamental data. This transformation is not just about moving stalls to online platforms, but an evolution of business models involving the integration of cutting-edge technologies such as Artificial Intelligence (AI) and Software as a Service (SaaS) solutions.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">The Urgency of MSMEs in Indonesia's Economy</h3>
        <p class="mb-4">
          MSMEs are not just a "side hustle". Statistically, this sector is a sleeping giant driving the national economic wheel. Based on recent data, MSME contribution to the national Gross Domestic Product (GDP) reaches 61.07%.
        </p>
        <p class="mb-6">
          Besides value contribution, MSMEs are responsible for absorbing about 97% of the national workforce (approx. 117 million people). The valid argument is simple: if MSMEs falter, national economic stability is threatened. Therefore, the government target to onboard 30 million MSMEs into the digital ecosystem has now evolved into a focus on improving quality and global competitiveness in 2026.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Efficiency Through Digitalization: Data and Reality</h3>
        <p class="mb-4">
          Digital transformation provides an instant impact on business performance. Reports show that digitalized MSMEs experience an average revenue increase of up to 26% compared to conventional businesses. In 2026, the trend shows a shift from basic social media use to smarter technology utilization.
        </p>
        <p class="mb-6">
          About 31% of MSMEs are now starting to adopt AI technology for customer service automation and creative content creation. The perfect analogy is upgrading a character in a video game; digitalization is "Legendary Gear" that gives a buff to transaction speed, market reach, and operational cost efficiency. Without this gear, MSMEs will struggle to face large competitors with stronger technological capital.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Systemic Challenges: Literacy and Infrastructure</h3>
        <p class="mb-4">Despite massive potential, the journey to full transformation is still hindered by systemic factors:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-800 font-medium">
          <li><strong>Digital Literacy Gap:</strong> Many micro-entrepreneurs are stuck using digital platforms only for manual marketing, without understanding data analysis or digital inventory management.</li>
          <li><strong>Uneven Infrastructure:</strong> Blank spot areas still hamper digitalization outside Java.</li>
          <li><strong>Security Risk Perception:</strong> Concerns about cybersecurity remain a classic reason for staying offline.</li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-black pl-4">Role of Web Tech and Digital Business Opportunities</h3>
        <p class="mb-4">
          For developers and digital business enthusiasts, this gap is a golden opportunity. The industry currently needs web applications that are not only functional but also have a low barrier to entry for lay users. Responsive and secure web-based solutions are needed to help MSMEs "level up".
        </p>
        <p class="mb-6">
          Building platforms like SaaS for financial management or micro-internship services is an innovative step to bridge tech talent and practical MSME needs. With Indonesia's digital economy value predicted to exceed USD 109 billion, collaboration between tech innovation and the MSME sector will be an unstoppable growth engine.
        </p>
  
        <div class="bg-black text-white p-6 border-4 border-gray-800 shadow-[8px_8px_0px_0px_#ea2a33] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Conclusion</h4>
          <p>
            MSME digital transformation is a long-term marathon requiring synergy between government policy, tech developer innovation, and entrepreneur mental readiness. Data proves digitalization is the fastest path to efficiency and revenue growth. In 2026, an MSME's success is no longer measured by physical store size, but by how smart its supporting digital infrastructure is.
          </p>
        </div>
      `
    }
  },
  3: {
    id: {
      title: "Menavigasi Labirin Karier: Panduan Strategis bagi Mahasiswa IT dalam Memilih Spesialisasi di Tahun 2026",
      category: "Strategy",
      readTime: "8 min read",
      color: "#7e22ce", // Purple
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Memasuki tahun 2026, dunia teknologi informasi telah berkembang menjadi ekosistem yang sangat luas dan kompleks. Bagi mahasiswa Informatika atau IT, fenomena <em>choice overload</em> atau ledakan pilihan spesialisasi sering kali memicu kecemasan akademik.
        </p>
        <p class="mb-6 text-gray-800">
          Jika pada dekade sebelumnya pilihan hanya berkisar pada web atau mobile development, kini mahasiswa dihadapkan pada spektrum yang jauh lebih lebar, mulai dari AI Engineering hingga Blockchain Architecture. Menentukan pilihan spesialisasi bukan sekadar memilih mata kuliah pilihan, melainkan langkah strategis dalam menentukan peran apa yang ingin Anda mainkan dalam ekonomi digital masa depan.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Memahami Arsitektur Minat: Analogi Peran dalam Ekosistem Teknologi</h3>
        <p class="mb-4">
          Untuk mempermudah pemetaan minat, mahasiswa dapat membayangkan dunia IT sebagai proses pembangunan sebuah kota pintar. Dalam pembangunan ini, terdapat berbagai peran krusial yang membutuhkan tipe kepribadian dan keahlian yang berbeda.
        </p>
        <ul class="space-y-4 mb-6">
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">Sang Arsitek & Pembangun (Software Engineering & UI/UX)</strong>
            Jika Anda adalah tipe orang yang senang melihat hasil nyata dari ide-ide abstrak, maka jalur pengembangan perangkat lunak atau desain antarmuka adalah jawabannya. Peran ini ibarat merancang estetika sekaligus struktur kokoh sebuah gedung agar nyaman ditinggali oleh pengguna.
          </li>
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">Sang Detektif & Penjaga (Cybersecurity)</strong>
            Jika Anda memiliki rasa ingin tahu yang tinggi terhadap celah keamanan dan senang memecahkan teka-teki, jalur keamanan siber adalah tempatnya. Anda berperan sebagai unit intelijen yang memastikan seluruh kota aman dari ancaman pihak luar. Jalur ini sangat krusial mengingat serangan siber di tahun 2026 semakin canggih berkat bantuan AI.
          </li>
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">Sang Ilmuwan Data (Data Science & AI)</strong>
            Jika Anda lebih tertarik pada pola-pola tersembunyi dan bagaimana memprediksi masa depan berdasarkan fakta masa lalu, maka data adalah dunia Anda. Jalur ini ibarat ahli meteorologi yang mampu membaca pergerakan awan untuk menentukan kapan hujan akan turun, memberikan panduan berharga bagi keputusan bisnis.
          </li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Tren Industri 2026: Di Mana Peluang Terbesar Berada?</h3>
        <p class="mb-4">Berdasarkan data pasar tenaga kerja terbaru, terdapat pergeseran signifikan dalam permintaan talenta digital. Berikut adalah tiga bidang yang diprediksi akan terus mengalami pertumbuhan pesat sepanjang tahun 2026:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-800 font-medium">
          <li><strong>AI & Machine Learning Integration:</strong> Bukan lagi sekadar membuat model AI, industri kini membutuhkan pengembang yang mampu mengintegrasikan Large Language Models (LLM) ke dalam aplikasi praktis yang solutif.</li>
          <li><strong>Cyber-Physical Systems Security:</strong> Seiring dengan semakin masifnya penggunaan perangkat IoT (Internet of Things) di sektor industri dan UMKM, keamanan pada titik temu antara perangkat keras dan perangkat lunak menjadi prioritas utama.</li>
          <li><strong>Green IT & Sustainable Development:</strong> Munculnya kesadaran akan dampak lingkungan dari pusat data masif menciptakan permintaan baru bagi pengembang yang mampu menulis kode yang efisien energi dan arsitektur cloud yang ramah lingkungan.</li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Strategi Praktis Menemukan "Ikigai" Teknologi Anda</h3>
        <p class="mb-4">Menemukan spesialisasi yang tepat memerlukan kombinasi antara eksplorasi mandiri dan pemahaman terhadap realita pasar. Jangan hanya terpaku pada apa yang sedang viral, tetapi perhatikan di mana minat terdalam Anda bersinggungan dengan kebutuhan industri.</p>
        <ol class="list-decimal pl-6 mb-6 space-y-4 text-gray-800">
          <li>
            <strong>Eksperimen Melalui Proyek Kecil:</strong> Jangan menunggu skripsi untuk mencoba sebuah teknologi. Gunakan waktu luang untuk membangun proyek sederhana, seperti bot otomatisasi dengan Python atau mendesain ulang antarmuka aplikasi lokal dengan prinsip UI/UX terbaru.
          </li>
          <li>
            <strong>Analisis Kecocokan Karakter:</strong> Tanyakan pada diri sendiri: Apakah Anda lebih suka bekerja dalam ketenangan analisis data yang panjang, atau lebih menyukai dinamika pembangunan fitur yang cepat dan terlihat hasilnya?
          </li>
          <li>
            <strong>Ikuti Magang Mikro (Micro-Internships):</strong> Mencoba terjun langsung dalam proyek nyata di UMKM atau startup skala kecil dapat memberikan gambaran jujur mengenai beban kerja dan rutinitas harian dari setiap spesialisasi tersebut.
          </li>
        </ol>
  
        <div class="bg-[#7e22ce] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Kesimpulan: Karier adalah Maraton, Bukan Sprint</h4>
          <p>
            Sangat wajar bagi seorang mahasiswa IT untuk merasa bingung di tengah arus perubahan teknologi yang begitu cepat. Namun, perlu diingat bahwa spesialisasi yang Anda pilih saat ini bukanlah harga mati. Fondasi logika pemrograman dan pemecahan masalah yang kuat akan selalu menjadi modal berharga, apa pun bahasa pemrograman atau framework yang nantinya Anda gunakan. Pilihlah bidang yang membuat Anda tertantang untuk terus belajar, karena di dunia IT, berhenti belajar berarti mulai tertinggal.
          </p>
        </div>
      `
    },
    en: {
      title: "Navigating the Career Maze: Strategic Guide for IT Students in Choosing Specialization in 2026",
      category: "Strategy",
      readTime: "8 min read",
      color: "#7e22ce", // Purple
      content: `
        <p class="text-lg leading-relaxed mb-6 font-bold">
          Entering 2026, the world of information technology has developed into a vast and complex ecosystem. For Informatics or IT students, the phenomenon of <em>choice overload</em> or specialization explosion often triggers academic anxiety.
        </p>
        <p class="mb-6 text-gray-800">
          If in the previous decade choices revolved around web or mobile development, students are now faced with a much wider spectrum, from AI Engineering to Blockchain Architecture. Determining a specialization choice is not just about choosing elective courses, but a strategic step in defining what role you want to play in the future digital economy.
        </p>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Understanding Interest Architecture: Role Analogy in Tech Ecosystem</h3>
        <p class="mb-4">
          To simplify interest mapping, students can imagine the IT world as the process of building a smart city. In this construction, there are various crucial roles requiring different personality types and skills.
        </p>
        <ul class="space-y-4 mb-6">
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">The Architect & Builder (Software Engineering & UI/UX)</strong>
            If you are the type who enjoys seeing tangible results from abstract ideas, then the software development or interface design path is the answer. This role is like designing the aesthetics and sturdy structure of a building to be comfortable for users.
          </li>
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">The Detective & Guardian (Cybersecurity)</strong>
            If you have high curiosity about security gaps and enjoy solving puzzles, the cybersecurity path is the place. You act as an intelligence unit ensuring the whole city is safe from external threats. This path is crucial as cyber attacks in 2026 are getting sophisticated with AI help.
          </li>
          <li class="bg-purple-50 p-4 border-l-4 border-[#7e22ce]">
            <strong class="block text-[#7e22ce] uppercase text-sm mb-1">The Data Scientist (Data Science & AI)</strong>
            If you are more interested in hidden patterns and predicting the future based on past facts, then data is your world. This path is like a meteorologist capable of reading cloud movements to determine when it will rain, providing valuable guidance for business decisions.
          </li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Industry Trends 2026: Where are the Biggest Opportunities?</h3>
        <p class="mb-4">Based on recent labor market data, there is a significant shift in digital talent demand. Here are three fields predicted to continue growing rapidly throughout 2026:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-800 font-medium">
          <li><strong>AI & Machine Learning Integration:</strong> No longer just creating AI models, the industry now needs developers capable of integrating Large Language Models (LLM) into practical solutions.</li>
          <li><strong>Cyber-Physical Systems Security:</strong> With massive IoT usage in industry and MSMEs, security at the intersection of hardware and software becomes a top priority.</li>
          <li><strong>Green IT & Sustainable Development:</strong> Rising awareness of massive data center environmental impact creates new demand for developers capable of writing energy-efficient code and eco-friendly cloud architectures.</li>
        </ul>
  
        <h3 class="text-2xl font-black uppercase mt-8 mb-4 border-l-8 border-[#7e22ce] pl-4">Practical Strategy to Find Your Tech "Ikigai"</h3>
        <p class="mb-4">Finding the right specialization requires a combination of self-exploration and understanding market reality. Don't just stick to what's viral, but observe where your deepest interests intersect with industry needs.</p>
        <ol class="list-decimal pl-6 mb-6 space-y-4 text-gray-800">
          <li>
            <strong>Experiment Through Small Projects:</strong> Don't wait for your thesis to try a technology. Use free time to build simple projects, like automation bots with Python or redesigning local app interfaces with the latest UI/UX principles.
          </li>
          <li>
            <strong>Character Fit Analysis:</strong> Ask yourself: Do you prefer working in the quietness of long data analysis, or do you prefer the dynamics of building features that are fast and visible?
          </li>
          <li>
            <strong>Micro-Internships:</strong> Trying to dive directly into real projects in MSMEs or small startups can give an honest picture of the workload and daily routines of each specialization.
          </li>
        </ol>
  
        <div class="bg-[#7e22ce] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] mt-8">
          <h4 class="font-bold text-xl uppercase mb-2">Conclusion: Career is a Marathon, Not a Sprint</h4>
          <p>
            It is very natural for an IT student to feel confused amidst the rapid current of technological change. However, keep in mind that the specialization you choose now is not a fixed price. A strong foundation of programming logic and problem-solving will always be a valuable asset, whatever language or framework you use later. Choose a field that challenges you to keep learning, because in the IT world, stopping learning means starting to fall behind.
          </p>
        </div>
      `
    }
  }
};

declare global {
  interface WindowEventMap {
    'open-article-modal': CustomEvent<number>;
  }
}

const ArticleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articleId, setArticleId] = useState<number | null>(null);
  const language = useStore(languageStore);

  useEffect(() => {
    const handleOpen = (e: CustomEvent<number>) => {
      setArticleId(e.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-article-modal', handleOpen);
    return () => {
      window.removeEventListener('open-article-modal', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setArticleId(null);
    document.body.style.overflow = '';
  };

  if (!isOpen || !articleId || !articlesData[articleId as keyof typeof articlesData]) return null;

  const articleBundle = articlesData[articleId as keyof typeof articlesData];
  const article = articleBundle[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop - Semi-transparent */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-white border-4 border-black flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        style={{ boxShadow: `12px 12px 0px 0px ${article.color}` }}
      >
        
        {/* Header */}
        <div 
          className="text-white p-6 border-b-4 border-black flex justify-between items-start sticky top-0 z-10 transition-colors duration-300"
          style={{ backgroundColor: article.color }}
        >
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase">{article.category}</span>
              <span className="text-white/80 text-sm font-bold">{article.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black uppercase leading-tight">{article.title}</h2>
          </div>
          <button 
            onClick={handleClose}
            className="bg-white text-black p-2 border-2 border-white transition-colors flex-shrink-0 hover:bg-black hover:text-white"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {/* SEO: Article Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "author": {
                "@type": "Person",
                "name": "Samuel Kaunang"
              },
              "publisher": {
                "@type": "Person",
                "name": "Saka.Dev",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://saka.dev/favicon.svg"
                }
              },
              "description": article.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + "...",
              "articleBody": article.content.replace(/<[^>]*>?/gm, ''),
              "datePublished": "2024-01-01", 
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://saka.dev/#article-${articleId}`
              }
            })
          }} />

          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Footer */}
        <div className="bg-gray-100 border-t-4 border-black p-4 flex items-center justify-between">
          <div className="text-sm font-bold text-gray-600">
            Written by Samuel Kaunang
          </div>
          <button
            onClick={handleClose}
            className="text-white px-6 py-2 font-bold uppercase text-sm transition-colors border-2 border-black hover:brightness-110"
            style={{ backgroundColor: article.color }}
          >
            {language === 'en' ? 'Close Article' : 'Tutup Artikel'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
