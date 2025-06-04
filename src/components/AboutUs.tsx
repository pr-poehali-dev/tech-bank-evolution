import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AboutUs = () => {
  const changes = [
    {
      icon: "Smartphone",
      title: "100% мобильный",
      description: "Все операции в смартфоне — от открытия счета до инвестиций",
    },
    {
      icon: "Zap",
      title: "Мгновенные решения",
      description: "ИИ принимает решения по кредитам за 30 секунд",
    },
    {
      icon: "Shield",
      title: "Максимальная безопасность",
      description: "Биометрия и машинное обучение защищают ваши деньги",
    },
    {
      icon: "Globe",
      title: "Экосистема сервисов",
      description: "От банкинга до путешествий — всё в одном приложении",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            <Icon name="Rocket" className="w-4 h-4 mr-2" />
            Эволюция банкинга
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Мы изменились.
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Кардинально.
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Забудьте об устаревшем банкинге. Мы создали экосистему финансовых
            сервисов, которая растет вместе с вашими потребностями и делает
            управление деньгами простым и понятным.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {changes.map((change, index) => (
            <div
              key={index}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={change.icon as any}
                    className="w-10 h-10 text-white"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {change.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {change.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement stats */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-purple-100">новых функций за год</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">время работы сервисов</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">#1</div>
              <div className="text-purple-100">в рейтинге инноваций</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
