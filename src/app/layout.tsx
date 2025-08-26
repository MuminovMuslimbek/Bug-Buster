import type { Metadata } from "next";
import "./globals.css";

// 🔥 SEO uchun metadata
export const metadata: Metadata = {
  title: {
    default: "Bug Buster Challenge – Coding Event",
    template: "%s | Bug Buster",
  },
  description:
    "Bug Buster – tezkor va qiziqarli kod yozish musobaqasi. Qisqa vaqt ichida kod xatolarini toping, tuzating va yutuqqa erishing. Dasturlashni sevuvchilar uchun eng yaxshi challenge!",
  keywords: [
    "Bug Buster",
    "Coding Challenge",
    "Hackathon",
    "Programming Contest",
    "Najot Ta'lim",
    "Frontend",
    "JavaScript",
    "Next.js",
    "React",
    "Bug",
    "Buster",
  ],
  authors: [{ name: "Bug Buster Team", url: "https://bugbuster.uz" }],
  creator: "Muslimbek Muminov",
  publisher: "Muslimbek Muminov",

  // Open Graph (Facebook, LinkedIn uchun)
  openGraph: {
    title: "Bug Buster Challenge – Coding Event",
    description:
      "Eng tezkor dasturchilar bellashuvi! Bug Buster musobaqasida qatnashib o‘z mahoratingizni sinab ko‘ring.",
    url: "https://bugbuster.uz",
    siteName: "Bug Buster",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bug Buster Challenge",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter cards
  twitter: {
    card: "summary_large_image",
    title: "Bug Buster Challenge – Coding Event",
    description:
      "Kodingni tez va to‘g‘ri yoz! Bug Buster musobaqasiga qo‘shiling.",
    creator: "@bugbuster",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0f172a", 

  category: "technology",
  applicationName: "Bug Buster",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={'antialiased bg-gray-50 text-gray-900'}
      >
        {children}
      </body>
    </html>
  );
}
