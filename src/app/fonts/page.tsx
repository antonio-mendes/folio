import type { Metadata } from "next";
import {
  Bodoni_Moda,
  DM_Serif_Display,
  Fraunces,
  Geist,
  Instrument_Serif,
  Newsreader,
  Playfair_Display,
} from "next/font/google";
import { profile } from "../../../content/profile";

export const metadata: Metadata = { title: "Font test", robots: { index: false } };

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"] });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"] });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"] });
const geist = Geist({ subsets: ["latin"] });

const candidates = [
  { label: "Instrument Serif (current)", font: instrument },
  { label: "Bodoni Moda (closest to Bodoni/“Brodine”)", font: bodoni },
  { label: "Playfair Display", font: playfair },
  { label: "DM Serif Display", font: dmSerif },
  { label: "Fraunces", font: fraunces },
  { label: "Newsreader", font: newsreader },
  { label: "Geist (sans; Geist Serif isn’t on Google Fonts)", font: geist },
];

export default function FontsPage() {
  return (
    <div className="pt-32 pb-24">
      <p className="font-mono text-xs text-muted-foreground">Font test · temporary page</p>
      <div className="mt-10 space-y-12">
        {candidates.map(({ label, font }) => (
          <section key={label} className="border-t pt-4">
            <p className="font-mono text-xs text-muted-foreground">{label}</p>
            <div className={font.className}>
              <h1 className="mt-4 text-[clamp(2.75rem,8vw,4rem)] leading-none tracking-tight">
                {profile.name}
              </h1>
              <h3 className="mt-6 text-xl tracking-tight">Senior Data Scientist, <em>Projects</em> &amp; Talks</h3>
              <p className="mt-2 text-xl italic tracking-tight">I Predict You Predict</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
