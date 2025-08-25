import {
  BookOpen,
  HouseIcon,
  LibraryIcon,
  NotebookPenIcon,
  Users,
} from 'lucide-react';
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
import { motion, type Variants } from 'framer-motion';

const MotionCard = motion(Card);

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Adjust delay between cards
    },
  },
};

const PricingPlans = ({
  setSelectedOption,
}: {
  setSelectedOption: (option: string) => void;
}) => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith('en');

  const basePlans = useMemo(
    () => [
      {
        value: 'private',
        icon: <BookOpen className="w-8 h-8 mx-auto text-chart-3 mb-2" />,
        title: t('pricing.plan1.title'),
        items: [
          { label: t('pricing.plan1.d1'), price: '€25' },

          { label: t('pricing.plan1.d2'), price: '€115' },
          { label: t('pricing.plan1.d3'), price: '€220' },
        ],
      },
      {
        value: 'group',
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
        value: 'book-club',
        icon: <LibraryIcon className="w-8 h-8 mx-auto text-chart-2 mb-2" />,
        title: t('pricing.plan3.title'),
        items: [
          { label: t('pricing.plan3.d1'), price: '€10' },
          { label: t('pricing.plan3.d2') },
          { label: t('pricing.plan3.d3') },
          { label: t('pricing.plan3.d4') },
        ],
      },
      {
        value: 'copywriting',
        icon: <NotebookPenIcon className="w-8 h-8 mx-auto text-chart-1 mb-2" />,
        title: t('pricing.plan5.title'),
        items: [
          { label: t('pricing.plan5.d1') },
          { label: t('pricing.plan5.d2') },
          { label: t('pricing.plan5.d3') },
          { label: t('pricing.plan5.d4') },
        ],
      },
    ],
    [t, i18n.language]
  );

  const plans = useMemo(() => {
    return isEnglish
      ? basePlans
      : basePlans.concat({
          value: 'tutoring',
          icon: <HouseIcon className="w-8 h-8 mx-auto text-chart-3 mb-2" />,
          title: t('pricing.plan4.title'),
          items: [
            { label: t('pricing.plan4.d1'), price: '€15' },
            { label: t('pricing.plan4.d2') },
            { label: t('pricing.plan4.d3') },
            { label: ' ' },
            { label: ' ' },
            { label: ' ' },
          ],
        });
  }, [isEnglish, basePlans, t, i18n.language]);

  return (
    <section
      id="pricing"
      aria-labelledby="services-heading "
      className={'py-12 px-4'}
    >
      <h2 id="services-heading" className="text-3xl font-bold mb-8 text-center">
        {t('pricing.title')}
      </h2>
      <motion.div
        key={plans.length}
        className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {plans.map((item, i) => (
          <MotionCard
            key={i}
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
              setSelectedOption(item.value);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
                setSelectedOption(item.value);
              }
            }}
            variants={cardVariants}
            className={cn(
              'w-full sm:w-[300px] cursor-pointer transition hover:shadow-lg',
              {
                'md:w-[23%]': plans.length === 4,
                'md:w-[30%]': plans.length === 5,
              }
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardHeader className="text-center flex flex-col items-center">
              {item.icon}
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {item.items.map((item, index) => (
                  <div
                    key={item.label || index}
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
          </MotionCard>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingPlans;
