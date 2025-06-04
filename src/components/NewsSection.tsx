import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "NeoBank запускает новую программу кешбека до 25%",
      excerpt:
        "Теперь клиенты могут получать максимальный кешбек в категориях путешествия, рестораны и развлечения...",
      date: "2024-12-03",
      category: "Продукты",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Искусственный интеллект в банкинге: как мы принимаем решения",
      excerpt:
        "Рассказываем о технологиях машинного обучения, которые помогают одобрять кредиты за 30 секунд...",
      date: "2024-11-28",
      category: "Технологии",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Новые офисы NeoBank в 15 городах России",
      excerpt:
        "В декабре мы открываем офисы в новых городах, чтобы быть ближе к нашим клиентам...",
      date: "2024-11-25",
      category: "Компания",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Инвестиционные стратегии 2025: что выбрать",
      excerpt:
        "Аналитики NeoBank делятся прогнозами и рекомендациями по формированию портфеля на новый год...",
      date: "2024-11-20",
      category: "Инвестиции",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      featured: false,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Продукты: "bg-purple-100 text-purple-700",
      Технологии: "bg-blue-100 text-blue-700",
      Компания: "bg-green-100 text-green-700",
      Инвестиции: "bg-orange-100 text-orange-700",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
    );
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 bg-orange-100 text-orange-700"
          >
            <Icon name="Newspaper" className="w-4 h-4 mr-2" />
            Новости и события
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Всегда в курсе
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              последних новостей
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Важные обновления, новые продукты и экспертные материалы от команды
            NeoBank
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured article */}
          <div className="lg:col-span-7">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="relative">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Icon name="Star" className="w-3 h-3 mr-1" />
                    Главная новость
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge
                    variant="secondary"
                    className={getCategoryColor(news[0].category)}
                  >
                    {news[0].category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Calendar" className="w-4 h-4 mr-1" />
                    {formatDate(news[0].date)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {news[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news[0].excerpt}
                </p>
                <Button
                  variant="outline"
                  className="group-hover:bg-purple-600 group-hover:text-white transition-colors"
                >
                  Читать полностью
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* News list */}
          <div className="lg:col-span-5 space-y-6">
            {news.slice(1).map((article, index) => (
              <Card
                key={article.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex space-x-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${getCategoryColor(article.category)}`}
                        >
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Icon name="Plus" className="w-4 h-4 mr-2" />
              Показать больше новостей
            </Button>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
            <CardContent className="relative p-8 lg:p-12">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <Icon
                  name="Mail"
                  className="w-16 h-16 mx-auto mb-6 text-purple-200"
                />
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Подпишитесь на специальные предложения
                </h3>
                <p className="text-xl text-purple-100 mb-8">
                  Получайте эксклюзивные предложения, новости продуктов и
                  экспертную аналитику
                </p>
                <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Введите ваш email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Подписаться
                  </Button>
                </div>
                <p className="text-sm text-purple-200 mt-4">
                  Нажимая "Подписаться", вы соглашаетесь с обработкой
                  персональных данных
                </p>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
