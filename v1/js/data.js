/* ============================================================
   DATA PORTOFOLIO - Mohammad Yusuf Rizaldy
   Sumber kebenaran tunggal. Setiap fakta di bawah ini diambil
   langsung dari Curriculum Vitae.pdf. Jangan menambah atau
   menghapus informasi tanpa memperbarui CV sumber terlebih dahulu.
   ============================================================ */

const PORTFOLIO = {
  personal: {
    name: "Mohammad Yusuf Rizaldy",
    birth: "Jombang, 24 Desember 1997",
    address:
      "Dusun Badas RT/RW 02/01 Desa Badas, Kecamatan Sumobito, Kabupaten Jombang, Jawa Timur, 61483",
    phone: "(+62) 851 0397 4297",
    phoneHref: "tel:+6285103974297",
    email: "mailtoyusufrizaldy@gmail.com",
    website: "suuf24.vercel.app",
    websiteHref: "https://suuf24.vercel.app",
    linkedin: "https://bit.ly/linkedinYusuf",
    instagram: "@suuf24",
    instagramHref: "https://www.instagram.com/suuf24/",
  },

  positioning:
    "Pendidik, Pengembang Web, dan Praktisi IT yang memadukan pendidikan dengan teknologi digital.",

  domains: [
    { label: "Pendidikan", icon: "education" },
    { label: "Teknologi", icon: "technology" },
    { label: "Pengembangan Web", icon: "web" },
    { label: "Infrastruktur IT", icon: "server" },
    { label: "AI", icon: "ai" },
    { label: "Desain", icon: "design" },
  ],

  education: [
    {
      type: "formal",
      period: "2016 - 2020",
      degree: "Pendidikan Bahasa Inggris",
      school: "STKIP PGRI JOMBANG",
    },
    {
      type: "formal",
      period: "2013 - 2016",
      degree: "Teknik Komputer Jaringan",
      school: "SMKN 3 JOMBANG",
    },
    {
      type: "informal",
      period: "2014 - 2015",
      degree: "Kursus Bahasa Inggris",
      school: "Effective English Course",
    },
  ],

  experience: [
    {
      period: "2025 - Sekarang",
      position: "Guru Kelas Bilingual",
      organization: "MI PLUS Darul Falah",
      current: true,
      responsibilities: [
        "Menyusun materi pembelajaran bilingual sesuai kurikulum",
        "Mengajar dan membimbing siswa dalam kegiatan belajar mengajar",
        "Membuat media pembelajaran interaktif menggunakan PowerPoint",
        "Menyusun modul ajar dan perangkat pembelajaran",
        "Membuat soal PH, UTS, dan UAS sesuai capaian pembelajaran",
        "Membuat simulasi latihan berbasis WebApp untuk persiapan ujian siswa",
        "Mengelola jadwal penjaga ujian menggunakan Excel dan WebApp",
        "Melakukan evaluasi hasil belajar dan perkembangan siswa",
        "Mengintegrasikan teknologi digital dalam proses pembelajaran di kelas",
      ],
    },
    {
      period: "2024 - 2025",
      position: "Penyedia Server dan Node",
      organization: "Evernode",
      current: false,
      responsibilities: [
        "Melakukan instalasi dan konfigurasi node server Evernode menggunakan Ubuntu",
        "Mengelola dan memantau node pada jaringan Xahau agar tetap stabil dan online",
        "Melakukan maintenance server jika terjadi bug, crash, atau downtime pada node",
        "Mengoptimalkan penggunaan VPS untuk kebutuhan hosting dan validasi node",
        "Melakukan monitoring status host, reputasi, dan reward pada Evernode",
        "Mengelola wallet Xahau untuk kebutuhan transaksi dan distribusi reward",
        "Melakukan troubleshooting jaringan, firewall, serta pembaruan sistem server",
        "Menyediakan jasa jual beli server beserta layanan maintenance",
        "Membuat automation script untuk pengelolaan server multi-VPS",
      ],
    },
    {
      period: "2023 - 2024",
      position: "Sales",
      organization: "PT. Central Wire Industrial",
      current: false,
      responsibilities: [
        "Merancang dan melaksanakan strategi penjualan untuk mencapai target",
        "Mengidentifikasi peluang pasar baru dan mengembangkan jaringan pelanggan",
        "Memelihara hubungan dengan pelanggan lama dan baru",
        "Menyusun dan mengajukan penawaran harga",
        "Memastikan distribusi barang tepat waktu",
      ],
    },
    {
      period: "2021 - 2022",
      position: "Sales",
      organization: "SHARP Indonesia",
      current: false,
      responsibilities: [
        "Penjualan langsung di department store untuk mencapai target",
        "Publikasi dan manajemen iklan di marketplace",
        "Menangani keluhan pelanggan dan perbaikan langsung ke rumah",
        "Mengidentifikasi kebutuhan pelanggan dan merekomendasikan produk",
        "Melakukan presentasi produk dan demo",
        "Mengelola stok dan memastikan ketersediaan barang",
        "Mengumpulkan umpan balik pelanggan untuk perbaikan layanan",
      ],
    },
    {
      period: "2020 - 2021",
      position: "Account Executive",
      organization: "by.U Digital Provider by Telkomsel",
      current: false,
      responsibilities: [
        "Memelihara dan mendaftarkan outlet ke aplikasi operasional",
        "Menjalin kerja sama event dengan kampus, kafe, dan komunitas",
        "Memimpin dan mengoordinasikan tim direct sales",
        "Memastikan pemasangan AdBanner dan media promosi di outlet telco",
        "Memastikan ketersediaan dan distribusi kartu perdana tepat waktu",
        "Mengelola database outlet untuk wilayah Jawa, Bali, dan Nusa Tenggara",
        "Meningkatkan penjualan dan awareness produk by.U di area pemasaran",
        "Melakukan monitoring stok dan aktivitas penjualan di lapangan",
      ],
    },
    {
      period: "2019",
      position: "Penerjemah dan Editor Tesis",
      organization: "Freelance",
      current: false,
      responsibilities: [
        "Menerjemahkan dokumen dan teks akademik",
        "Mengedit dan merevisi tesis serta dokumen",
        "Memberikan saran untuk meningkatkan kualitas tulisan",
        "Berkomunikasi dengan klien mengenai proyek",
        "Menyelesaikan proyek tepat waktu",
      ],
    },
    {
      period: "2019",
      position: "Relawan Penerjemah Program Study Abroad",
      organization: "UNAIR - MDC",
      current: false,
      responsibilities: [
        "Menerjemahkan komunikasi antara tamu dari luar negeri dengan pihak lokal",
        "Membantu memahami tentang budaya dan tradisi masyarakat sekitar",
        "Menyediakan dukungan bahasa selama acara dan kegiatan",
        "Mengatasi hambatan bahasa untuk memastikan kelancaran komunikasi",
        "Berkoordinasi dengan tim untuk memenuhi kebutuhan bahasa peserta",
      ],
    },
    {
      period: "2018",
      position: "Guru Bahasa Inggris",
      organization: "EFB English Course",
      current: false,
      responsibilities: [
        "Mengajarkan bahasa Inggris kepada siswa dengan berbagai tingkat kemampuan",
        "Menyusun dan melaksanakan rencana pelajaran yang efektif",
        "Menilai kemajuan siswa dan memberikan umpan balik",
        "Mengelola kelas dan menciptakan lingkungan belajar yang positif",
        "Menyediakan materi tambahan dan bantuan individu sesuai kebutuhan siswa",
      ],
    },
    {
      period: "2015",
      position: "Tutor",
      organization: "Effective English Course",
      current: false,
      responsibilities: [
        "Mengajarkan bahasa Inggris dasar kepada siswa",
        "Membantu siswa memahami dan menerapkan konsep bahasa Inggris",
        "Menyusun materi pelajaran dan latihan yang sesuai",
        "Menilai kemajuan siswa dan memberikan umpan balik",
        "Mengelola sesi tutor dan menciptakan lingkungan belajar yang mendukung",
      ],
    },
  ],

  skills: [
    {
      category: "Teknologi Pendidikan",
      icon: "education",
      items: [
        "Microsoft Office",
        "Canva",
        "Figma",
        "Google Workspace",
        "Wayground",
        "Kahoot",
      ],
    },
    {
      category: "Pengembangan Web",
      icon: "web",
      items: ["HTML", "CSS", "JavaScript", "WordPress", "Vercel", "Git/GitHub"],
    },
    {
      category: "IT & Administrasi Sistem",
      icon: "server",
      items: [
        "Linux",
        "Ubuntu",
        "CLI",
        "VPS",
        "Administrasi Server",
        "Jaringan",
        "Firewall",
      ],
    },
    {
      category: "AI",
      icon: "ai",
      items: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Pengembangan Berbantuan AI"],
    },
    {
      category: "Desain & Multimedia",
      icon: "design",
      items: ["Affinity", "Photoshop", "Inkscape", "Kdenlive", "CapCut"],
    },
  ],

  languages: [
    { name: "Jawa", level: "Bahasa Ibu" },
    { name: "Bahasa", level: "Bahasa Ibu" },
    { name: "Inggris", level: "Kemampuan Kerja Baik" },
  ],

  projects: [
    // Utilitas di awal, dilanjutkan Game, Aplikasi Web, dan Pendidikan di akhir
    {
      name: "Portfolio Simulator",
      url: "https://suuf24.github.io/Portfolio-Simulator/",
      category: "Utilitas",
      description:
        "Simulator portofolio untuk menghitung PnL bersih, biaya maker/taker, dan pertumbuhan saldo secara akurat.",
    },
    {
      name: "Snake Game",
      url: "https://snake-sigma-liard.vercel.app",
      category: "Game",
      description: "Permainan Snake klasik yang dibuat sebagai aplikasi web.",
    },
    {
      name: "BrixApp",
      url: "https://brixapp.vercel.app",
      category: "Aplikasi Web",
      description: "Proyek aplikasi web serbaguna.",
    },
    {
      name: "Art Ensamble",
      url: "https://art-ensamble.vercel.app",
      category: "Aplikasi Web",
      description: "Tampilan ensambel seni secara daring.",
    },
    {
      name: "Simple Present",
      url: "https://suuf24.github.io/simplepresent/",
      category: "Pendidikan",
      description: "Aplikasi web interaktif untuk berlatih Simple Present tense dalam bahasa Inggris.",
    },
    {
      name: "Ujian Jawa",
      url: "https://ujian-jawa.vercel.app",
      category: "Pendidikan",
      description: "Materi latihan untuk ujian bahasa Jawa.",
    },
    {
      name: "ASAT Information",
      url: "https://asat-infor.vercel.app",
      category: "Pendidikan",
      description: "Halaman informasi tentang penilaian sekolah ASAT.",
    },
    {
      name: "Art ASAT",
      url: "https://art-asat.vercel.app",
      category: "Pendidikan",
      description: "Dukungan penilaian seni untuk ASAT.",
    },
    {
      name: "ASAT Aqidah",
      url: "https://asat-aqidah.vercel.app",
      category: "Pendidikan",
      description: "Materi penilaian Aqidah untuk ASAT.",
    },
    {
      name: "Fiqih Simulation",
      url: "https://fiqih-simulation.vercel.app",
      category: "Pendidikan",
      description: "Simulasi latihan untuk pelajaran Fiqih.",
    },
    {
      name: "Math Simulation",
      url: "https://simulation-math.vercel.app",
      category: "Pendidikan",
      description: "Simulasi latihan untuk pelajaran Matematika.",
    },
    {
      name: "Civic Education",
      url: "https://civic-education-mocha.vercel.app",
      category: "Pendidikan",
      description: "Materi latihan dan pembelajaran Pendidikan Kewarganegaraan.",
    },
    {
      name: "Penjumlahan TK",
      url: "https://penjumlahan-tk.vercel.app",
      category: "Pendidikan",
      description: "Latihan penjumlahan untuk siswa taman kanak-kanak.",
    },
    {
      name: "Jawaban BAB 2",
      url: "https://jawabab2.vercel.app",
      category: "Pendidikan",
      description: "Materi jawaban untuk BAB 2.",
    },
    {
      name: "PH Information Algorithm",
      url: "https://phinforalgorithm.vercel.app",
      category: "Pendidikan",
      description: "Aplikasi web yang menyajikan informasi PH (Penilaian Harian).",
    },
  ],

  achievements: [
    {
      text: "Peneliti Keamanan Siber Independen di AetharShield Protocol",
      url: "https://github.com/adiguna-sopyan/AetharShield_Protocol/#acknowledgements--special-thanks",
    },
    {
      text: "Penerjemah Bahasa Bithomp",
      url: "https://github.com/Bithomp/frontend-react#language-tanslation-credits",
    },
    {
      text: "2020 - Fasilitator dalam Pelatihan Pendampingan Pembelajaran dan Assessment Berbasis Internet",
      url: "https://drive.google.com/file/d/14OZ3ZNmovA4PLT2oJNm3EnfDz2Djb886/view?usp=sharing",
    },
    {
      text: "Penerjemah untuk Program Study Abroad UNAIR-MDC 2019",
      url: "https://drive.google.com/file/d/15ElPcwn3_x-P8T1aPYkqm3JlMNC0jtzL/view?usp=sharing",
    },
    {
      text: "Lulusan PASCA MC Level di EEC (Effective English Course)",
      url: "https://drive.google.com/file/d/14B5cYyhsfYhqJhBXs0uNZ0dzV-U6VdqM/view?usp=sharing",
    },
    {
      text: "Lulusan MC Level di EEC (Effective English Course)",
      url: "https://drive.google.com/file/d/14EXIV-N9BDc4B5QmzWTO_81gqsZS3mub/view?usp=sharing",
    },
    {
      text: "Juara II Kejuaraan Baseball & Softball se-Jawa Timur Piala Walikota",
      url: "https://drive.google.com/file/d/15-61eGdH6g9bWeaAZyTQUUggT53gIyT2/view?usp=sharing",
    },
    {
      text: "Juara II Softball Putra dalam Kejuaraan Daerah Baseball & Softball U-30 Jawa Timur",
      url: "https://drive.google.com/file/d/14ySWdLjmXNrcqNKPlBlzZuYcuVMPxft_/view?usp=sharing",
    },
    {
      text: "Juara I Kejuaraan Softball Putra dan Putri antar Perkumpulan se-Kabupaten Jombang",
      url: "https://drive.google.com/file/d/14M3b2OsIaWQGVRbuEQQJZOimQSEt3uAB/view?usp=sharing",
    },
    {
      text: "Juara III KEJURDA U-19 Baseball 2013",
      url: "https://drive.google.com/file/d/14aGxgXKpqUGuKzsfYpQJT6e3sdqQ478s/view?usp=sharing",
    },
  ],

  nav: [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang" },
    { id: "experience", label: "Pengalaman" },
    { id: "education", label: "Pendidikan" },
    { id: "skills", label: "Keahlian" },
    { id: "projects", label: "Proyek" },
    { id: "achievements", label: "Pencapaian" },
    { id: "contact", label: "Kontak" },
  ],
};
