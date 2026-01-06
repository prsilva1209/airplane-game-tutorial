import { Award, CheckCircle } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            About the <span className="text-primary">Trainer</span>
          </h2>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Trainer Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-5xl">👩‍🏫</span>
              </div>
            </div>

            {/* Trainer Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Adrienne Farricelli
              </h3>
              <p className="text-primary font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Award className="w-5 h-5" />
                CPDT-KA Certified Professional Dog Trainer
              </p>
              <p className="text-muted-foreground mb-4">
                A certified dog trainer with over 10 years of experience, featured in major publications for her innovative approach to canine behavior.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Helped thousands of dog owners worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-lg border border-border">
              <span className="text-xl font-bold text-foreground">USA</span>
              <span className="text-xl font-bold text-primary">TODAY</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-lg border border-border">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">CPDT-KA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
