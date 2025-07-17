import { BookOpen, HouseIcon, LibraryIcon, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils.ts';
import { useMemo } from 'react';

const PricingPlans = () => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith('en');
  console.log('Current language:', i18n.language);

  const basePlans = useMemo(
    () => [
      {
        icon: <BookOpen className="w-8 h-8 mx-auto text-chart-3 mb-2" />,
        title: t('pricing.plan1.title'),
        items: [
          { label: t('pricing.plan1.d1'), price: '€25' },

          { label: t('pricing.plan1.d2'), price: '€115' },
          { label: t('pricing.plan1.d3'), price: '€220' },
        ],
      },
      {
        icon: <Users className="w-8 h-8 mx-auto text-chart-6 mb-2" />,
        title: t('pricing.plan2.title'),
        items: [
          { label: t('pricing.plan2.d1'), price: '€15' },
          { label: t('pricing.plan2.d2') },
          { label: t('pricing.plan2.d3') },
          { label: t('pricing.plan2.d4') },
        ],
      },
      {
        icon: <LibraryIcon className="w-8 h-8 mx-auto text-chart-2 mb-2" />,
        title: t('pricing.plan3.title'),
        items: [
          { label: t('pricing.plan3.d1'), price: '€10' },
          { label: t('pricing.plan3.d2') },
          { label: t('pricing.plan3.d3') },
          { label: t('pricing.plan3.d4') },
        ],
      },
    ],
    [t]
  );

  const plans = useMemo(() => {
    return isEnglish
      ? basePlans
      : basePlans.concat({
          icon: <HouseIcon className="w-8 h-8 mx-auto text-chart-1 mb-2" />,
          title: t('pricing.plan4.title'),
          items: [
            { label: t('pricing.plan4.d1'), price: '€10' },
            { label: t('pricing.plan4.d2') },
            { label: t('pricing.plan4.d3') },
          ],
        });
  }, [isEnglish, basePlans, t]);

  return (
    <section
      id="pricing"
      aria-labelledby="services-heading "
      className={'py-12 px-4'}
    >
      <h2 id="services-heading" className="text-3xl font-bold mb-8 text-center">
        {t('pricing.title')}
      </h2>
      <div
        className={cn(
          'grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto',
          {
            'lg:grid-cols-4': !isEnglish,
          }
        )}
      >
        {plans.map((item, i) => (
          <Card key={i}>
            <CardHeader className="text-center">
              {item.icon}
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {item.items.map((item) => (
                  <div
                    key={item.label}
                    className={'flex gap-2 items-center justify-center mb-2'}
                  >
                    <p>{item.label}</p>
                    <p key={item.label} className="font-semibold">
                      {item.price}
                    </p>
                  </div>
                ))}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
