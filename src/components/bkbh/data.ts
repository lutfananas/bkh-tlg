// Data terpusat untuk seluruh konten BKBH Kartini Tulungagung
// Semua teks ditulis dalam Bahasa Indonesia yang autentik.

export const WHATSAPP_NUMBER = "6281331922614"; // format internasional tanpa +
export const WHATSAPP_DISPLAY = "0813-3192-2614";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20BKBH%20Kartini%2C%20saya%20ingin%20minta%20bantuan%20hukum.`;

export const NAV_MENU = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Syarat SKTM", href: "#syarat" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
] as const;

export const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1589829545856-d859f8c2b6d5?auto=format&fit=crop&w=1920&q=80",
    alt: "Pendampingan hukum warga di balai desa Tulungagung",
    caption: "Pendampingan Warga di Balai Desa",
  },
  {
    src: "https://images.unsplash.com/photo-1577412646228-1c8f3f0a8b7c?auto=format&fit=crop&w=1920&q=80",
    alt: "Sidang pengadilan dengan advokad pro bono",
    caption: "Pendampingan Sidang Pengadilan",
  },
  {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80",
    alt: "Penyuluhan hukum massal di pedesaan",
    caption: "Penyuluhan Hukum Massal",
  },
  {
    src: "https://images.unsplash.com/photo-1505664334360-0c1b8d7c3c5b?auto=format&fit=crop&w=1920&q=80",
    alt: "Konsultasi hukum warga kurang mampu",
    caption: "Konsultasi Hukum Warga",
  },
] as const;

export const STATS = [
  {
    target: 1200,
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
      "Tim advokad kita nyaba ke desa-desa di Tulungagung: Boyolangu, Kauman, Ngunut, Sumbergempol, sampai Rejotangan dan Gondang.",
  },
  {
    target: 100,
    suffix: "%",
    label: "Gratis Tanpa Pungutan",
    description:
      "Tidak ada biaya pendaftaran, biaya pengganti, atau upeti. Biaya pengadilan & materai ditanggung penuh oleh BKBH Kartini.",
  },
] as const;

export const SERVICES = [
  {
    icon: "Gavel",
    title: "Litigasi (Persidangan)",
    short: "Pendampingan hukum di pengadilan",
    description:
      "Tim advokad kita dampingi tersangka/terguga, penggugat maupun tergugat di seluruh tahapan persidangan — mulai sidang pertama, pembacaan dakwaan, bebarian saksi, sampai vonis & upaya hukum. Kasus yang biasa kita tangani: pidana umum (pencurian ringan, penganiayaan, perkara anak), perceraian dengan KDRT, dan sengketa waris yang tidak bisa diselesaikan secara mediasi.",
    features: [
      "Pendampingan P-21 (sidang pertama) hingga vonis",
      "Upaya hukum banding & kasasi",
      "Penyusunan dokumen jawaban gugatan",
      "Pendampingan sidang Restorative Justice",
    ],
    accent: "emerald",
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
      "Surat somasi resmi berkop BKBH",
      "Pendampingan di KUA & Dinas Capil",
    ],
    accent: "amber",
  },
  {
    icon: "Users",
    title: "Penyuluhan Hukum Masyarakat",
    short: "Sosialisasi langsung ke desa",
    description:
      "Sebulan sekali tim BKBH Kartini nyaba ke desa-desa untuk sosialisasi hukum. Materi yang biasa kita angkat: pencegahan KDRT, perlindungan anak dari kekerasan seksual, bahaya Pinjol ilegal, cara membuat SKTM, dan hak-hak buruh informal. Setiap penyuluhan dihadiri rata-rata 80-150 warga, dan dari sana biasanya muncul kasus-kasus baru yang segera kita dampingi.",
    features: [
      "Sosialisasi bulanan ke 45+ desa",
      "Bantuan pembuatan SKTM warga",
      "Pelatihan kader desa hukum",
      "Sosialisasi anti-Pinjol ilegal",
    ],
    accent: "emerald",
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
    title: "Datang ke Posbakum BKBH Kartini",
    description:
      "Bawa SKTM yang sudah jadi, KTP, dan dokumen pendukung kasus Anda (surat panggilan polisi, akta nikah, buku nikah, dll). Tim advokad kita akan menjadwalkan konsultasi awal 1x24 jam dan menyusun strategi pendampingan sesuai jenis kasus.",
    documents: ["SKTM jadi", "Dokumen kasus (surat panggilan, akta, dll)"],
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "IM",
    name: "Ibu M.",
    role: "Buruh Cuci",
    location: "Boyolangu, Tulungagung",
    case: "KDRT & Perceraian",
    color: "from-emerald-500 to-teal-600",
    quote:
      "Kasus KDRT & perceraian gratis. Berhasil mendapatkan hak asuh anak tanpa biaya sepeser pun.",
  },
  {
    initials: "BT",
    name: "Bapak T.",
    role: "Petani Penggarap",
    location: "Kauman, Tulungagung",
    case: "Sengketa Tanah Waris",
    color: "from-amber-500 to-orange-600",
    quote:
      "Sengketa tanah waris kecil diselesaikan lewat jalur mediasi non-litigasi yang damai di balai desa.",
  },
  {
    initials: "IS",
    name: "Ibu S.",
    role: "Penjual Gorengan",
    location: "Ngunut, Tulungagung",
    case: "Restorative Justice Anak",
    color: "from-rose-500 to-pink-600",
    quote:
      "Anak saya mendapatkan Restorative Justice (Keadilan Restoratif) sehingga bisa kembali melanjutkan sekolah.",
  },
  {
    initials: "BR",
    name: "Bapak R.",
    role: "Kuli Bangunan",
    location: "Tulungagung Kota",
    case: "Penahanan Upah",
    color: "from-emerald-600 to-green-700",
    quote:
      "Upah kerja berbulan-bulan ditahan mandor, akhirnya cair setelah dibantu somasi kilat oleh BKBH Kartini.",
  },
  {
    initials: "IW",
    name: "Ibu W.",
    role: "Pedagang Sayur",
    location: "Sumbergempol, Tulungagung",
    case: "Teror Pinjol Ilegal",
    color: "from-amber-600 to-yellow-700",
    quote:
      "Diteror dan diancam puluhan Pinjol Ilegal. Didampingi secara hukum hingga terornya berhenti total.",
  },
  {
    initials: "SA",
    name: "Saudara A.",
    role: "Yatim Piatu, Serabutan",
    location: "Rejotangan, Tulungagung",
    case: "Pembelaan Pidana",
    color: "from-emerald-500 to-cyan-600",
    quote:
      "Dituduh palsu sebagai penadah barang curian. Didampingi di sidang pengadilan hingga divonis bebas.",
  },
  {
    initials: "IN",
    name: "Ibu N.",
    role: "Mantan PMI",
    location: "Karangrejo, Tulungagung",
    case: "Penipuan Aset PMI",
    color: "from-rose-500 to-red-600",
    quote:
      "Uang hasil kerja di luar negeri ditipu oknum. Aset berhasil diselamatkan lewat gugatan perdata.",
  },
  {
    initials: "BK",
    name: "Bapak K.",
    role: "Pencari Rongsok",
    location: "Kedungwaru, Tulungagung",
    case: "Itsbat Nikah Massal",
    color: "from-amber-500 to-amber-700",
    quote:
      "Dibantu pengurusan Sidang Itsbat Nikah massal gratis demi mendapatkan akta kelahiran cucu.",
  },
  {
    initials: "ID",
    name: "Ibu D.",
    role: "Buruh Tani",
    location: "Pakel, Tulungagung",
    case: "Kekerasan Seksual Anak",
    color: "from-emerald-600 to-teal-700",
    quote:
      "Mengawal kasus kekerasan seksual yang menimpa anak saya dari Polres hingga pelaku dihukum maksimal.",
  },
  {
    initials: "BM",
    name: "Bapak M.",
    role: "Pengrajin Anyaman Difabel",
    location: "Gondang, Tulungagung",
    case: "Sengketa Batas Tanah",
    color: "from-amber-600 to-orange-700",
    quote:
      "Sengketa batas tanah yang menutup akses jalan rumah saya berhasil diselesaikan secara adil.",
  },
] as const;

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1589829545856-d859f8c2b6d5?auto=format&fit=crop&w=900&q=80",
    alt: "Konsultasi hukum warga di balai desa",
    caption: "Konsultasi Hukum Desa",
    description:
      "Tim BKBH Kartini rutin menyelenggarakan posko keliling di balai desa-desa Tulungagung. Setiap posko dihadiri rata-rata 80-150 warga yang konsultasi langsung soal kasus pertanahan, KDRT, dan pinjaman online ilegal.",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1577412646228-1c8f3f0a8b7c?auto=format&fit=crop&w=900&q=80",
    alt: "Sidang pengadilan dengan advokad pro bono",
    caption: "Pendampingan di Persidangan",
    description:
      "Pendampingan hukum untuk tersangka pidana ringan di PN Tulungagung. BKBH Kartini menangani kasus pencurian ringan, penganiayaan, dan kasus anak dengan prinsip Restorative Justice sebisa mungkin.",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    alt: "Penyuluhan hukum massal di pedesaan",
    caption: "Penyuluhan Anti Pinjol",
    description:
      "Sosialisasi bahaya Pinjol ilegal di Kecamatan Sumbergempol. Materi disampaikan dengan bahasa Jawa kromo agar mudah dipahami warga lanjut usia. Hasilnya, kasus teror dan peretasan data pribadi turun drastis di wilayah tersebut.",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1505664334360-0c1b8d7c3c5b?auto=format&fit=crop&w=900&q=80",
    alt: "Konsultasi ibu korban KDRT",
    caption: "Pendampingan Korban KDRT",
    description:
      "Ibu-ibu korban KDRT diberi ruang aman untuk curhat dan melaporkan kasusnya. Tim advokad perempuan BKBH Kartini menangani pelaporan ke Polres hingga proses perceraian, termasuk pengajuan perlindungan saksi korban.",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1554222405-ba26e7d8b2f0?auto=format&fit=crop&w=900&q=80",
    alt: "Mediasi pertanahan di balai desa",
    caption: "Mediasi Sengketa Tanah",
    description:
      "Mediasi sengketa batas tanah warisan di Balai Desa Kauman. Diselesaikan secara adat dengan akad perdamaian bermaterai, menghindari proses sidang yang bisa berlangsung bertahun-tahun dan menghabiskan biaya jutaan rupiah.",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1567540450819-1cd5c5e3d9f1?auto=format&fit=crop&w=900&q=80",
    alt: "Pendampingan di KUA untuk itsbat nikah",
    caption: "Itsbat Nikah Massal",
    description:
      "Pengurusan sidang itsbat nikah massal bagi warga yang belum memiliki buku nikah resmi. Dokumen ini sangat krusial sebagai dasar pembuatan akta kelahiran dan klaim aset warisan untuk anak-anak mereka di kemudian hari.",
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
  "Posbakum BKBH Kartini",
  "Jl. Raya Kartini No. 14, Kelurahan Tamanan",
  "Kecamatan Tulungagung, Kabupaten Tulungagung",
  "Jawa Timur 66211",
];

export const CONTACTS = {
  phone: WHATSAPP_DISPLAY,
  email: "posbakum@bkbh-kartini-ta.or.id",
  whatsapp: WHATSAPP_LINK,
};
