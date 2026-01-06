import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdvertorialPage = () => {
  return (
    <article className="py-12 md:py-20">
      <div className="article-container">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>January 3, 2025</span>
            <span>•</span>
            <span>By Sarah Mitchell</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'hsl(var(--article-heading))' }}>
            How I Stopped Yelling at My Dog Using a Simple 5-Minute Trick (The Airplane Game)
          </h1>
        </header>

        {/* Article Body */}
        <div className="article-body" style={{ color: 'hsl(var(--article-text))' }}>
          
          {/* Section 1: Personal Introduction */}
          <p className="drop-cap">
            I loved my Rex, but he was destroying my house. Chewed shoes scattered across the living room. Barking at every sound — the mailman, a car door, even the wind. Pulling me down the street on walks like I was a ragdoll. I tried everything — treats, stern commands, even expensive trainers. Nothing worked. I was at my breaking point.
          </p>

          <p>
            Every day felt like a battle. I'd come home exhausted from work, only to find another pillow torn apart or another neighbor complaining about the noise. I started dreading walks. I even started avoiding having friends over because I was embarrassed by his behavior.
          </p>

          <p>
            I loved him — I really did — but I was starting to wonder if I'd made a terrible mistake getting a dog in the first place.
          </p>

          {/* Section 2: The Discovery */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: 'hsl(var(--article-heading))' }}>
            Then I Discovered Something That Changed Everything
          </h2>

          <p>
            That's when I stumbled upon the concept of <strong>Canine Neuroplasticity</strong>, developed by CPDT-KA certified trainer Adrienne Farricelli. At first, I was skeptical — another training gimmick, I thought. But something about her approach was different.
          </p>

          <p>
            Adrienne explained that most training methods fail because they work <em>against</em> the dog's brain instead of <em>with</em> it. Traditional training focuses on suppressing bad behavior through force or treats. But dogs, like humans, have neuroplasticity — the ability to rewire their brains through specific mental exercises.
          </p>

          <blockquote>
            "The secret isn't about being dominant or giving more treats. It's about engaging your dog's hidden intelligence through simple brain games."
          </blockquote>

          {/* Section 3: The Value Content */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: 'hsl(var(--article-heading))' }}>
            The Secret: Mental Games, Not Force
          </h2>

          <p>
            Here's what I learned: dogs misbehave not because they're "bad" or "stubborn" — they misbehave because they're <strong>bored</strong>. Their brains are understimulated. It's like giving a brilliant kid nothing but crayons and expecting them not to draw on the walls.
          </p>

          <p>
            The solution? Simple brain games that take just 5-10 minutes a day. These games tap into your dog's natural problem-solving instincts and redirect that mental energy into positive behavior.
          </p>

          {/* Video Placeholder */}
          <div className="video-placeholder">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-primary ml-1" />
            </div>
            <p className="text-muted-foreground font-medium">Watch the Demonstration Video</p>
            <p className="text-sm text-muted-foreground mt-2">See the Airplane Game in action</p>
          </div>

          <p>
            One of the first games Adrienne taught me was called <strong>"The Airplane Game."</strong> It sounds silly, but within the first week, I noticed Rex was calmer, more focused, and actually <em>listening</em> to me.
          </p>

          {/* Section 4: The Cliffhanger */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: 'hsl(var(--article-heading))' }}>
            The Airplane Game Changed Everything
          </h2>

          <p>
            The Airplane Game changed everything in my house. Rex stopped destroying things. The barking reduced dramatically. Walks became enjoyable again. My neighbors even commented on how much calmer he seemed.
          </p>

          <p>
            But here's the thing — <strong>the Airplane Game is just 1 of 7 brain games</strong> in Adrienne's complete system. Each game targets a different aspect of your dog's intelligence and behavior. Together, they create a comprehensive mental workout that transforms even the most stubborn dogs.
          </p>

          <p>
            I wish I had discovered this years ago. It would have saved me so much stress, money on trainers, and honestly — my relationship with Rex.
          </p>

          {/* Section 5: CTA */}
          <div className="mt-12 mb-8 p-8 bg-muted/50 rounded-lg text-center">
            <p className="text-lg mb-6">
              If you're struggling like I was, I highly recommend watching Adrienne's official training video. She explains all 7 brain games and shows you exactly how to do them with your dog.
            </p>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.open('#', '_blank')}
            >
              Watch the Complete Video Training
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Free video presentation — No credit card required
            </p>
          </div>

          <p className="text-center text-muted-foreground italic">
            — Sarah Mitchell, proud dog mom to Rex
          </p>
        </div>
      </div>
    </article>
  );
};

export default AdvertorialPage;
