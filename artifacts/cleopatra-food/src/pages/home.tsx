import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Menu } from "@/components/sections/menu";
import { FullMenu } from "@/components/sections/full-menu";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WordmarkStrip } from "@/components/sections/wordmark-strip";
import { TreasureLoader } from "@/components/treasure-loader";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans">
      <TreasureLoader />
      <div className="film-grain"></div>
      <Navbar />
      <main>
        <Hero />
        <FullMenu />
        <Menu />
        <Story />
        <WordmarkStrip />
        <Gallery />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
