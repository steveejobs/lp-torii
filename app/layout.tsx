import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torii Restaurante Japonês | Araguaína - TO",
  description:
    "Rodízio, delivery e experiências japonesas para aproveitar a noite em Araguaína.",
  icons: {
    icon: [
      {
        url: "/favicon%20torii/favicon%20torii%201.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon%20torii/favicon%20torii%201.png",
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
