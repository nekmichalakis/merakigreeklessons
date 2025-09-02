import { useTranslation } from 'react-i18next';
import espaBack from '@/assets/espaBack.jpg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-chart-3 text-card border-t border-border mt-12 px-12 ">
      <div className="container mx-auto px-4 py-6 text-center flex flex-col items-center gap-4">
        <img src={espaBack} alt={'Espa banner'} className={'w-1/2 md:w-1/4'} />
        <p className="text-background">{t('footer.text1')}</p>
      </div>
    </footer>
  );
};

export default Footer;
