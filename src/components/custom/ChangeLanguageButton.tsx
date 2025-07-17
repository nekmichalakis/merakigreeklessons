import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';

const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  const handleLng = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'gr' : 'en');
  };

  return (
    <Button
      onClick={handleLng}
      type={'button'}
      variant={'ghost'}
      className="absolute cursor-pointer text-chart-4 text-lg top-4 right-6 z-50 hover:bg-transparent hover:text-chart-6"
      aria-label="Language"
    >
      {i18n.language === 'en' ? 'ΕΛΛΗΝΙΚΑ' : 'ENGLISH'}
    </Button>
  );
};

export default ChangeLanguageButton;
