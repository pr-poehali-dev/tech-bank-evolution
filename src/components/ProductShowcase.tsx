import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "credits",
      title: "Потребительские кредиты",
      subtitle: "От 4.9% годовых",
      description:
        "Получите деньги на любые цели за 5 минут. Без справок и поручителей.",
      features: [
        "Решение за 30 секунд",
        "До 3 млн рублей",
        "Без скрытых комиссий",
      ],
      icon: "Banknote",
      gradient: "from-green-500 to-emerald-500",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      id: "cards",
      title: "Карты с кешбеком",
      subtitle: "До 25% кешбек",
      description:
        "Зарабатывайте на повседневных покупках. Уникальные категории каждый месяц.",
      features: [
        "Категории на выбор",
        "Без платы за обслуживание",
        "Мгновенные уведомления",
      ],
      icon: "CreditCard",
      gradient: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      id: "investments",
      title: "Инвестиции",
      subtitle: "Доходность до 15%",
      description: "Готовые стратегии от экспертов или создайте свой портфель.",
      features: ["ИИС с льготами", "Робо-советник", "Копирование стратегий"],
      icon: "TrendingUp",
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    },
    {
      id: "travel",
      title: "Путешествия",
      subtitle: "Все в одном месте",
      description:
        "Билеты, отели, туры и страховка. Планируйте поездки не выходя из приложения.",
      features: [
        "Лучшие цены",
        "Программа лояльности",
        "24/7 поддержка в поездках",
      ],
      icon: "Plane",
      gradient: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 bg-purple-100 text-purple-700"
          >
            <Icon name="Star" className="w-4 h-4 mr-2" />
            Популярные продукты
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Всё что нужно для
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              полноценной жизни
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От ежедневных покупок до крупных инвестиций — у нас есть решение для
            каждой задачи
          </p>
        </div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) => (
            <Button
              key={product.id}
              variant={activeProduct === index ? "default" : "outline"}
              onClick={() => setActiveProduct(index)}
              className={`relative ${
                activeProduct === index
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "hover:border-purple-300"
              }`}
            >
              <Icon name={product.icon as any} className="w-4 h-4 mr-2" />
              {product.title}
            </Button>
          ))}
        </div>

        {/* Active product showcase */}
        <Card className="bg-white border-0 shadow-xl animate-fade-in">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${products[activeProduct].gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon
                      name={products[activeProduct].icon as any}
                      className="w-8 h-8 text-white"
                    />
                  </div>

                  <Badge
                    variant="secondary"
                    className="mb-4 bg-purple-100 text-purple-700"
                  >
                    {products[activeProduct].subtitle}
                  </Badge>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {products[activeProduct].title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {products[activeProduct].description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {products[activeProduct].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Подробнее
                  </Button>
                  <Button variant="outline">Рассчитать условия</Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden lg:rounded-r-lg">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductShowcase;
