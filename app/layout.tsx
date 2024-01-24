import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dresnite | Fullstack Developer",
  description: "A minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
