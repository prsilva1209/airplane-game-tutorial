import React, { useEffect, useState } from 'react';
import { Shield, Brain, Heart, Zap, Volume2, ShieldCheck, Star, Users, ArrowRight, Menu, Check, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PuppyBitingPage01 = () => {
  // Sticky CTA state
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  // SEO & Scroll Handler
  useEffect(() => {
    document.title = "How to Stop Puppy Biting | Brain Training for Dogs";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Stop puppy biting, barking, and jumping with gentle brain-based training methods. No punishment. Real results.");
    }

    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white pb-24 md:pb-0">

      {/* Warning / Scarcity Top Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold animate-pulse">
        ⚠️ Limited Access: Discover the Method Before It's Taken Down
      </div>

      {/* Hero Section */}
      <header className="bg-slate-50 py-12 px-4 border-b-4 border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="inline-block bg-blue-100 text-trust-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            For Frustrated Puppy Owners
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tigher">
            "My Puppy Wouldn’t Stop Biting Me — And I Was About to Give Up"
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the gentle <span className="font-bold text-trust-blue">brain-based method</span> that calms your dog without punishment, yelling, or force.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={scrollToCTA}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-5 px-8 rounded-lg shadow-cta transition-transform transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-2 group"
            >
              Watch the Full Training Method
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-slate-100 px-4 py-2 rounded-full">
              <div className="flex text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="border-l border-gray-300 pl-2">Join 57,000+ happy dog owners</span>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Does this sound familiar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <h3 className="font-bold text-red-800 mb-1">Constant Biting</h3>
                <p className="text-gray-600 text-sm">Your hands, clothes, and ankles are covered in painful marks.</p>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-3">
              <span className="text-2xl">🦘</span>
              <div>
                <h3 className="font-bold text-red-800 mb-1">Embarrassing Jumping</h3>
                <p className="text-gray-600 text-sm">You can't invite guests because your dog jumps on everyone.</p>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-3">
              <span className="text-2xl">📢</span>
              <div>
                <h3 className="font-bold text-red-800 mb-1">Excessive Barking</h3>
                <p className="text-gray-600 text-sm">The noise never stops, and neighbors are starting to complain.</p>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-3">
              <span className="text-2xl">👟</span>
              <div>
                <h3 className="font-bold text-red-800 mb-1">Destruction</h3>
                <p className="text-gray-600 text-sm">Furniture, shoes, and rugs are being chewed to pieces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-16 px-4 bg-trust-blue-light/10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading text-2xl font-bold text-trust-blue mb-4">
            You are not a bad dog parent. Your puppy is not "aggressive."
          </p>
          <div className="w-16 h-1 bg-trust-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            It’s easy to feel like you’ve failed when nothing seems to work. But the truth is, most traditional advice (like yelling or "dominating" your dog) just makes things worse by increasing their anxiety.
          </p>
        </div>
      </section>

      {/* Root Cause Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            The Real Reason Your Dog Acts Out
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether it's biting, barking, or jumping, the root cause is often the same:
          </p>

          <div className="relative bg-slate-50 border-2 border-dashed border-trust-blue rounded-2xl p-8 md:p-12 overflow-hidden shadow-sm">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-trust-blue/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-trust-blue/10 rounded-full"></div>

            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Brain className="w-12 h-12 text-trust-blue" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              An Overstimulated or Under-Challenged Brain
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
              Dogs are intelligent animals. When their brains aren't engaged correctly, they get anxious, bored, or wild. They simply don't know how to calm themselves down.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            The Solution: Brain Training for Dogs
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            By using simple, gentle mental games, you can stimulate your dog's brain in a way that naturally calms them down, builds focus, and redirects that wild energy into obedience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-orange-400 flex flex-col items-center">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600 mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">Less Biting</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-400 flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full text-trust-blue mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">Less Jumping</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-purple-400 flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600 mb-3">
                <Volume2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">Less Barking</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-green-400 flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full text-green-600 mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800">Better Focus</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-gray-100">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 text-xs text-center border-4 border-white shadow-md">
            [Adrienne Image]
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">Meet Adrienne Farricelli</h3>
            <div className="text-trust-blue font-bold text-sm uppercase tracking-wide mb-4">CPDT-KA Certified Dog Trainer</div>
            <p className="text-gray-600 mb-4">
              With over 10 years of experience, Adrienne's work has appeared in <em>USA Today</em> and <em>Every Dog Magazine</em>. She developed this unique brain training method to help owners connect with their dogs without force, domination, or frustration.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 shadow-sm border">USA Today</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 shadow-sm border">Daily Dog</span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 shadow-sm border">Every Dog Mag</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            What Other Dog Owners Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg relative">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4">"I was skeptical, but my puppy stopped biting in just 7 days! The games are so fun and he actually calms down afterwards."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-xs text-gray-400">Denver, CO</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg relative">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4">"No more jumping on guests. We can finally have dinner in peace without the dog going crazy. Thank you Adrienne!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full"></div>
                <div>
                  <div className="font-bold">Mark T.</div>
                  <div className="text-xs text-gray-400">London, UK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto border-2 border-gray-100 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <div className="mb-6 flex justify-center">
            <ShieldCheck className="w-20 h-20 text-green-500" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">60-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 mb-6">
            Try the Brain Training method 100% risk-free. If you don't see a dramatic improvement in your dog's behavior, you get your money back. No questions asked.
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
            <Lock className="w-4 h-4" /> Secure SSL Payment
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-blue-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stop the Biting & Start Enjoying Your Dog
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            You don't have to struggle anymore. Give your dog the mental stimulation they crave today.
          </p>
          <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl py-6 px-12 rounded-lg shadow-xl transition-all transform hover:-translate-y-1 mb-6 flex flex-col items-center mx-auto">
            <span>See How to Stop the Biting Today</span>
            <span className="text-sm font-normal opacity-90 mt-1">Instant Access - 60 Day Guarantee</span>
          </button>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-top z-50 transition-transform duration-300 md:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <button
          onClick={scrollToCTA}
          className="w-full bg-orange-500 text-white font-bold text-lg py-3 rounded-lg shadow-lg"
        >
          See the Solution
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="mb-4 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Brain Training for Dogs. All rights reserved.
          </p>
          <p className="text-xs leading-relaxed max-w-2xl mx-auto text-gray-600">
            This site is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            <br /><br />
            Disclosure: This is an advertisement. We are an affiliate for the product and may get compensated if you click on the link and purchase. The success stories mentioned are personal results and results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PuppyBitingPage01;
