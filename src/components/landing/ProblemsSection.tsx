import { Check, X } from "lucide-react";

const problems = [
  { text: "Does your dog bark uncontrollably?", icon: "bark" },
  { text: "Does your dog pull on the leash?", icon: "leash" },
  { text: "Is your dog aggressive or anxious?", icon: "aggressive" },
  { text: "Does your dog chew your furniture?", icon: "chew" },
  { text: "Does your dog ignore your commands?", icon: "ignore" },
  { text: "Is potty training a nightmare?", icon: "potty" },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Do You Face Any of{" "}
            <span className="text-primary">These Problems?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're nodding your head, you're in the right place.
          </p>
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
            Most dog owners face these issues because{" "}
            <span className="font-semibold text-foreground">
              traditional training methods simply don't work
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
