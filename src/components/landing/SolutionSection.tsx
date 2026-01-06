import { Brain, Clock, Heart, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Brain,
    title: "Science-Based Method",
    description: "Uses proven positive reinforcement techniques that stimulate your dog's natural intelligence.",
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
            Simple Brain Games That{" "}
            <span className="text-primary">Transform Behavior</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The secret isn't force or punishment — it's about{" "}
            <span className="font-semibold text-foreground">
              stimulating your dog's mind
            </span>{" "}
            through fun, engaging activities that unlock their hidden intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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

        {/* Creator Card */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-4xl">
                👩‍🏫
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-muted-foreground mb-2">
                Created by <span className="font-bold text-foreground">Adrienne Farricelli</span>
              </p>
              <p className="text-primary font-semibold mb-3">
                CPDT-KA Certified Professional Dog Trainer
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-success" />
                  10+ years of professional dog training experience
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-success" />
                  Helped 21,000+ dog owners worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xl">
            Watch the Free Video Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
