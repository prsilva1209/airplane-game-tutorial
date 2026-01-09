import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_URL = "https://1d2a5hsfti4w7-14z6x77-27ve.hop.clickbank.net";

const painPoints = [
  "Biting your hands, arms, and clothes",
  "Attacking your feet when you walk",
  "Chewing everything in the house",
  "Ignoring commands and acting wild",
  "Jumping on people constantly",
  "Barking at everything",
];

const PuppyBitingPage = () => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white">

      {/* Header */}
      <header className="py-4 px-4 border-b border-muted/30">
        <div className="max-w-lg mx-auto">
          <span className="font-serif text-lg sm:text-xl text-trust-blue font-semibold">
            Smart Pet Journal
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="py-6 sm:py-10 px-4">
        <div className="max-w-lg mx-auto text-center">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
            My Puppy Won’t Stop Biting Me —  
            <br />
            <span className="text-orange-600">And I Was About to Give Up</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Discover the simple brain-based method that helps calm your puppy and
            reduce painful biting — without yelling, hitting, or punishment.
          </p>

          {/* IMAGE */}
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 group relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />

            <img
              src="/images/puppy-biting.webp"
              alt="Frustrated owner with biting puppy"
              className="w-full rounded-xl shadow-lg"
              width="700"
              height="400"
              fetchPriority="high"
            />
          </a>

          {/* CTA */}
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              variant="cta"
              size="xl"
              className="w-full py-4 px-4 text-sm sm:text-base md:text-lg whitespace-normal text-center leading-snug flex items-center justify-center gap-2"
            >
              See How to Stop the Biting Today
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </Button>
          </a>

          <p className="text-sm text-gray-600 mt-3">
            ⭐⭐⭐⭐⭐ Trusted by <strong>57,000+ dog owners</strong> worldwide
          </p>

        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="bg-orange-50/50 rounded-xl p-5 border border-orange-100">

            <p className="text-sm mb-4 font-medium text-center text-muted-foreground">
              Does your puppy do any of these?
            </p>

            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-base text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ROOT CAUSE SECTION */}
      <section className="py-8 px-4 bg-orange-50/40">
        <div className="max-w-lg mx-auto text-center space-y-5">

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            The Real Cause Behind Bad Behavior
          </h2>

          <p className="text-lg leading-relaxed text-gray-800">
            Whether it's <strong>biting</strong>, <strong>barking</strong>, or <strong>jumping</strong>,  
            the root cause is the same:
            <strong> an overstimulated or under-challenged brain.</strong>
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            When you engage your dog’s mind the right way,  
            <strong className="text-gray-900"> the bad behaviors naturally fade away.</strong>
          </p>

          <div className="bg-white rounded-xl p-5 border border-orange-100 text-left">
            <p className="font-medium text-gray-800 mb-3">
              This gentle brain training method helps reduce:
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Excessive barking</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Jumping on people</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Restlessness & anxiety</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Destructive behavior</li>
            </ul>
          </div>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full pt-4"
          >
            <Button variant="cta" size="xl" className="w-full py-4 text-base shadow-lg">
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

        </div>
      </section>

      {/* PROOF / AUTHORITY */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-lg mx-auto text-center space-y-6">

          <p className="text-lg leading-relaxed text-gray-800">
            Your puppy isn’t aggressive or “bad”.
          </p>

          <p className="text-lg leading-relaxed text-gray-600">
            Most behavior issues happen because your puppy’s brain is
            <strong className="text-gray-900"> overstimulated</strong>,
            <strong className="text-gray-900"> anxious</strong>, or
            <strong className="text-gray-900"> under-challenged</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-800">
            Certified trainer{" "}
            <strong className="text-trust-blue">Adrienne Farricelli</strong>{" "}
            uses gentle brain games to calm your puppy, improve focus, and
            naturally reduce bad behavior.
          </p>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full pt-4"
          >
            <Button
              variant="cta"
              size="xl"
              className="w-full py-4 text-base shadow-lg"
            >
              See the Training That Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>

          <p className="text-sm text-gray-600 mt-3">
            60-Day Money-Back Guarantee – No Risk
          </p>

          <p className="text-xs text-muted-foreground pt-2">
            Instant access. Start calming your puppy today.
          </p>

        </div>
      </section>

    </article>
  );
};

export default PuppyBitingPage;
