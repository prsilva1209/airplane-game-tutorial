import { useState } from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_URL = "https://1d2a5hsfti4w7-14z6x77-27ve.hop.clickbank.net";

const painPoints = [
  "Biting hands and clothes",
  "Whining and pacing constantly",
  "Jumping on people",
  "Restless or anxious behavior",
];

const PuppyBitingPage = () => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white">
      
      {/* Header */}
      <header className="py-4 px-4 border-b border-muted/30">
        <div className="max-w-lg mx-auto">
          <span className="font-serif text-lg sm:text-xl text-trust-blue font-semibold">
            Smart Pet Journal
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-6 sm:py-10 px-4">
        <div className="max-w-lg mx-auto text-center">

          {/* Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
            "My Puppy Won't Stop Biting – This Gentle Brain Game Explains Why"
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            If your puppy bites hands, clothes, or won't calm down, anxiety and excess energy may be the real cause.
          </p>

          {/* IMAGEM (Agora é o destaque principal e é clicável) */}
          <a 
            href={AFFILIATE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block mb-6 group relative overflow-hidden rounded-xl shadow-lg"
          >
            {/* Efeito sutil ao passar o mouse para indicar clique */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
            
            <img 
            src="/images/puppy-biting.webp"
            alt="Frustrated dog owner with biting puppy"
            className="w-full rounded-xl shadow-lg"
            width="700"
            height="400"
            fetchPriority="high"
/>
          </a>

          {/* CTA Principal */}
          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button variant="cta" size="xl" className="w-full py-4 text-base shadow-xl animate-pulse-subtle">
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Pain Section - Mantida igual */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="bg-orange-50/50 rounded-xl p-5 border border-orange-100">
            <p className="text-sm mb-4 font-medium text-center text-muted-foreground">
              Does your puppy do any of these?
            </p>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-base text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bridge Text Section */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-lg mx-auto text-center space-y-6">

          <p className="text-lg leading-relaxed text-gray-800">
            Most puppies don't misbehave because they're <strong>aggressive</strong> or <strong>stubborn</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            They act out because their brain is <strong className="text-gray-900">overstimulated</strong>,{" "}
            <strong className="text-gray-900">anxious</strong>, or{" "}
            <strong className="text-gray-900">under-challenged</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-800">
            Professional trainer <strong className="text-trust-blue">Adrienne Farricelli</strong> uses gentle brain games to mentally engage dogs, helping them relax, focus, and naturally reduce unwanted behaviors.
          </p>

          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="block w-full pt-4">
            <Button variant="cta" size="xl" className="w-full py-4 text-base shadow-lg">
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

          <p className="text-xs text-muted-foreground pt-2">
            Free video reveals a calm, science-based approach
          </p>

        </div>
      </section>
    </article>
  );
};

export default PuppyBitingPage;
