import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { DitherField } from "@/components/dither-field";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "../../content/profile";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrument = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name}`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.tagline} Based in ${profile.location}.`,
  openGraph: {
    title: profile.name,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${instrument.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col">
        <DitherField />
        <SiteHeader />
        <main className="mx-auto w-full max-w-2xl flex-1 px-6">{children}</main>
        <SiteFooter />
        <DitherField placement="bottom" />
      </body>
    </html>
  );
}
