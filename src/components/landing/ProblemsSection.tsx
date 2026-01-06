import { Check, X } from "lucide-react";

const problems = [
  { text: "Barks uncontrollably at the door?" },
  { text: "Pulls on the leash during walks?" },
  { text: "Chews your furniture or shoes?" },
  { text: "Ignores your commands?" },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Does Your Dog Do{" "}
            <span className="text-primary">Any of This?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-destructive/5 rounded-xl border border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <p className="font-medium text-foreground">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-secondary/50 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
            You are <span className="text-primary">NOT</span> alone.
          </p>
          <p className="text-lg text-muted-foreground">
            Most training fails because it{" "}
            <span className="font-semibold text-foreground">
              fights the dog's brain instead of engaging it
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
