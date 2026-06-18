import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torii Restaurante Japonês | Araguaína - TO",
  description:
    "Rodízio, delivery e experiências japonesas para aproveitar a noite em Araguaína.",
  icons: {
    icon: [
      {
        url: "/favicon%20torii/favicon-torii-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon%20torii/favicon-torii-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon%20torii/favicon-torii-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon%20torii/favicon-torii-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon%20torii/favicon-torii-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Torii Restaurante Japonês",
    description:
      "Rodízio, delivery e experiências japonesas para aproveitar a noite em Araguaína.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
