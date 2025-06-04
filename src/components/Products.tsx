
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon7 (495) 123-45- from "@/components/ui/icon";68'
    },
    {
      id: 3,
      name: '

const Products = () => {
  const products = [
    {
      id: "credits",
      title: "Потребительские кредиты",
      description: "Деньги на любые цели под 0.1% в первый месяц",
      icon: "Banknote",
      color: "from-purple-500 to-pink-500",
      features: ["До 3 млн рублей", "Решение за 30 секунд", "Без справок"],
      rate: "от 4.9%",
      popularNeoBank Арбат',
      address: 'ул. Арбат, 25',
      hours: 'Пн-Пт: 9:00-19:00, Сб: 10:00-17:00',
      services: ['Кредиты', 'Карты', 'Страхование'],
      metro: 'Арбатская',
      phone: '+7 (495) 123-45-69'
    }
  ];

  return (
    <section id="offices" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className=": true
    },
    {
      id: "cards",
      title: "mb-6 bg-blue-100 text-blue-700">
            <Icon name="MapPin" className="w-4 h-4 mr-2" />
            Офисы иКарты с кешбеком",
       банкоматы
          </Badge>
          description: "Возвращаем до 25% за покупки в любимых катег
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Мы рядом с
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}вами
            </span>
          </h2>
          
          <p className="ориях",
      icon: "CreditCard",
      color: "from-blue-500 to-cyan-500",
      features: ["Кешбек до 25%", "Без комиссий", "Apple/Google Pay"],
      rate: "доtext-xl text-gray-600 max-w-3xl mx-auto"> 25%",
      popular: true
    },
    {
      id: "investments",
            Более 100 офисов и 500 банкоматов по всей России
      title: "Инвестиции",
      description:. Найдите ближайший к в "Готовые стратегии иам
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters and search */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4"> индивидуальные портфели",
      icon: "TrendingUp",
      color: "from-green-500 to-emerald-500",
      features: ["Доходность до 15%", "ИИ-советник", "От 1000 рПоиск офиса</h3ублей"],
      rate: "до 15%",
      popular: false
    },
    {
      id: "insurance",
      title: "Страхование",
      description: "Защ>
                <div className="space-y-4">
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-3 итите себя и близких сw-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Поиск по умным страхованием",
       адресу или метро"
                      value={icon: "Shield",
      color: "from-orange-500 to-red-500",
      features: ["Онлайн оформление", "searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"Быстрые выплаты", "24/7 поддержка"],
      rate: "от 99
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Город</label>
                    <div₽",
      popular: false
    },
    {
      id: "travel",
      title: "Путешествия",
      description: "Билеты, отели и className="grid grid-cols-2 gap-2">
                      {cities.map(city => (
                        <Button туры со скидками до 30%",
      icon
                          key={city.id}
                          variant={selectedCity === city.id ?: "Plane",
      color: "from-violet-500 to- "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCity(city.id)}
                          purple-500",
      features: ["className={selectedCity === city.id ? "bg-purple-600 hoverСкидки до 30%", "Страховка в подарок", ":bg-purple-700" : ""}
                        >
                          {city.name}
                        </Button>
                      ))}
                    </div>Рассрочка 0%"],
      rate: "скидка 30%",
      popular: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* City stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  {cities.find(c => c.id === selectedCity)?.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray">
          <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-700">
            <Icon name="Star" className="w-4 h-4 mr-2" />
            Популярные продукты
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Выберите свой
            <span className="-600">Офисы</span>
                    <span className="font-bold text-purple-600">
                      {cities.find(c => c.id === selectedCity)?.offices}
                    </span>
                  </div>
                  <div className="flex items-center justify-bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              between">
                    <span className="text-gray-600">Банкоматы</span>
                    <span className="font-bold text-blue-600">
                {" "}
              идеальный продукт
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">      {cities.find(c => c.id === selectedCity)?.atms}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map
            От кредитов до инвестиций — у нас есть реш placeholder */}
          <div className="lg:col-span-2">
            ение для каждой финансовой задачи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><Card className="h-96 lg:h-full">
              <CardContent
          {products.map((product, className="p-0 h-full">
                <div className="relative h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Icon name index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate="Map" className="w--fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {product.popular && (8 h-8 text-white"
                <div className="absolute -top-3 left-6 />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Интерактивная карта</h3>
                    <p className="text-gray-600 mb-4">Карта с отметками офисов и банк">
                  <Badge classNameоматов</p>
                    ="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Icon name="Crown" className="w-3 h-3 mr-1" />
                    Популярное
                  </Badge>
                </div>
              )}

              <div className="flex items-start justify<Button variant="outline">
                      <Icon name="Navigation" className="w-4 h-4 mr-2" />
                      Открыть карту в-between mb-4">
                <div полном размере
                
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center    </Button>
                  </div>
                  
                  {/* Map justify-center group-hover:scale-110 transition-transform duration-300`} markers simulation */}
                  
                >
                  <Icon
                    name={product.icon as<div className="absolute top-20 left-20 w-4 any}
                    className="w-7 h-7 text-white"
                  />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{product.rate}</div>
                  <div className=" h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-32 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-pulse">text-sm text-gray-500">ставка/скидка</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office list */}
        <div className="mt-12">
          -purple-600 transition-colors">
                {product.title}
              </h3>

              <p className="<h3 className="text-2xl font-text-gray-600 mb-4 bold text-gray-900 mb-6">
            Офисы в городе {cities.find(c => c.id === selectedCity)?.name}leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map(office => (
              <Card key={office.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{office.name}</h4>
                    <Badge variant="secondary" className="bg-green-600">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-100 text-green-700">
                      Открыт
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <Icon name="MapPin" className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="Clock" className="w-4-600 hover:from-purple-700 hover:to-blue-700 group-hover:scale-105 transition-transform">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
              </Button>

              <div className="absolute inset-0 bg-gradient-to-r from-purple- h-4 text-gray-400 mt-0.5 flex-shr600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 ink-0" />
                      <span className="text-gray-600">{office.hours}</span>
                    </divlg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              >
                    
                    <div className="flex items-start space-x-2">
                      <Icon name="TrainНе нашли подходящий продук" className="w-4 h-4 text-gray-400 mt-0т?
            </h3>
            .5 flex-shrink-0" />
                      <span className="text-gray-600">м. {office.metro<p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              На}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-1">
                    {office.services.mapши специалисты помогут подобрать индивидуальное решение именно для ваших потребностей
            </p>
            <div className="flex flex-((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Phone" className="w-4 h-4 mr-1" />
                      Позвонить
                    </Button>
                    <Button size="sm" variant="outline" className
                Чат с консультантом
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Заказ="flex-1">
                      <Icon name="Navigation" className="w-4 h-4 mr-1"ать звонок
              </Button>
            </div>
          </div>
        </div>
      </div> />
                      Маршрут
                    </Button>
                  </div>
                </CardContent>
              </Car
    </section>
  );
};

export default Products;
