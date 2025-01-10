import type { Metadata } from "next";
import RootLayoutClient from "./layout.client";

export const metadata: Metadata = {
  title: "Necmettin Zıvlak | Frontend Developer",
  description: "Frontend Developer olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum. React, Next.js ve Flutter teknolojileri konusunda uzmanım.",
  keywords: ["Necmettin Zıvlak", "Frontend Developer", "React", "Next.js", "Flutter", "Web Developer", "Software Developer"],
  authors: [{ name: "Necmettin Zıvlak" }],
  creator: "Necmettin Zıvlak",
  publisher: "Necmettin Zıvlak",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://necmettinzivlak.com",
    siteName: "Necmettin Zıvlak",
    title: "Necmettin Zıvlak | Frontend Developer",
    description: "Frontend Developer olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum.",
    images: [
      {
        url: "/images/me.jpeg",
        width: 800,
        height: 600,
        alt: "Necmettin Zıvlak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Necmettin Zıvlak | Frontend Developer",
    description: "Frontend Developer olarak modern ve kullanıcı dostu web uygulamaları geliştiriyorum.",
    creator: "@necmettinzivlak",
    images: ["/images/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
