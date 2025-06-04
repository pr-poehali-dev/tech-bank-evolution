import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const promotions = [
    {
      title: "Кешбек до 25%",
      description: "на путешествия и развлечения",
      icon: "Plane",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Кредит 0.1%",
      description: "на первый месяц для новых клиентов",
      icon: "Percent",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Инвестиции",
      description: "доходность до 15% годовых",
      icon: "TrendingUp",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200"
            >
              <Icon name="Sparkles" className="w-4 h-4 mr-2" />
              Новое поколение банкинга
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Банк для
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                твоей жизни
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы не просто банк — мы твой партнер в планировании будущего.
              Кредиты, инвестиции, путешествия и страхование в одном приложении.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Icon name="Smartphone" className="w-5 h-5 mr-2" />
                Открыть счет за 5 минут
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Как это работает
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2M+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5 мин</div>
                <div className="text-sm text-gray-600">на открытие счета</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">поддержка</div>
              </div>
            </div>
          </div>

          {/* Right content - Promotions */}
          <div className="animate-fade-in">
            <div className="space-y-4">
              {promotions.map((promo, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${promo.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon
                        name={promo.icon as any}
                        className="w-6 h-6 text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {promo.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {promo.description}
                      </p>
                    </div>
                    <Icon
                      name="ChevronRight"
                      className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
