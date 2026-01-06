import { Brain, Clock, Heart, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Brain,
    title: "Neuroplasticity-Based",
    description: "Uses brain science to create new neural pathways for lasting behavioral change.",
  },
  {
    icon: Heart,
    title: "Force-Free Training",
    description: "No harsh corrections, prong collars, or dominance. Just gentle, effective methods.",
  },
  {
    icon: Clock,
    title: "Just 10 Minutes a Day",
    description: "Quick, fun games that fit into any schedule while producing lasting results.",
  },
  {
    icon: Sparkles,
    title: "Works for Any Breed",
    description: "From stubborn Bulldogs to energetic Border Collies, this method works for all.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            The Solution:{" "}
            <span className="text-primary">Neuroplasticity & Brain Games</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional CPDT-KA Trainer{" "}
            <span className="font-semibold text-foreground">Adrienne Farricelli</span>{" "}
            has developed a unique method that unlocks your dog's natural intelligence.
          </p>
        </div>

        {/* Featured Highlight */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl font-bold text-foreground">
                Learn the famous "Airplane Game"
              </p>
              <p className="text-muted-foreground">
                Discover this powerful technique inside the free video
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            Watch the Free Video Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
