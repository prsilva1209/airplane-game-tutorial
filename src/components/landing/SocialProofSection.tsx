import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-cream border-y border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Unlock Your Dog's{" "}
            <span className="text-primary">Hidden Potential?</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Watch the free video workshop and discover how simple brain games can transform your dog's behavior.
          </p>
          <Button variant="hero" size="hero" className="group">
            <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
            Watch the Free Video Workshop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
