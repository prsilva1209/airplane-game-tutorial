import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <AuthoritySection />
      <SocialProofSection />
      <Footer />
    </main>
  );
};

export default Index;
