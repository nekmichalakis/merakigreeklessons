import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="about-heading" className={'bg-chart-4 pt-12'}>
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
        <iframe
          id="video-heading"
          title="vimeo-player"
          src="https://player.vimeo.com/video/1045048133?h=cbaa46a6e2"
          width="640"
          height="360"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default About;
