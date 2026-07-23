import Navigation from "./components/layout/Navigation";
import Hero from "./sections/hero/Hero";
import BrandIntroduction from "./sections/home/BrandIntroduction";
import FeaturedPortfolio from "./sections/home/FeaturedPortfolio";
import ServicesPreview from "./sections/home/ServicesPreview";
import WhyChoose from "./sections/home/WhyChoose";
import PlanningExperience from "./sections/home/PlanningExperience";
import InstagramShowcase from "./sections/home/InstagramShowcase";
import ConsultationCTA from "./sections/home/ConsultationCTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
      <div className="antialiased min-h-screen bg-[#FAF8F5]">
            <Navigation />

                  <main>
                          <Hero />
                            <BrandIntroduction />
                            <FeaturedPortfolio />
                            <ServicesPreview />
                            <WhyChoose />
                            <PlanningExperience />
                            <InstagramShowcase />
                            <ConsultationCTA />
                            </main>

                            <Footer />
                                    </div>
                                      );
                                      }