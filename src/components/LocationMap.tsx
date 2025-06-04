import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const LocationMap = () => {
  const [selectedCity, setSelectedCity] = useState("moscow");

  const cities = [
    { id: "moscow", name: "Москва", offices: 45, atms: 320 },
    { id: "spb", name: "СПб", offices: 28, atms: 180 },
    { id: "ekb", name: "Екатеринбург", offices: 12, atms: 85 },
    { id: "nsk", name: "Новосибирск", offices: 8, atms: 65 },
  ];

  const locations = {
    moscow: [
      {
        name: "Офис на Тверской",
        address: "ул. Тверская, 12, стр. 1",
        type: "office",
        hours: "Пн-Пт: 9:00-20:00, Сб: 10:00-18:00",
        services: ["Кредиты", "Карты", "Инвестиции", "Консультации"],
      },
      {
        name: "Банкомат ТЦ Атриум",
        address: "ул. Земляной Вал, 33",
        type: "atm",
        hours: "Круглосуточно",
        services: ["Снятие наличных", "Пополнение карты", "Платежи"],
      },
      {
        name: "Офис в Сити",
        address: "Пресненская наб., 6, стр. 2",
        type: "office",
        hours: "Пн-Пт: 8:00-21:00, Сб-Вс: 10:00-18:00",
        services: ["VIP-обслуживание", "Private Banking", "Инвестиции"],
      },
    ],
  };

  const currentLocations = locations.moscow || [];

  return (
    <section
      id="locations"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            <Icon name="MapPin" className="w-4 h-4 mr-2" />
            Офисы и банкоматы
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Мы рядом
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              с вами
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 500 точек обслуживания по всей России — найдите ближайший офис
            или банкомат
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* City selector and stats */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Выберите город:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city) => (
                  <Button
                    key={city.id}
                    variant={selectedCity === city.id ? "default" : "outline"}
                    onClick={() => setSelectedCity(city.id)}
                    className="justify-start"
                  >
                    <Icon name="MapPin" className="w-4 h-4 mr-2" />
                    {city.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {cities.find((c) => c.id === selectedCity)?.offices}
                  </div>
                  <div className="text-gray-700 flex items-center justify-center">
                    <Icon name="Building" className="w-4 h-4 mr-2" />
                    офисов
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {cities.find((c) => c.id === selectedCity)?.atms}
                  </div>
                  <div className="text-gray-700 flex items-center justify-center">
                    <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                    банкоматов
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                <Icon name="Navigation" className="w-4 h-4 mr-2" />
                Найти ближайший офис
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>

          {/* Map placeholder and locations */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interactive map placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="Map"
                    className="w-16 h-16 text-blue-600 mb-4 mx-auto"
                  />
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    Интерактивная карта
                  </div>
                  <div className="text-gray-600">
                    {cities.find((c) => c.id === selectedCity)?.name}
                  </div>
                </div>

                {/* Mock map pins */}
                <div className="absolute top-4 left-8">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
                    <Icon name="Building" className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-8 right-12">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                    <Icon name="CreditCard" className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute top-12 right-8">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
                    <Icon name="Building" className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Locations list */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="office">Офисы</TabsTrigger>
                <TabsTrigger value="atm">Банкоматы</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                {currentLocations.map((location, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              location.type === "office"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            <Icon
                              name={
                                location.type === "office"
                                  ? "Building"
                                  : "CreditCard"
                              }
                              className="w-5 h-5"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">
                              {location.name}
                            </h4>
                            <p className="text-gray-600 mb-2">
                              {location.address}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Icon name="Clock" className="w-4 h-4 mr-1" />
                              {location.hours}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Navigation" className="w-4 h-4 mr-1" />
                          Маршрут
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="office">
                <div className="text-center py-8 text-gray-500">
                  Фильтр по офисам
                </div>
              </TabsContent>

              <TabsContent value="atm">
                <div className="text-center py-8 text-gray-500">
                  Фильтр по банкоматам
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
