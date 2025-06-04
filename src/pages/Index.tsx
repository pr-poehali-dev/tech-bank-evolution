
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Products
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
      services: ['Кредиты', 'Карты', 'Инвестиции', 'VIP-зона'],
      metro: 'Тверская',
      phone: '+7 (495) 123-45-67'
    },
    {
      id: 2,
      name: 'NeoBank Сити',
      address from '@/components/Products';
import Calculator from '@/components/Calculator';
import LocationMap from '@/components/LocationMap';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {: 'Пресненская наб., 12',
      hours: 'Пн-Пт: 8:00-21:00, С
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Calculator />
      б-Вс: <LocationMap />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
