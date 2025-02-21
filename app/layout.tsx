import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./(home)/_components/header";
import { Footer } from "@/components/footer";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proximality",
  description:
    "Build your AI workforce at the speed of thought with Proximality's cutting-edge platform.",
  icons: {
    icon: [{ url: "/favicon-backup.svg", sizes: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={PoppinsFont.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
