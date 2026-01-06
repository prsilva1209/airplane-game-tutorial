import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <SocialProofSection />
      <Footer />
    </main>
  );
};

export default Index;
