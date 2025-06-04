import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerSections = [
    {
      title: "Продукты",
      links: [
        { name: "Кредиты", href: "#credits" },
        { name: "Карты", href: "#cards" },
        { name: "Инвестиции", href: "#investments" },
        { name: "Страхование", href: "#insurance" },
        { name: "Путешествия", href: "#travel" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { name: "Центр помощи", href: "#help" },
        { name: "Контакты", href: "#contacts" },
        { name: "Отделения", href: "#offices" },
        { name: "Банкоматы", href: "#atms" },
        { name: "Тарифы", href: "#tariffs" },
      ],
    },
    {
      title: "О банке",
      links: [
        { name: "О нас", href: "#about" },
        { name: "Карьера", href: "#career" },
        { name: "Пресс-центр", href: "#press" },
        { name: "Инвесторам", href: "#investors" },
        { name: "Партнерам", href: "#partners" },
      ],
    },
    {
      title: "Правовая информация",
      links: [
        { name: "Лицензии", href: "#licenses" },
        { name: "Тарифы", href: "#tariffs" },
        { name: "Договоры", href: "#contracts" },
        { name: "Конфиденциальность", href: "#privacy" },
        { name: "Раскрытие информации", href: "#disclosure" },
      ],
    },
  ];

  const socialLinks = [
    { name: "VK", icon: "Share", href: "#" },
    { name: "Telegram", icon: "MessageCircle", href: "#" },
    { name: "YouTube", icon: "Play", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
  ];

  const mobileApps = [
    { name: "App Store", icon: "Apple", href: "#" },
    { name: "Google Play", icon: "Smartphone", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NeoBank
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Банк нового поколения для твоей жизни. Современные финансовые
              решения с использованием передовых технологий.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-semibold">8 800 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="w-5 h-5 text-purple-400" />
                <span>support@neobank.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" className="w-5 h-5 text-purple-400" />
                <span>Круглосуточная поддержка</span>
              </div>
            </div>

            {/* Mobile apps */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-gray-300">
                Мобильные приложения:
              </div>
              <div className="flex space-x-3">
                {mobileApps.map((app) => (
                  <Button
                    key={app.name}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Icon name={app.icon as any} className="w-4 h-4 mr-2" />
                    {app.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-lg text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors story-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Copyright and legal */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-8 text-sm text-gray-400">
            <div>© 2024 NeoBank. Все права защищены.</div>
            <div>Лицензия Банка России № 1234</div>
            <div>Член системы страхования вкладов</div>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400 mr-2">Мы в соцсетях:</span>
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
              >
                <Icon name={social.icon as any} className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-8 p-6 bg-gray-800 rounded-xl">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Важная информация:</strong> Все указанные процентные ставки
            и условия являются предварительными и могут быть изменены при
            рассмотрении заявки. Окончательные условия предоставления банковских
            продуктов определяются после проведения скоринговой оценки. НКО
            "НеоБанк" (ООО), лицензия Банка России № 1234 от 01.01.2020.
            Реклама. 18+
          </p>
        </div>
      </div>

      {/* Floating action */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl hover:scale-110 transition-all duration-300">
          <Icon name="MessageCircle" className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
