import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppSticky } from "@/components/whatsapp-sticky";

export const metadata: Metadata = {
  metadataBase: new URL("https://tar-tech-surface.vercel.app"),
  title: {
    default: "Tar-Tech Surface | Tar Surfacing & Civil Works",
    template: "%s | Tar-Tech Surface"
  },
  description:
    "Tar-Tech Surface delivers tar surfacing, roadworks, and civil construction with quality workmanship, safe execution, and reliable delivery timelines.",
  openGraph: {
    title: "Tar-Tech Surface",
    description: "Tar surfacing and civil works done right.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
