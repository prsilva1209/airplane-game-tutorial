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
      {/* Minimal Header */}
      <header className="py-4 px-4 border-b border-muted/30">
        <div className="max-w-lg mx-auto">
          <span className="font-serif text-lg sm:text-xl text-trust-blue font-semibold">
            Smart Pet Journal
          </span>
        </div>
      </header>

      {/* Hero Section - Video Above the Fold */}
      <section className="py-6 sm:py-10 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Emotional Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
            "My Puppy Won't Stop Biting – This Gentle Brain Game Explains Why"
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6">
            If your puppy bites hands, clothes, or won't calm down, anxiety and excess energy may be the real cause.
          </p>

          {/* Video Lite Embed */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
            {!isVideoLoaded ? (
              <button
                onClick={() => setIsVideoLoaded(true)}
                className="w-full h-full relative group cursor-pointer"
                aria-label="Play video"
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Dog training demonstration video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
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

          {/* Video Caption */}
          <p className="text-sm text-muted-foreground mb-4 italic">
            Watch how a simple mental game helps calm anxious dogs and reduce problem behaviors — without punishment.
          </p>

          {/* CTA Button - Above the Fold */}
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              variant="cta"
              size="xl"
              className="w-full h-auto py-4 text-sm sm:text-base md:text-lg whitespace-normal leading-tight"
            >
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
            </Button>
          </a>
        </div>
      </section>

      {/* Pain Bullets Section */}
      <section className="py-6 sm:py-8 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="bg-orange-50/50 rounded-xl p-4 sm:p-6 border border-muted/20">
            <p className="text-sm text-muted-foreground mb-4 font-medium text-center">
              Does your puppy do any of these?
            </p>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="space-y-4 sm:space-y-6 text-center">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Most puppies don't misbehave because they're <strong>aggressive</strong> or <strong>stubborn</strong>.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              They act out because their brain is <strong className="text-foreground">overstimulated</strong>, <strong className="text-foreground">anxious</strong>, or <strong className="text-foreground">under-challenged</strong>.
            </p>

            <div className="py-4 sm:py-6">
              <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
            </div>

            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Professional trainer <strong className="text-trust-blue">Adrienne Farricelli</strong> uses gentle brain games to mentally engage dogs, helping them relax, focus, and naturally reduce unwanted behaviors.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-8 sm:mt-10">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="cta"
                size="xl"
                className="w-full h-auto py-4 text-sm sm:text-base md:text-lg whitespace-normal leading-tight"
              >
                Watch the Full Training Method
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </Button>
            </a>
            
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
              Free video reveals a calm, science-based approach
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PuppyBitingPage;
