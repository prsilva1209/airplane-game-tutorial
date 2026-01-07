import { ArrowRight, CheckCircle, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import adriennePhoto from "@/assets/adrienne-trainer.jpg";

const AFFILIATE_LINK = "https://1d2a5hsfti4w7-14z6x77-27ve.hop.clickbank.net";

const AdvertorialPage = () => {
  const handleCTAClick = () => {
    window.open(AFFILIATE_LINK, '_blank');
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="wide-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🐕</span>
              </div>
              <span className="font-serif text-xl font-bold text-primary">Smart Pet Journal</span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Trusted by 57,000+ Dog Owners</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Video Above the Fold */}
      <section className="py-6 sm:py-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="article-container">
          {/* Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-center" style={{ color: 'hsl(var(--article-heading))' }}>
            Is Your Dog's Bad Behavior Driving You Crazy? This Simple 2-Minute "Airplane Game" Could Change Everything.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            Watch how professional trainer Adrienne Farricelli uses simple brain games to unlock "Hidden Intelligence" and eliminate bad habits.
          </p>

          {/* Video Player - PRIMARY FOCUS */}
          <div className="mb-4 sm:mb-6">
            <div className="video-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/l9JSDHjMQco" 
                title="Brain Training for Dogs - Airplane Game Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Caption */}
          <p className="text-sm text-muted-foreground text-center mb-6 sm:mb-8">
            <span className="font-semibold">VIDEO:</span> Watch Adrienne demonstrate the "Airplane Game" technique.
          </p>

          {/* Primary CTA */}
          <div className="text-center mb-8 sm:mb-12">
            <Button 
              onClick={handleCTAClick}
              variant="cta"
              className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 h-auto w-full sm:w-auto max-w-full whitespace-normal leading-tight"
            >
              <span>Get The Full 21 Brain Games Workshop Now</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              Join 57,000+ happy dog owners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-8 sm:py-12">
        <div className="article-container">
          <div className="article-body" style={{ color: 'hsl(var(--article-text))' }}>
            
            {/* Why Traditional Training Fails */}
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">
              Why Most Dog Training Methods Fail
            </h2>
            
            <p className="drop-cap">
              Most dog training fails because it uses force or endless repetition. Dogs get bored, frustrated, and eventually tune out. But Adrienne's method is completely different—it focuses on <strong>neuroplasticity</strong>, engaging your dog's brain so they <em>want</em> to behave. It's not about domination; it's about communication.
            </p>

            <p>
              When you tap into your dog's natural problem-solving instincts, something remarkable happens. Bad behaviors like barking, chewing, and pulling on the leash begin to fade away—not because you've suppressed them, but because your dog is mentally fulfilled.
            </p>

            {/* About Adrienne Section */}
            <div className="my-8 sm:my-12 p-6 sm:p-8 bg-muted/30 rounded-2xl border border-border">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="flex-shrink-0">
                  <img 
                    src={adriennePhoto} 
                    alt="Adrienne Farricelli - CPDT-KA Certified Dog Trainer"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">About Adrienne Farricelli</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">CPDT-KA Certified Professional Dog Trainer</span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    With over 10 years of experience, Adrienne has helped thousands of dog owners transform their pets' behavior. Her work has been featured in <strong>USA Today</strong>, <strong>Every Dog Magazine</strong>, and numerous pet publications worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem/Solution List */}
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-primary">
              What The Brain Training System Solves
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                "Stops Excessive Barking",
                "Eliminates Leash Pulling",
                "Ends Destructive Chewing",
                "Fixes Aggression Issues",
                "Reduces Anxiety & Fear",
                "Improves Focus & Attention"
              ].map((item, index) => (
                <div key={index} className="problem-item">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <blockquote>
              "I was ready to give up on Max. After just one week of brain games, he's like a different dog. The transformation is incredible!"
              <footer className="mt-2 text-sm not-italic">— Jennifer M., Verified Customer</footer>
            </blockquote>

            {/* Final CTA */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-primary/5 rounded-2xl text-center border border-primary/20">
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">
                Ready to Transform Your Dog's Behavior?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get instant access to all 21 brain games, step-by-step video tutorials, and Adrienne's complete training system.
              </p>
              
              <Button 
                onClick={handleCTAClick}
                variant="cta"
                className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 h-auto w-full sm:w-auto max-w-full whitespace-normal leading-tight"
              >
                <span>Get The Full 21 Brain Games Workshop Now</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                60-Day Money-Back Guarantee • Instant Digital Access
              </p>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
};

export default AdvertorialPage;
