import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Info = () => {
  const { t, i18n } = useTranslation();

  const infoItems = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: 'Email',
      value: ['chrisatz26@gmail.com', 'merakigreeklessons@gmail.com'],
    },
    {
      icon: <InstagramIcon className="size-5 text-primary" />,
      label: 'Instagram',
      value: ['@meraki_greek_lessons'],
    },
    {
      icon: <FacebookIcon className="size-5 text-primary" />,
      label: 'Facebook',
      value: ['Meraki Greek Lessons'],
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: t('info.phone'),
      value: ['+30 6975818708'],
    },
    {
      icon: <MapPin className="size-5 text-primary" />,
      label: t('info.location'),
      value: [t('info.address')],
    },
  ];

  return (
    <motion.section
      key={i18n.language}
      aria-labelledby="contact-info-heading"
      className="max-w-2xl mx-auto py-12 px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-3xl font-bold my-6 text-center"
        id={'contact-info-heading'}
        variants={itemVariants}
      >
        {t('info.title')}
      </motion.h1>
      <motion.div variants={containerVariants} className="space-y-4">
        {infoItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <div>{item.icon}</div>
            <div>
              <p className="font-medium">{item.label}</p>
              {item.value.map((i, idx) => (
                <p key={idx} className="text-muted-foreground">
                  {i}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Info;
