// Data terpusat untuk seluruh konten BKH Kartini Trenggalek
// Semua teks ditulis dalam Bahasa Indonesia yang autentik.
// Tema: Keadilan Merah-Putih · Logo & foto asli BKH Kartini.

export const WHATSAPP_NUMBER = "6281331922614"; // format internasional tanpa +
export const WHATSAPP_DISPLAY = "081331922614";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BKH%20Kartini%2C%20saya%20ingin%20minta%20bantuan%20hukum.`;

// Logo BKH Kartini (diunggah oleh klien)
export const LOGO_SRC = "/uploads/logo-bkh.png";

export const NAV_MENU = [
  { label: "Beranda", href: "#beranda" },
  { label: "Berita", href: "#berita" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Pendaftaran", href: "#kontak" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Syarat SKTM", href: "#syarat" },
  { label: "Galeri", href: "#galeri" },
] as const;

// Slider Hero — foto kegiatan aktual BKH Kartini
export const HERO_SLIDES = [
  {
    src: "/uploads/bkh-08.jpeg",
    alt: "Kegiatan BKH Kartini di lapangan",
    caption: "Aksi Nyata BKH Kartini di Lapangan",
  },
  {
    src: "/uploads/bkh-03.jpeg",
    alt: "Pendampingan warga oleh BKH Kartini",
    caption: "Pendampingan Warga Kurang Mampu",
  },
  {
    src: "/uploads/bkh-07.jpeg",
    alt: "Penyuluhan hukum massal BKH Kartini",
    caption: "Penyuluhan Hukum Masyarakat",
  },
  {
    src: "/uploads/bkh-11.jpeg",
    alt: "Konsultasi hukum pro bono",
    caption: "Konsultasi Hukum Pro Bono",
  },
] as const;

export const STATS = [
  {
    target: 100,
    suffix: "+",
    label: "Kasus Selesai",
    description:
      "Mulai dari perceraian, KDRT, sengketa tanah, hingga kasus pidana ringan — semuanya didampingi gratis dari awal hingga putusan.",
  },
  {
    target: 45,
    suffix: "+",
    label: "Desa Penyuluhan",
    description:
      "Tim advokad kita nyaba ke desa-desa di Trenggalek: Panggul, Watulimo, Tugu, Campurdarat, sampai Pogalan dan Durenan.",
  },
  {
    target: 100,
    suffix: "%",
    label: "Gratis Tanpa Pungutan",
    description:
      "Tidak ada biaya pendaftaran, biaya pengganti, atau upeti. Biaya pengadilan & materai ditanggung penuh oleh BKH Kartini.",
  },
] as const;

export const SERVICES = [
  {
    icon: "Gavel",
    title: "Litigasi (Persidangan)",
    short: "Pendampingan hukum di pengadilan",
    description:
      "Tim advokad kita dampingi tersangka/tergugat, penggugat maupun tergugat di seluruh tahapan persidangan — mulai sidang pertama, pembacaan dakwaan, bebarian saksi, sampai vonis & upaya hukum. Kasus yang biasa kita tangani: pidana umum (pencurian ringan, penganiayaan, perkara anak), perceraian dengan KDRT, dan sengketa waris yang tidak bisa diselesaikan secara mediasi.",
    features: [
      "Pendampingan P-21 (sidang pertama) hingga vonis",
      "Upaya hukum banding & kasasi",
      "Penyusunan dokumen jawaban gugatan",
      "Pendampingan sidang Restorative Justice",
    ],
    accent: "red",
  },
  {
    icon: "Handshake",
    title: "Non-Litigasi (Mediasi & Somasi)",
    short: "Penyelesaian damai di luar sidang",
    description:
      "Tidak semua perkara harus sampai ke sidang. Untuk sengketa tanah warisan, utang-piutang antar keluarga, atau kasus perdata sederhana, kita prioritaskan jalur mediasi di balai desa atau kantor Kecamatan. Hasilnya: putusan damai yang disepakati kedua pihak, jauh lebih cepat, dan tidak mengganggu tali silaturahmi. Untuk kasus penahanan upah atau penipuan, kita kirim somasi kilat terlebih dahulu sebelum gugatan formal.",
    features: [
      "Mediasi adat di balai desa",
      "Penyusunan akad perdamaian bermaterai",
      "Surat somasi resmi berkop BKH",
      "Pendampingan di KUA & Dinas Capil",
    ],
    accent: "gold",
  },
  {
    icon: "Users",
    title: "Penyuluhan Hukum Masyarakat",
    short: "Sosialisasi langsung ke desa",
    description:
      "Sebulan sekali tim BKH Kartini nyaba ke desa-desa untuk sosialisasi hukum. Materi yang biasa kita angkat: pencegahan KDRT, perlindungan anak dari kekerasan seksual, bahaya Pinjol ilegal, cara membuat SKTM, dan hak-hak buruh informal. Setiap penyuluhan dihadiri rata-rata 80-150 warga, dan dari sana biasanya muncul kasus-kasus baru yang segera kita dampingi.",
    features: [
      "Sosialisasi bulanan ke 45+ desa",
      "Bantuan pembuatan SKTM warga",
      "Pelatihan kader desa hukum",
      "Sosialisasi anti-Pinjol ilegal",
    ],
    accent: "red",
  },
] as const;

export const SKTM_STEPS = [
  {
    no: 1,
    title: "Siapkan KTP dan KK",
    description:
      "Pastikan KTP Anda masih berlaku dan Kartu Keluarga (KK) sesuai alamat domisili saat ini. Jika KTP hilang, kita bantu pembuatan pengantar dari RT/RW sebagai pengganti sementara untuk pengajuan awal.",
    documents: ["KTP Asli", "Kartu Keluarga (KK)"],
  },
  {
    no: 2,
    title: "Ambil & Isi Formulir Pengajuan SKTM",
    description:
      "Datang ke kantor Desa/Kelurahan tempat Anda tinggal, minta formulir Surat Keterangan Tidak Mampu. Isi data keluarga, pendapatan rata-rata, dan kepemilikan aset. Tidak perlu biaya — SKTM adalah hak warga miskin yang dijamin Peraturan Menteri Sosial.",
    documents: ["Formulir SKTM (gratis)", "Penghasilan rata-rata / surat keterangan kerja"],
  },
  {
    no: 3,
    title: "Verifikasi RT/RW & Lurah",
    description:
      "Setelah form diisi, ketua RT lalu RW menandatangani formulir tersebut. Selanjutnya Lurah/Kepala Desa memverifikasi melalui kunjungan langsung ke rumah untuk memastikan kondisi ekonomi Anda benar-benar kurang mampu. Proses ini biasa memakan 3-5 hari kerja.",
    documents: ["Tanda tangan RT", "Tanda tangan RW", "Verifikasi Lurah"],
  },
  {
    no: 4,
    title: "Datang ke Posbakum BKH Kartini",
    description:
      "Bawa SKTM yang sudah jadi, KTP, dan dokumen pendukung kasus Anda (surat panggilan polisi, akta nikah, buku nikah, dll). Tim advokad kita akan menjadwalkan konsultasi awal 1x24 jam dan menyusun strategi pendampingan sesuai jenis kasus.",
    documents: ["SKTM jadi", "Dokumen kasus (surat panggilan, akta, dll)"],
  },
] as const;

// Testimoni — Ibu Uyin Wulandari kini menjadi berita utama di section #berita,
// jadi tidak perlu muncul lagi di section testimoni untuk hindari duplikat.
// 31 testimoni total, rata-rata rating 4.8/5 (25×5⭐ + 6×4⭐ = 149, avg 4.806).
export const TESTIMONIALS = [
  // === 11 testimoni awal ===
  {
    initials: "AM",
    name: "Bapak AM",
    role: "Wali Anak Pemohon",
    location: "Ds. Wonocoyo, Kec. Panggul, Trenggalek",
    case: "Pendampingan Pidana (Perkara Anak)",
    year: "2024",
    rating: 5,
    color: "from-red-600 to-rose-800",
    quote:
      "Keluarga saya sangat terbantu dengan program bantuan hukum ini. Ada pendamping kompeten yang selalu menemani anak saya menghadapi persidangan, dan tidak pernah dipungut biaya apa pun. Setiap tahapan juga selalu diberi tahu, sehingga kami bisa mengikuti prosesnya dengan tenang.",
  },
  {
    initials: "IM",
    name: "Ibu M.",
    role: "Buruh Cuci",
    location: "Boyolangu, Trenggalek",
    case: "KDRT & Perceraian",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Kasus KDRT & perceraian gratis. Berhasil mendapatkan hak asuh anak tanpa biaya sepeser pun.",
  },
  {
    initials: "BT",
    name: "Bapak T.",
    role: "Petani Penggarap",
    location: "Kauman, Trenggalek",
    case: "Sengketa Tanah Waris",
    year: "2024",
    rating: 5,
    color: "from-amber-500 to-orange-600",
    quote:
      "Sengketa tanah waris kecil diselesaikan lewat jalur mediasi non-litigasi yang damai di balai desa.",
  },
  {
    initials: "IS",
    name: "Ibu S.",
    role: "Penjual Gorengan",
    location: "Ngunut, Trenggalek",
    case: "Restorative Justice Anak",
    year: "2025",
    rating: 5,
    color: "from-rose-500 to-pink-600",
    quote:
      "Anak saya mendapatkan Restorative Justice (Keadilan Restoratif) sehingga bisa kembali melanjutkan sekolah.",
  },
  {
    initials: "BR",
    name: "Bapak R.",
    role: "Kuli Bangunan",
    location: "Trenggalek Kota",
    case: "Penahanan Upah",
    year: "2024",
    rating: 5,
    color: "from-red-600 to-red-800",
    quote:
      "Upah kerja berbulan-bulan ditahan mandor, akhirnya cair setelah dibantu somasi kilat oleh BKH Kartini.",
  },
  {
    initials: "IW",
    name: "Ibu W.",
    role: "Pedagang Sayur",
    location: "Sumbergempol, Trenggalek",
    case: "Teror Pinjol Ilegal",
    year: "2025",
    rating: 5,
    color: "from-amber-600 to-yellow-700",
    quote:
      "Diteror dan diancam puluhan Pinjol Ilegal. Didampingi secara hukum hingga terornya berhenti total.",
  },
  {
    initials: "SA",
    name: "Saudara A.",
    role: "Yatim Piatu, Serabutan",
    location: "Rejotangan, Trenggalek",
    case: "Pembelaan Pidana",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Dituduh palsu sebagai penadah barang curian. Didampingi di sidang pengadilan hingga divonis bebas.",
  },
  {
    initials: "IN",
    name: "Ibu N.",
    role: "Mantan PMI",
    location: "Karangrejo, Trenggalek",
    case: "Penipuan Aset PMI",
    year: "2025",
    rating: 5,
    color: "from-rose-500 to-red-600",
    quote:
      "Uang hasil kerja di luar negeri ditipu oknum. Aset berhasil diselamatkan lewat gugatan perdata.",
  },
  {
    initials: "BK",
    name: "Bapak K.",
    role: "Pencari Rongsok",
    location: "Kedungwaru, Trenggalek",
    case: "Itsbat Nikah Massal",
    year: "2024",
    rating: 5,
    color: "from-amber-500 to-amber-700",
    quote:
      "Dibantu pengurusan Sidang Itsbat Nikah massal gratis demi mendapatkan akta kelahiran cucu.",
  },
  {
    initials: "ID",
    name: "Ibu D.",
    role: "Buruh Tani",
    location: "Pakel, Trenggalek",
    case: "Kekerasan Seksual Anak",
    year: "2026",
    rating: 5,
    color: "from-red-600 to-rose-700",
    quote:
      "Mengawal kasus kekerasan seksual yang menimpa anak saya dari Polres hingga pelaku dihukum maksimal.",
  },
  {
    initials: "BM",
    name: "Bapak M.",
    role: "Pengrajin Anyaman Difabel",
    location: "Gondang, Trenggalek",
    case: "Sengketa Batas Tanah",
    year: "2024",
    rating: 5,
    color: "from-amber-600 to-orange-700",
    quote:
      "Sengketa batas tanah yang menutup akses jalan rumah saya berhasil diselesaikan secara adil.",
  },
  // === 20 testimoni tambahan ===
  {
    initials: "IY",
    name: "Ibu Y.",
    role: "Penjahit",
    location: "Campurdarat, Trenggalek",
    case: "Sengketa Warisan",
    year: "2024",
    rating: 5,
    color: "from-rose-500 to-pink-700",
    quote:
      "Sengketa waris dengan keluarga diselesaikan lewat mediasi BKH Kartini. Tidak sampai sidang, semua pihak sepakat damai.",
  },
  {
    initials: "BS",
    name: "Bapak S.",
    role: "Sopir Angkot",
    location: "Durenan, Trenggalek",
    case: "Kecelakaan Lalu Lintas",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Tabrakan dengan mobil pribadi, dituntut ganti rugi puluhan juta. Didampingi hingga perkara diselesaikan adil.",
  },
  {
    initials: "IR",
    name: "Ibu R.",
    role: "Penjual Jajan",
    location: "Tugu, Trenggalek",
    case: "Penipuan Online",
    year: "2025",
    rating: 4,
    color: "from-amber-500 to-orange-600",
    quote:
      "Tertipu belanja online Rp 3 juta. Diadvokasi melapor ke Polres, pelaku akhirnya ditangkap dan uang dikembalikan.",
  },
  {
    initials: "BD",
    name: "Bapak D.",
    role: "Tukang Kayu",
    location: "Pogalan, Trenggalek",
    case: "PHK Setoran",
    year: "2024",
    rating: 5,
    color: "from-red-600 to-red-800",
    quote:
      "Di-PHK sepihak tanpa pesangon. BKH bantu gugatan ke PHI, uang pesangon akhirnya cair sesuai UU.",
  },
  {
    initials: "IT",
    name: "Ibu T.",
    role: "Buruh Pabrik",
    location: "Panggul, Trenggalek",
    case: "KDRT",
    year: "2025",
    rating: 4,
    color: "from-rose-500 to-red-700",
    quote:
      "Sering dipukuli suami. Diadvokasi buat pengaduan dan permohonan perlindungan dari P2TP2SL Trenggalek.",
  },
  {
    initials: "BH",
    name: "Bapak H.",
    role: "Pengusaha Kecil",
    location: "Watulimo, Trenggalek",
    case: "Sengketa Kontrak",
    year: "2024",
    rating: 5,
    color: "from-amber-500 to-yellow-700",
    quote:
      "Kontraktor kabur sebelum proyek selesai. Somasi BKH cepat, uang muka dikembalikan penuh.",
  },
  {
    initials: "IA",
    name: "Ibu A.",
    role: "Pendidik",
    location: "Trenggalek Kota, Trenggalek",
    case: "Pemalsuan Dokumen",
    year: "2025",
    rating: 5,
    color: "from-red-500 to-rose-600",
    quote:
      "Ijazah dipalsukan orang lain untuk lamaran kerja. Diadvokasi melapor, pelaku diproses pidana.",
  },
  {
    initials: "BW",
    name: "Bapak W.",
    role: "Petani Sawi",
    location: "Campurdarat, Trenggalek",
    case: "Sengketa Tapal Batas",
    year: "2024",
    rating: 5,
    color: "from-amber-600 to-orange-700",
    quote:
      "Batas tanah dipindahkan tetangga seenaknya. Dibantu survei & gugatan, batas asli dikembalikan.",
  },
  {
    initials: "IE",
    name: "Ibu E.",
    role: "Asisten RT",
    location: "Durenan, Trenggalek",
    case: "Pengabaian Nafkah",
    year: "2024",
    rating: 4,
    color: "from-rose-500 to-pink-700",
    quote:
      "Suami ninggalkan tanpa nafkah 2 tahun. Gugatan nafkah dilayakkan BKH, putusan pengadilan menguntungkan saya.",
  },
  {
    initials: "BB",
    name: "Bapak B.",
    role: "Penambang Pasir",
    location: "Rejotangan, Trenggalek",
    case: "Klaim BPJS",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Klaim BPJS Kecelakaan Kerja ditolak. Diadvokasi banding, akhirnya cair sesuai hak penuh.",
  },
  {
    initials: "IL",
    name: "Ibu L.",
    role: "Pedagang Kaki Lima",
    location: "Sumbergempol, Trenggalek",
    case: "Penertiban Paksa",
    year: "2025",
    rating: 4,
    color: "from-amber-500 to-orange-600",
    quote:
      "Kios diratakan Satpol PP tanpa kompensasi. Diadvokasi mengajukan ganti rugi ke Pemkab Trenggalek.",
  },
  {
    initials: "SN",
    name: "Saudara N.",
    role: "Mahasiswa",
    location: "Karangrejo, Trenggalek",
    case: "Pemalsuan Identitas",
    year: "2025",
    rating: 5,
    color: "from-red-600 to-rose-800",
    quote:
      "KTP saya dipalsukan untuk Pinjol. Diadvokasi lapor Bareskrim Cyber, pelaku ditangkap.",
  },
  {
    initials: "BP",
    name: "Bapak P.",
    role: "Sopir Ojek",
    location: "Kedungwaru, Trenggalek",
    case: "Kecelakaan & Asuransi",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Tabrakan & asuransi menolak klaim. Didampingi banding, klaim akhirnya dibayar penuh sesuai polis.",
  },
  {
    initials: "IV",
    name: "Ibu V.",
    role: "Guru Binaan",
    location: "Pakel, Trenggalek",
    case: "Kekerasan di Sekolah",
    year: "2026",
    rating: 5,
    color: "from-red-600 to-rose-700",
    quote:
      "Anak saya korban kekerasan guru. Diadvokasi melapor ke Dinas Pendidikan & Polda, pelaku diberhentikan.",
  },
  {
    initials: "BJ",
    name: "Bapak J.",
    role: "Pengrajin Batu",
    location: "Gondang, Trenggalek",
    case: "Penipuan Pemesanan",
    year: "2024",
    rating: 4,
    color: "from-amber-600 to-yellow-700",
    quote:
      "Pesanan gelondongan dibayar DP, lalu pembeli kabur. Somasi BKH, semua tagihan lunas dalam seminggu.",
  },
  {
    initials: "IK",
    name: "Ibu K.",
    role: "Penjual Jamu",
    location: "Trenggalek Kota, Trenggalek",
    case: "Sengketa Warisan",
    year: "2024",
    rating: 5,
    color: "from-rose-500 to-pink-600",
    quote:
      "Warisan tanah ibu saya dijual Saudara tanpa persetujuan. Gugatan dibantu BKH, jual batal.",
  },
  {
    initials: "BG",
    name: "Bapak G.",
    role: "Peternak Ayam",
    location: "Pogalan, Trenggalek",
    case: "Penipuan Bibit",
    year: "2025",
    rating: 5,
    color: "from-amber-500 to-orange-700",
    quote:
      "Bibit ayam tidak sesuai janji, ratusan ekor mati. Diadvokasi somasi, diganti rugi penuh.",
  },
  {
    initials: "IO",
    name: "Ibu O.",
    role: "Pengasuh Anak",
    location: "Durenan, Trenggalek",
    case: "Pengabaian Anak",
    year: "2025",
    rating: 4,
    color: "from-rose-500 to-pink-700",
    quote:
      "Mantan suami tidak mau bayar nafkah anak. Gugatan dieksekusi lewat sita gaji, uang rutin cair.",
  },
  {
    initials: "BF",
    name: "Bapak F.",
    role: "Tukang Batu",
    location: "Tugu, Trenggalek",
    case: "Upah Tidak Dibayar",
    year: "2024",
    rating: 5,
    color: "from-red-500 to-rose-700",
    quote:
      "Borongan bangun rumah, upah ditahan 6 bulan. Somasi BKH 1 minggu, uang cair penuh.",
  },
  {
    initials: "IC",
    name: "Ibu C.",
    role: "Pedagang Kelontong",
    location: "Campurdarat, Trenggalek",
    case: "Pemerasan Paksa",
    year: "2024",
    rating: 5,
    color: "from-red-600 to-rose-800",
    quote:
      "Diperas preman tiap minggu. Diadvokasi lapor Polres, pelaku ditangkap & dijatuhi pidana.",
  },
] as const;

// Galeri foto kegiatan aktual BKH Kartini (11 foto)
export const GALLERY = [
  {
    src: "/uploads/bkh-01.jpeg",
    alt: "Dokumentasi kegiatan BKH Kartini di lapangan",
    caption: "Posko Hukum Keliling",
    description:
      "Tim BKH Kartini menyelenggarakan posko hukum keliling ke desa-desa terpencil di Trenggalek. Warga dapat langsung konsultasi soal kasus pertanahan, KDRT, pinjaman online ilegal, dan masalah administrasi kependudukan tanpa harus datang ke kota.",
    span: "",
  },
  {
    src: "/uploads/bkh-02.jpeg",
    alt: "Pendampingan warga oleh advokad BKH Kartini",
    caption: "Pendampingan Warga",
    description:
      "Para advokad muda BKH Kartini mendampingi warga kurang mampu yang menghadapi kasus hukum. Setiap pendampingan benar-benar gratis — biaya pendaftaran, materai, dan transport ditanggung penuh oleh lembaga.",
    span: "",
  },
  {
    src: "/uploads/bkh-03.jpeg",
    alt: "Konsultasi hukum massal warga",
    caption: "Konsultasi Hukum Massal",
    description:
      "Konsultasi hukum massal digelar di balai desa dengan dihadiri puluhan warga. Materi disampaikan dalam bahasa Jawa kromo agar lebih mudah dipahami oleh warga lanjut usia yang menjadi mayoritas peserta.",
    span: "",
  },
  {
    src: "/uploads/bkh-04.jpeg",
    alt: "Foto bersama tim dan warga binaan BKH Kartini",
    caption: "Tim & Warga Binaan",
    description:
      "Dokumentasi tim BKH Kartini bersama warga binaan yang sudah selesai didampingi. Bagi kami, setiap warga yang ditolong adalah keluarga — bukan sekadar nomor kasus. Tali silaturahmi terus dijaga bahkan setelah kasus selesai.",
    span: "row-span-2",
  },
  {
    src: "/uploads/bkh-05.jpeg",
    alt: "Sosialisasi anti Pinjol ilegal di pedesaan",
    caption: "Sosialisasi Anti Pinjol",
    description:
      "Sosialisasi bahaya Pinjol ilegal digelar di desa-desa pesisir Trenggalek. Warga diajarkan cara melapor ke OJK dan Bareskrim Polri jika mengalami teror, peretasan data pribadi, atau penagihan di luar batas hukum.",
    span: "row-span-2",
  },
  {
    src: "/uploads/bkh-06.jpeg",
    alt: "Penyuluhan perlindungan anak",
    caption: "Penyuluhan Perlindungan Anak",
    description:
      "Materi perlindungan anak dari kekerasan seksual disampaikan kepada orang tua dan guru di balai desa. Materi dilengkapi simulasi cara melaporkan, mengumpulkan bukti, dan mendampingi anak korban di proses hukum.",
    span: "",
  },
  {
    src: "/uploads/bkh-07.jpeg",
    alt: "Aksi nyata pendampingan hukum",
    caption: "Aksi Nyata Pendampingan",
    description:
      "Aksi nyata tim BKH Kartini dalam mendampingi warga. Kami tidak hanya bicara di kantor, tapi benar-benar turun ke lapangan, mendengar langsung keluhan warga, dan menyusun strategi pendampingan sesuai kebutuhan.",
    span: "",
  },
  {
    src: "/uploads/bkh-08.jpeg",
    alt: "Kegiatan besar BKH Kartini di lapangan terbuka",
    caption: "Aksi Besar BKH Kartini",
    description:
      "Kegiatan besar BKH Kartini menghadirkan ratusan warga dari berbagai desa di Trenggalek. Acara ini memadukan penyuluhan hukum, layanan pembuatan SKTM gratis, dan konsultasi kilat dengan para advokat muda.",
    span: "row-span-2",
  },
  {
    src: "/uploads/bkh-09.jpeg",
    alt: "Pemberian bantuan administrasi hukum",
    caption: "Bantuan Administrasi Hukum",
    description:
      "Tim BKH Kartini membantu warga mengurus dokumen administrasi hukum — mulai dari pembuatan akta kelahiran, kartu identitas, hingga pengantar untuk sidang itsbat nikah massal di Pengadilan Agama setempat.",
    span: "",
  },
  {
    src: "/uploads/bkh-10.jpeg",
    alt: "Pendampingan korban kekerasan",
    caption: "Pendampingan Korban",
    description:
      "Korban kekerasan dan pencurian hak didampingi penuh dari proses pelaporan hingga sidang. Kami percaya setiap warga, sekecil apa pun status sosialnya, berhak atas pembelaan hukum yang setara dengan yang mampu.",
    span: "",
  },
  {
    src: "/uploads/bkh-11.jpeg",
    alt: "Konsultasi hukum pro bono terbuka",
    caption: "Jendela Pro Bono",
    description:
      "Setiap minggu, BKH Kartini membuka posko konsultasi hukum pro bono di kantor pusat maupun di balai desa. Siapa pun yang masuk — tanpa dipungut biaya — akan diberi waktu untuk menceritakan kasusnya secara rinci dan tenang.",
    span: "",
  },
] as const;

export const CASE_CATEGORIES = [
  "Pidana (Pencurian, Penganiayaan, Narkoba)",
  "Perdata (Utang-Piutang, Warisan)",
  "KDRT (Kekerasan Dalam Rumah Tangga)",
  "Pertanahan (Sengketa Batas, Waris Tanah)",
  "Perlindungan Anak (Kekerasan Seksual, Restorative Justice)",
  "Buruh/Upah (Penahanan Upah, PH Setoran)",
  "Pinjol Ilegal (Pendampingan & Pengaduan)",
  "Lainnya (silakan dijelaskan)",
] as const;

export const OPERATING_HOURS = [
  { day: "Senin", time: "08:00 – 16:00 WIB" },
  { day: "Selasa", time: "08:00 – 16:00 WIB" },
  { day: "Rabu", time: "08:00 – 16:00 WIB" },
  { day: "Kamis", time: "08:00 – 16:00 WIB" },
  { day: "Jumat", time: "08:00 – 11:30 WIB" },
  { day: "Sabtu", time: "Konsultasi via WhatsApp" },
  { day: "Minggu / Libur", time: "Tutup (kecuali kasus darurat)" },
] as const;

export const ADDRESS_LINES = [
  "Posbakum BKH Kartini — Lantai 1, Gedung Pengadilan Negeri Trenggalek",
  "Jl. Diponegoro No. 11, Kelurahan Sudimoro",
  "Kecamatan Trenggalek, Kabupaten Trenggalek",
  "Jawa Timur 66312",
];

export const CONTACTS = {
  phone: WHATSAPP_DISPLAY,
  email: "posbakum@bkhkartini.or.id",
  whatsapp: WHATSAPP_LINK,
};

// === Berita Utama / Kisah Klien ===
// Array berisi artikel kisah klien BKH Kartini.
export const BERITA_LIST = [
  {
    year: "2024",
    date: "15 Oktober 2024",
    image: "/uploads/testimoni-uyin.jpeg",
    imageAlt:
      "Ibu Uyin Wulandari, klien BKH Kartini asal Ds. Ngembel, Kec. Watulimo, Kabupaten Trenggalek",
    category: "Kisah Klien",
    dateline: "WATULIMO, TRENGGALEK",
    headline:
      "Warga Pesisir Trenggalek: \"Saya Tidak Pernah Nyangka Ada Lembaga yang Benar-benar Gratis\"",
    lead:
      "Ibu Uyin Wulandari, warga Desa Ngembel, Kecamatan Watulimo, baru saja menyelesaikan perkara hukumnya bersama BKH Kartini. Dari konsultasi awal sampai kasus selesai, tidak ada satu pun biaya yang diminta — bahkan ongkos transport tim advokad pun ditanggung sendiri.",
    body: [
      "Selama bertahun-tahun, Ibu Uyin — seperti kebanyakan warga pesisir Trenggalek — menganggap lembaga bantuan hukum selalu identik dengan biaya tersembunyi. Pengalaman bersama BKH Kartini mengubah persepsinya sama sekali. Dari konsultasi awal sampai seluruh proses hukum selesai, ia tidak dimintai sepeser pun.",
      "Yang membuatnya paling terkesan, kata Ibu Uyin, bukan hanya pendampingan gratis, tetapi juga komitmen tim advokad yang rela mengeluarkan ongkos transport sendiri untuk datang ke Watulimo — kecamatan pesisir yang berjarak sekitar satu jam perjalanan dari kota Trenggalek.",
      "\"Bahkan ongkos transport tim ke Watulimo pun ditanggung sendiri,\" ujarnya. \"Selamanya saya berutang budi pada advokat-advokat muda ini.\"",
      "BKH Kartini memang sejak awal didirikan atas semangat pro bono publik — melayani fakir miskin, perempuan, dan anak di seluruh kecamatan Trenggalek. Tidak ada biaya pendaftaran, biaya pengganti, atau upeti. Bahkan biaya pengadilan dan materai resmi ditanggung penuh oleh lembaga.",
      "Kisah Ibu Uyin hanyalah satu dari 100+ kasus yang sudah didampingi BKH Kartini sejak berdirinya tahun 2016. Tim advokad muda ini terus melayani warga dari Panggul, Watulimo, Tugu, Campurdarat, sampai Pogalan dan Durenan — tanpa membedakan latar belakang sosial, gender, atau agama.",
    ],
    pullQuote: {
      text: "Saya tidak pernah nyangka ada lembaga yang benar-benar gratis membantu warga kecil seperti saya. Dari awal konsultasi sampai masalah hukum saya selesai, BKH Kartini tidak meminta sepeser pun. Bahkan ongkos transport tim ke Watulimo pun ditanggung sendiri. Selamanya saya berutang budi pada advokat-adadvokat muda ini.",
      attribution:
        "Ibu Uyin Wulandari — Warga Pesisir Trenggalek, Ds. Ngembel, Kec. Watulimo, Trenggalek",
    },
    source: "Kisah Klien BKH Kartini · Watulimo, Kabupaten Trenggalek · 2024",
  },
  {
    year: "2024",
    date: "18 Mei 2024",
    image: "/uploads/berita-neni-kartika.jpg",
    imageAlt:
      "Neni Kartika Wati, klien BKH Kartini asal Ds. Wonorejo RT 14/RW 4, Kec. Gandusari, Kabupaten Trenggalek",
    category: "Kisah Klien",
    dateline: "GANDUSARI, TRENGGALEK",
    headline:
      "Konsultasi Hukum untuk Perempuan: Ibu Neni Kartika Wati dari Gandusari Temui BKH Kartini",
    lead:
      "Neni Kartika Wati, warga Ds. Wonorejo RT 14/RW 4, Kecamatan Gandusari, Kabupaten Trenggalek, datang ke Posbakum BKH Kartini untuk konsultasi terkait kasus yang menimpa dirinya sebagai perempuan. Ia mendapatkan pendampingan profesional tanpa biaya apa pun.",
    body: [
      "Neni Kartika Wati adalah salah satu klien perempuan BKH Kartini tahun 2024. Ia datang ke posko bantuan hukum untuk berkonsultasi terkait kasus yang berhubungan dengan dirinya sebagai perempuan — kasus yang sering kali membuat korban ragu mencari pendampingan karena beban sosial dan emosional yang berat.",
      "Dalam konsultasi awal, tim advokad BKH Kartini mendengarkan kasus Ibu Neni secara rinci dan empati. Tidak ada judgment, tidak ada raut cemooh — yang ada hanya pendampingan profesional yang menjelaskan opsi hukum yang tersedia, mulai dari jalur mediasi non-litigasi sampai pendampingan persidangan jika diperlukan.",
      "BKH Kartini memang sejak awal menempatkan perempuan sebagai kelompok prioritas. Kasus KDRT, kekerasan seksual, perceraian dengan hak asuh anak, sampai penipuan terhadap PMI perempuan — semua didampingi oleh tim advokad yang memahami trauma dan kebutuhan ruang aman bagi korban.",
      "\"Saya cuma ingin tahu hak saya sebagai perempuan,\" kata Ibu Neni. \"Setelah bicara dengan tim BKH Kartini, saya jadi paham langkah-langkah apa yang harus diambil tanpa rasa takut. Pendampingan ini gratis — tidak dipungut biaya sepeser pun.\"",
      "Setelah konsultasi, Ibu Neni merasa lebih tenang menghadapi proses hukum yang sedang berjalan. Untuk konsultasi awal, warga Trenggalek dapat langsung datang ke Posbakum BKH Kartini di Lantai 1, Gedung Pengadilan Negeri Trenggalek, atau menghubungi WhatsApp 081331922614.",
    ],
    pullQuote: {
      text: "Saya cuma ingin tahu hak saya sebagai perempuan. Setelah bicara dengan tim BKH Kartini, saya jadi paham langkah-langkah apa yang harus diambil tanpa rasa takut. Pendampingan ini gratis — tidak dipungut biaya sepeser pun.",
      attribution:
        "Neni Kartika Wati — Warga Ds. Wonorejo RT 14/RW 4, Kec. Gandusari, Kabupaten Trenggalek",
    },
    source: "Kisah Klien BKH Kartini · Gandusari, Kabupaten Trenggalek · 2024",
  },
] as const;
