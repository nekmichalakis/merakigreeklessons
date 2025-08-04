import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { cn } from '@/lib/utils.ts';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator.tsx';

const TestimonialDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { t } = useTranslation();

  const extendedTestimonials = [
    {
      name: 'Blake, 2025',
      text: t('testimonials.t4'),
    },
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
    {
      name: 'Theo, 2025',
      text: t('testimonials.t5'),
    },
    {
      name: 'Csizmadia, 2025',
      text: t('testimonials.t6'),
    },
    {
      name: 'Tanya, 2024',
      text: t('testimonials.t7'),
    },
    {
      name: 'Elizabeth, 2024',
      text: t('testimonials.t8'),
    },
    {
      name: 'Florin, 2024',
      text: t('testimonials.t9'),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <DialogContent className="w-full max-w-[95vw] md:max-w-[50vw] max-h-[95vh] overflow-y-auto px-16 py-8 gap-8">
        <DialogHeader>
          <DialogTitle>{t('testimonials.all')}</DialogTitle>
          <DialogDescription className={'sr-only'}>
            {'Extra testimonials'}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          {extendedTestimonials.map((testimonial, i) => (
            <>
              <div key={i} className={'flex flex-col gap-4'}>
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      'size-12 rounded-sm text-card flex items-center justify-center text-bold text-xl',
                      {
                        'bg-chart-6 ': i % 3 === 0,
                        'bg-chart-3 text-white': i % 3 === 1,
                        'bg-chart-7 ': i % 3 === 2,
                      }
                    )}
                  >
                    {testimonial.name[0].toUpperCase()}
                  </div>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>{'★'}</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg italic">
                  “{testimonial.text}”
                </blockquote>
                <p className="text-sm font-semibold text-right text-muted-foreground">
                  – {testimonial.name}
                </p>
              </div>
              {i !== extendedTestimonials.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialDialog;
