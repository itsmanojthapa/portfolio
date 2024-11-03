import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "@itsmanojthapa",
  description: "Portfolio website of Manoj Thapa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
