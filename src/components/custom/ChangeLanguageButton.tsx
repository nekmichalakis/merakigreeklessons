import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();
  const [lng, setLng] = useState(i18n.language);

  useEffect(() => {
    const onLangChange = (lng: string) => setLng(lng);
    i18n.on('languageChanged', onLangChange);
    return () => {
      i18n.off('languageChanged', onLangChange);
    };
  }, [i18n]);

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
      {lng === 'en' ? 'ΕΛΛΗΝΙΚΑ' : 'ENGLISH'}
    </Button>
  );
};

export default ChangeLanguageButton;
