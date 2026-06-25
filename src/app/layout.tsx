import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
export const metadata: Metadata = {
  title: "Brixs Chain | Premium Blockchain Platform",
  description:
    "Brixs Chain is a premium blockchain platform with a single flagship landing page, strong color grading, and high-end motion.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-[#f4f1ea] antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
