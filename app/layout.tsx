import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Brian Hoang | Portfolio",
  description: "Personal portfolio — resume, photography, and recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="min-h-screen">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.remove('light')}catch(e){}})()` }} />
        <Nav />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
