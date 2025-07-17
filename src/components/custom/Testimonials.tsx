import { Card, CardContent } from '@/components/ui/card.tsx';
import { cn } from '@/lib/utils.ts';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="h-full flex flex-col justify-between">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
