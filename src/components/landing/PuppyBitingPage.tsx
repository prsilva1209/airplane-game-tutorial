import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_URL = "https://1d2a5hsfti4w7-14z6x77-27ve.hop.clickbank.net";

const painPoints = [
  "Biting hands and clothes",
  "Whining and pacing constantly",
  "Jumping on people",
  "Acting restless or anxious",
];

const PuppyBitingPage = () => {
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

      {/* Hero Section - Mobile First */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Emotional Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            "My Puppy Won't Stop Biting – And I Finally Discovered Why"
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            When anxiety and excess energy go untreated, puppies act out. But there's a gentle way to calm their mind.
          </p>

          {/* Pain Bullets */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-muted/20 mb-6 sm:mb-8">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Does your puppy do any of these?
            </p>
            <ul className="space-y-3 text-left">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

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
              Watch the Gentle Training Method
              <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
            </Button>
          </a>
        </div>
      </section>

      {/* Bridge Section */}
      <section className="py-8 sm:py-12 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="space-y-4 sm:space-y-6 text-center">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Many puppies don't misbehave because they're "bad".
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              They act out because their brain is <strong className="text-foreground">overstimulated</strong>, <strong className="text-foreground">anxious</strong>, or <strong className="text-foreground">under-challenged</strong>.
            </p>

            <div className="py-4 sm:py-6">
              <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
            </div>

            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Professional trainer <strong className="text-trust-blue">Adrienne Farricelli</strong> uses simple mental games to help dogs relax, focus, and naturally reduce problem behaviors — <em>without punishment</em>.
            </p>
          </div>

          {/* Second CTA */}
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
                Watch the Gentle Training Method
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
