import Navigation from "./components/layout/Navigation";
import Hero from "./sections/hero/Hero";
import BrandIntroduction from "./sections/home/BrandIntroduction";

export default function App() {
  return (
      <div className="antialiased min-h-screen bg-[#FAF8F5]">
            <Navigation />

                  <main>
                          <Hero />
                            <BrandIntroduction />
                            </main>
                                    </div>
                                      );
                                      }