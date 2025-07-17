import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="contact-info-heading"
      className="max-w-2xl mx-auto py-12 px-12"
    >
      <h1
        className="text-3xl font-bold my-6 text-center"
        id={'contact-info-heading'}
      >
        {t('info.title')}
      </h1>
      <div className="space-y-4">
        {[
          {
            icon: <Mail className="w-5 h-5 text-primary" />,
            label: 'Email',
            value: 'chrisatz26@gmail.com',
          },
          {
            icon: <Phone className="w-5 h-5 text-primary" />,
            label: t('info.phone'),
            value: '+30 6975818708',
          },
          {
            icon: <MapPin className="size-5 text-primary" />,
            label: t('info.location'),
            value: t('info.address'),
          },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div>{item.icon}</div>
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-muted-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
