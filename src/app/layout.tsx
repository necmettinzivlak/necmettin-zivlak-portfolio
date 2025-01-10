import type { Metadata } from "next";
import RootLayoutClient from "./layout.client";

export const metadata: Metadata = {
  title: "Necmettin Zivlak | Software Developer",
  description: "Personal portfolio and CV website of Necmettin Zivlak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
