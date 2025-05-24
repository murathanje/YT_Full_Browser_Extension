import Hero from "@/components/hero";
import Features from "@/components/features";
import Demo from "@/components/demo";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <DotPattern 
        className="fixed inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
        size={40} 
        radius={1.5} 
        opacity={0.6} 
      />
      <Header />
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <Hero />
        <Features />
        <Demo />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
