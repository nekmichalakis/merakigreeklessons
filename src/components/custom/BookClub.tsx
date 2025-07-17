import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';

const BookClub = () => {
  const { t } = useTranslation();

  return (
    <section
      id="book-club"
      aria-labelledby="book-club-heading"
      className="py-12 bg-chart-2 text-card"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          id="book-club-heading"
          className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="books">
            📚
          </span>{' '}
          {t('book.title')}
        </h2>
        <p className="text-lg leading-relaxed mb-4">{t('book.desc1')}</p>
        <p className="text-lg font-medium leading-relaxed mb-4">
          {t('book.desc2')}
        </p>
        <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
          {[t('book.item1'), t('book.item2'), t('book.item3')].map(
            (text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-chart-6 mt-1" />
                <span className="text-lg">{text}</span>
              </li>
            )
          )}
        </ul>
        <div className="flex justify-center">
          <Button
            className="mt-4 bg-background hover:bg-background text-foreground p-6 font-bold hover:opacity-90"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('book.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookClub;
