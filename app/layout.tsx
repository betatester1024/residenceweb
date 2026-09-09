import type { Metadata } from "next";
import { Noto_Sans_Display, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

export const nsm = Noto_Sans_Mono({
  variable: "--font-nsm",
  subsets: ["latin"],
});

export const nsd = Noto_Sans_Display({
  variable: "--font-nsd",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UTM Salmon Hub",
  description: "CLOSED BETA NOT READY FOR RELEASE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${nsm.variable} ${nsd.variable}` }
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
