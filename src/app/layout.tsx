import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKH Kartini Tulungagung — Bantuan Hukum Gratis untuk Warga Kurang Mampu",
  description:
    "Biro Konsultasi dan Bantuan Hukum (BKH) Kartini Tulungagung: posko bantuan hukum pro bono bagi fakir miskin, perempuan, dan anak. Pendampingan kasus pidana, perdata, KDRT, dan sengketa pertanahan tanpa biaya sepeser pun.",
  keywords: [
    "BKH Kartini",
    "Bantuan Hukum Gratis Tulungagung",
    "Posbakum Tulungagung",
    "Pro Bono Indonesia",
    "Bantuan Hukum Murah",
    "SKTM",
    "Pendampingan Hukum Perempuan Anak",
    "KDRT",
    "Restorative Justice",
    "Mediasi Non-Litigasi",
  ],
  authors: [{ name: "BKH Kartini Tulungagung" }],
  icons: {
    icon: [
      { url: "/uploads/logo-bkh.png", type: "image/png", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
    ],
    shortcut: ["/uploads/logo-bkh.png"],
    apple: [{ url: "/uploads/logo-bkh.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "BKH Kartini Tulungagung — Keadilan untuk Semua",
    description:
      "Bantuan hukum gratis (pro bono) bagi fakir miskin, perempuan, dan anak di Kabupaten Tulungagung. Litigasi, non-litigasi, dan penyuluhan hukum desa.",
    siteName: "BKH Kartini Tulungagung",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "BKH Kartini Tulungagung",
    description: "Bantuan hukum gratis untuk warga kurang mampu Tulungagung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
