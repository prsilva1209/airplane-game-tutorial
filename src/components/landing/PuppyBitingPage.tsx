import { useState } from "react";
import { AlertCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_URL = "https://1d2a5hsfti4w7-14z6x77-27ve.hop.clickbank.net";
const VIDEO_ID = "cyaW77XIC0M";

const painPoints = [
  "Biting hands and clothes",
  "Whining and pacing constantly",
  "Jumping on people",
  "Restless or anxious behavior",
];

const PuppyBitingPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
          <p className="text-base sm:text-lg text-muted-foreground mb-5">
            If your puppy bites hands, clothes, or won't calm down, anxiety and excess energy may be the real cause.
          </p>

          {/* Emotional Image */}
          <img
            src="/images/puppy-biting.webp"
            alt="Frustrated dog owner with biting puppy"
            className="w-full rounded-xl shadow-md mb-5"
            loading="lazy"
          />

          {/* Video */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
            {!isVideoLoaded ? (
              <button
                onClick={() => setIsVideoLoaded(true)}
                className="w-full h-full relative group"
                aria-label="Play video"
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Dog training demonstration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Dog training demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          {/* CTA */}
          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button variant="cta" size="xl" className="w-full py-4 text-base">
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="bg-orange-50/50 rounded-xl p-5 border">
            <p className="text-sm mb-4 font-medium text-center text-muted-foreground">
              Does your puppy do any of these?
            </p>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bridge */}
      <section className="py-10 px-4">
        <div className="max-w-lg mx-auto text-center space-y-5">

          <p className="text-lg">
            Most puppies don't misbehave because they're <strong>aggressive</strong> or <strong>stubborn</strong>.
          </p>

          <p className="text-lg text-muted-foreground">
            They act out because their brain is <strong className="text-foreground">overstimulated</strong>,{" "}
            <strong className="text-foreground">anxious</strong>, or{" "}
            <strong className="text-foreground">under-challenged</strong>.
          </p>

          <p className="text-lg">
            Professional trainer <strong className="text-trust-blue">Adrienne Farricelli</strong> uses gentle brain games to mentally engage dogs, helping them relax, focus, and naturally reduce unwanted behaviors.
          </p>

          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button variant="cta" size="xl" className="w-full py-4 text-base">
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

          <p className="text-xs text-muted-foreground">
            Free video reveals a calm, science-based approach
          </p>

        </div>
      </section>
    </article>
  );
};

export default PuppyBitingPage;
