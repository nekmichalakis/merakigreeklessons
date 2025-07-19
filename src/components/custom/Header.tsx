import acropolis from '@/assets/acropolis.jpg';
import { Button } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MotionButton = motion(Button);

const Header = ({
  setSelectedOption,
}: {
  setSelectedOption: (option: string) => void;
}) => {
  const { t, i18n } = useTranslation();

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
      <motion.div
        key={i18n.language}
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 pb-16 px-4 mx-auto max-w-[71rem] text-center flex w-full flex-col"
      >
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
            'flex flex-col md:flex-row w-2/3 self-center md:items-end justify-center gap-4 pb-4'
          }
        >
          <MotionButton
            className={
              'bg-chart-2 hover:bg-chart-2 hover:opacity-90 p-6 cursor-pointer font-bold'
            }
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
              setSelectedOption('free-trial');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('header.button1')}
          </MotionButton>
          <MotionButton
            className={
              'bg-chart-3 hover:bg-chart-3 hover:opacity-90 p-6 cursor-pointer font-bold'
            }
            onClick={() =>
              document
                .getElementById('pricing')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('header.button2')}
          </MotionButton>
          <MotionButton
            className={
              'bg-chart-3 hover:bg-chart-3 hover:opacity-90 p-6 cursor-pointer font-bold'
            }
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
              setSelectedOption('book-club');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('header.button3')}
          </MotionButton>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
