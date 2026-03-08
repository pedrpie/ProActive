import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProActive",
  description: "Juntos contra a procrastinação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
