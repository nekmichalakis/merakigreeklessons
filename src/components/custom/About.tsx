import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
        <div
          tabIndex={0}
          className="relative w-full max-w-[640px] aspect-video"
        >
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-chart-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
            </div>
          )}
          <iframe
            id="video-heading"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1045048133?h=cbaa46a6e2"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
