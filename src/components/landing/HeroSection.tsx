import { Button } from "@/components/ui/button";
import heroDog from "@/assets/hero-dog.jpg";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-cream to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-primary" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Is Your Dog's Bad Behavior{" "}
                <span className="text-primary">Driving You Crazy?</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Discover How To Unlock Your Dog's{" "}
                <span className="font-bold text-foreground">"Hidden Intelligence"</span>{" "}
                To Eliminate Bad Behavior and Create the Obedient, Well-Behaved Pet of Your Dreams.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="hero" className="group">
                <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                Watch the Free Video Workshop
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✓ 100% Free • ✓ No Credit Card Required • ✓ Instant Access
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroDog}
                alt="Happy golden retriever with owner"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-2xl">🐕</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">21,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Dogs Trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
