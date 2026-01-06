const featuredLogos = [
  { name: "USA Today", display: "USA TODAY" },
  { name: "Every Dog Magazine", display: "Every Dog Magazine" },
  { name: "The Spruce Pets", display: "The Spruce Pets" },
  { name: "Pet MD", display: "PetMD" },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {featuredLogos.map((logo, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo.display}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
