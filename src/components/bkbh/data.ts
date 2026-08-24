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
    target: 76,
    suffix: "",
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

// Testimoni — Ibu Uyin Wulandari sebagai klien utama (foto asli disertakan)
export const FEATURED_TESTIMONIAL = {
  initials: "UW",
  name: "Ibu Uyin Wulandari",
  role: "Warga Pesisir Trenggalek",
  location: "Ds. Ngembel, Kec. Watulimo, Trenggalek",
  case: "Bantuan Hukum Gratis",
  photo: "/uploads/testimoni-uyin.jpeg",
  color: "from-red-500 to-rose-700",
  quote:
    "Saya tidak pernah nyangka ada lembaga yang benar-benar gratis membantu warga kecil seperti saya. Dari awal konsultasi sampai masalah hukum saya selesai, BKH Kartini tidak meminta sepeser pun. Bahkan ongkos transport tim ke Watulimo pun ditanggung sendiri. Selamanya saya berutang budi pada advokat-adadvokat muda ini.",
};

export const TESTIMONIALS = [
  // Testimoni #1 — AM (paling atas, sumber: berita pers Pemkab Trenggalek)
  {
    initials: "AM",
    name: "Bapak AM",
    role: "Wali Anak Pemohon",
    location: "Ds. Wonocoyo, Kec. Panggul, Trenggalek",
    case: "Pendampingan Pidana (Perkara Anak)",
    color: "from-red-600 to-rose-800",
    quote:
      "Keluarga saya sangat terbantu dengan program bantuan hukum ini. Ada pendamping kompeten yang selalu menemani anak saya menghadapi persidangan, dan tidak pernah dipungut biaya apa pun. Setiap tahapan juga selalu diberi tahu, sehingga kami bisa mengikuti prosesnya dengan tenang.",
  },
  // Testimoni #2 — Uyin Wulandari (foto asli, klien utama BKH Kartini)
  {
    initials: "UW",
    name: "Ibu Uyin Wulandari",
    role: "Warga Pesisir Trenggalek",
    location: "Ds. Ngembel, Kec. Watulimo, Trenggalek",
    case: "Bantuan Hukum Gratis",
    photo: "/uploads/testimoni-uyin.jpeg",
    color: "from-red-500 to-rose-700",
    quote:
      "Saya tidak pernah nyangka ada lembaga yang benar-benar gratis membantu warga kecil seperti saya. Dari awal konsultasi sampai masalah hukum saya selesai, BKH Kartini tidak meminta sepeser pun. Selamanya saya berutang budi.",
    isFeatured: true,
  },
  {
    initials: "IM",
    name: "Ibu M.",
    role: "Buruh Cuci",
    location: "Boyolangu, Trenggalek",
    case: "KDRT & Perceraian",
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
    color: "from-amber-600 to-orange-700",
    quote:
      "Sengketa batas tanah yang menutup akses jalan rumah saya berhasil diselesaikan secara adil.",
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
  "Posbakum BKH Kartini",
  "Jl. R.A. Kartini No. 14, Kelurahan Sudimoro",
  "Kecamatan Trenggalek, Kabupaten Trenggalek",
  "Jawa Timur 66312",
];

export const CONTACTS = {
  phone: WHATSAPP_DISPLAY,
  email: "posbakum@bkhkartini.or.id",
  whatsapp: WHATSAPP_LINK,
};

// === Berita Pers / Kliping Media ===
// Sumber: Pemerintah Kabupaten Trenggalek, terkait Perda No. 5 Tahun 2015
export const BERITA_PERS = {
  image: "/uploads/berita-am-trenggalek.jpg",
  imageAlt:
    "Kliping berita Pemkab Trenggalek — testimoni AM warga Desa Wonocoyo tentang program bantuan hukum",
  category: "Kabar Pers",
  dateline: "TRENGGALEK",
  headline:
    "Mengawal Program Bantuan Hukum untuk Masyarakat Miskin Sampai ke Penerima Manfaat",
  lead:
    "Komitmen Pemerintah Kabupaten Trenggalek untuk memberikan bantuan hukum kepada masyarakat miskin berdasarkan Peraturan Daerah Kabupaten Trenggalek Nomor 5 Tahun 2015 tentang Penyelenggaraan Bantuan Hukum untuk Masyarakat Miskin, terus dilakukan.",
  body: [
    "Kolaborasi antara Pemerintah Kabupaten Trenggalek dengan lembaga bantuan hukum diharapkan dapat memperkuat sistem pelayanan hukum sekaligus memberikan kepastian kepada masyarakat mengenai ke mana mereka harus mencari bantuan ketika menghadapi persoalan hukum.",
    "Bantuan hukum tidak semata-mata dimaknai sebagai pendampingan terhadap masyarakat yang sedang menjalani proses hukum. Lebih dari itu, bantuan hukum juga memiliki fungsi edukatif dalam membangun kesadaran masyarakat mengenai hak dan kewajibannya.",
    "Masyarakat yang memahami hukum akan lebih mampu melindungi dirinya dari berbagai tindakan yang merugikan, memahami pilihan penyelesaian masalah, serta mengambil keputusan yang tepat ketika menghadapi persoalan hukum.",
    "Manfaat program bantuan hukum untuk masyarakat miskin ini salah satunya juga dirasakan oleh AM, warga Desa Wonocoyo Kecamatan Panggul. Saat ini anaknya sedang menghadapi perkara hukum pidana dan dibantu oleh Organisasi Bantuan Hukum yang ditunjuk oleh Pemerintah Kabupaten Trenggalek.",
    "Pada saat Tim Penyelenggaraan Bantuan Hukum untuk Masyarakat Miskin datang ke rumahnya, Sdr. AM menyampaikan bahwa keluarganya sangat terbantu dengan adanya program ini karena ada pendamping yang kompeten yang selalu mendampingi anaknya dalam menghadapi permasalahan hukum tersebut. AM juga menyampaikan bahwa selama proses pendampingan hukum, tidak pernah dipungut biaya apa pun; selain itu pada setiap tahapan juga selalu diberi tahu oleh Organisasi Bantuan Hukum sehingga seluruh tahapan persidangan dan tahapan dapat diikuti dengan optimal.",
    "AM menyampaikan terima kasih kepada Pemerintah Kabupaten Trenggalek karena memiliki program bantuan hukum ini. Karena di tengah kebingungan saat menghadapi permasalahan hukum ada yang membantu untuk memberikan arahan serta mendampingi selama proses persidangan.",
    "AM berharap program ini dapat terus berjalan sehingga banyak orang yang kondisi ekonominya seperti dirinya mendapatkan layanan serupa.",
  ],
  source:
    "Pemerintah Kabupaten Trenggalek · Perda No. 5 Tahun 2015 tentang Penyelenggaraan Bantuan Hukum untuk Masyarakat Miskin",
} as const;
