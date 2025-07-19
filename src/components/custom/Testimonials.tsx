import { Card, CardContent } from '@/components/ui/card.tsx';
import { cn } from '@/lib/utils.ts';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const MotionCard = motion(Card);

const Testimonials = () => {
  const { t, i18n } = useTranslation();

  const testimonials = [
    {
      name: 'Alexandra, 2025',
      text: t('testimonials.t1'),
    },
    {
      name: 'Serg, 2025',
      text: t('testimonials.t2'),
    },
    {
      name: 'Alexandros, 2025',
      text: t('testimonials.t3'),
    },
  ];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-12 bg-chart-4 text-foreground"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 id="testimonials-heading" className="text-3xl font-bold mb-8">
          {t('testimonials.title')}
        </h2>
        <motion.div
          key={i18n.language}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, i) => (
            <MotionCard
              key={i}
              variants={cardVariants}
              className="h-full flex flex-col justify-between"
            >
              <CardContent className="p-6 pt-1">
                <div
                  className={cn(
                    'size-12 rounded-sm text-card flex items-center justify-center text-bold mb-3 text-xl',
                    {
                      'bg-chart-6 ': i === 0,
                      'bg-chart-3 text-white': i === 1,
                      'bg-chart-7 ': i === 2,
                    }
                  )}
                >
                  {testimonial.name[0].toUpperCase()}
                </div>
                <blockquote className="text-lg italic mb-4">
                  “{testimonial.text}”
                </blockquote>
                <p className="text-sm font-semibold text-right text-muted-foreground">
                  – {testimonial.name}
                </p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
