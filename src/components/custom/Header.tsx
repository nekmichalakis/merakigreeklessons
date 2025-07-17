import acropolis from '@/assets/acropolis.jpg';
import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header
      id={'hero'}
      className="relative min-h-[100vh] flex justify-center text-card"
      style={{
        backgroundImage: `url(${acropolis})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 pb-16 px-4 mx-auto max-w-[71rem] text-center flex w-full flex-col">
        <div className={'flex flex-1 flex-col justify-center'}>
          <h2 className="text-md md:text-l drop-shadow pb-2">
            {t('header.title')}
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
            {t('header.description')}
          </h1>
          <h2 className="text-xl md:text-2xl drop-shadow">
            {t('header.subtitle')}
          </h2>
        </div>
        <div
          className={
            'flex flex-col md:flex-row items-center md:items-end justify-center gap-4 pb-4'
          }
        >
          <Button
            className={
              'bg-chart-2 hover:bg-chart-2 hover:opacity-80 p-6 cursor-pointer font-bold'
            }
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('header.button1')}
          </Button>
          <Button
            className={
              'bg-chart-3 hover:bg-chart-3 hover:opacity-80 p-6 cursor-pointer font-bold'
            }
            onClick={() =>
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('header.button2')}
          </Button>
          <Button
            className={
              'bg-chart-3 hover:bg-chart-3 hover:opacity-80 p-6 cursor-pointer font-bold'
            }
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('header.button3')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
