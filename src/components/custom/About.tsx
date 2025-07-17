import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="about-heading"
      className={'bg-chart-4 pt-12 px-4'}
    >
      <div className="max-w-3xl mx-auto text-center ">
        <h2 id="about-heading" className="text-3xl font-bold mb-8">
          {t('about.title')}
        </h2>
        <p className="text-lg leading-relaxed mb-6">{t('about.desc1')}</p>
        <p className="text-lg leading-relaxed mb-6">{t('about.desc2')}</p>
      </div>
      <div
        aria-labelledby="video-heading"
        className="flex justify-center pb-12 bg-chart-4"
      >
        <div className="relative w-full max-w-[640px] aspect-video">
          <iframe
            id="video-heading"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1045048133?h=cbaa46a6e2"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default About;
