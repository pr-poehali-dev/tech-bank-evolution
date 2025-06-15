import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Calculator from "@/components/Calculator";
import LocationMap from "@/components/LocationMap";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Calculator />
      <LocationMap />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
