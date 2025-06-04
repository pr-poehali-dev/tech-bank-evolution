
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const LoanCalculator = () => {
  const [amount, setAmount] = useState([1000000]);
  const [term, setTerm] = useState([24]);
  const [rate] = useState(8.9);

  const monthlyPayment = Math.round((amount[0] * (rate / 100 / 12)) / (1 - Math.pow(1 + rate / 100 / 12, -term[0])));
  const totalPayment = monthlyPayment * term[0];
  const overpayment = totalPayment - amount[0];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-green-100 text-green-700">
            <Icon name="Calculator" className="w-4 h-4 mr-2" />
            Кредитный калькулятор
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Рассчитайте
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}ваш кредит
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте размер ежемесячного платежа и получите предварительное решение
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator inputs */}
                <div className="space-y-8">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      Сумма кредита
                    </Label>
                    <div className="space-y-4">
                      <Slider
                        value={amount}
                        onValueChange={setAmount}
                        max={5000000}
                        min={100000}
                        step={100000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>100 000 ₽</span>
                        <span className="font-bold text-xl text-purple-600">
                          {formatNumber(amount[0])} ₽
                        </span>
                        <span>5 000 000 ₽</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">
                      Срок кредита
                    </Label>
                    <div className="space-y-4">
                      <Slider
                        value={term}
                        onValueChange={setTerm}
                        max={84}
                        min={6}
                        step={6}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>6 месяцев</span>
                        <span className="font-bold text-xl text-purple-600">
                          {term[0]} {term[0] > 4 ? 'месяцев' : 'месяца'}
                        </span>
                        <span>84 месяца</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Процентная ставка</span>
                      <span className="text-2xl font-bold text-purple-600">{rate}%</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Индивидуальная ставка для вас будет рассчитана при подаче заявки
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Результат расчета</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white text-center">
                      <div className="text-sm opacity-90 mb-2">Ежемесячный платеж</div>
                      <div className="text-3xl font-bold">{formatNumber(monthlyPayment)} ₽</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-2">Переплата</div>
                        <div className="text-xl font-bold text-gray-900">
                          {formatNumber(overpayment)} ₽
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-2">Общая сумма</div>
                        <div className="text-xl font-bold text-gray-900">
                          {formatNumber(totalPayment)} ₽
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 Отлично! Создаpt-6">
                    ю современный сайт для N<Button className="w-full bg-gradient-to-r from-purple-600 to-blueeoBank — это напо-600 hover:from-purple-700 hover:to-blue-700 минает мне лучшh-12">
                      ие решения от Revolut и Tinkoff с их фокусом на пользовательский опыт и инновации! 

Для первой версии я<Icon name="FileText" className="w-5 h-5 mr-2" />
                      Подать заявку на кредит
                    </Button>
                    <Button variant="outline" className="w-full h-12">
                      <Icon name="Download" className="w- создам:
* **Главную страницу** с интеграцией вс5 h-5 mr-2" />
                      Сохранить расчет
                    </Button>
                  </div>

                  <div className="text-center text-sm text-grayех блоков (Index)
* **Навигационный хедер** с меню и-600">
                    <Icon name="Shield" className="w-4 h- входом в ЛК (4 inline mr-1" />
                    РешHeader) 
* **Промо-секцию** с акциями и предложениями (Hero)
* **Блок "ение по заявке за 30 секунд
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  Почему мы изменились");
};

export default LoanCalculator;
