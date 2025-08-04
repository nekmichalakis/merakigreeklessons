import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { cn } from '@/lib/utils.ts';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = ({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}) => {
  const { t, i18n } = useTranslation();
  const [selectFocused, setSelectFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const isEnglish = i18n.language.startsWith('en');

  const baseOptions = useMemo(
    () => [
      { value: 'private', label: t('contact.opt1') },
      { value: 'group', label: t('contact.opt2') },
      { value: 'book-club', label: t('contact.opt3') },
      { value: 'free-trial', label: t('contact.opt4') },
    ],
    [t]
  );

  const options = useMemo(() => {
    return isEnglish
      ? baseOptions
      : baseOptions.concat({
          value: 'tutoring',
          label: 'Νεοελληνική Γλώσσα για Μαθητές',
        });
  }, [isEnglish, baseOptions]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current ?? '',
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          toast(t('toast.success'));
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast(t('toast.error'));
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id={'contact'}
      aria-labelledby="contact-heading"
      className="max-w-2xl mx-auto py-12 px-4"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle id="contact-heading" className="text-2xl">
            {t('contact.title')}
          </CardTitle>
          <CardDescription>{t('contact.desc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName"> {t('contact.first')}</Label>
                <Input
                  className={'placeholder:text-sm'}
                  id="firstName"
                  name="firstName"
                  placeholder={t('contact.firstPlace')}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName"> {t('contact.last')}</Label>
                <Input
                  className={'placeholder:text-sm'}
                  id="lastName"
                  name="lastName"
                  placeholder={t('contact.lastPlace')}
                  required
                />
              </div>

              <div className="space-y-2 col-span-2">
                <Label htmlFor="email"> {t('contact.email')}</Label>
                <Input
                  className={'placeholder:text-sm'}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="service"
                  id="service-label"
                  className="block mb-2 font-medium"
                >
                  {t('contact.service')}
                </Label>
                <div
                  className={cn(
                    'relative className="w-full rounded-md border border-input px-3 bg-background py-2 text-sm shadow-sm',
                    {
                      'ring-[3px] ring-ring/50 border-ring': selectFocused,
                    }
                  )}
                >
                  <select
                    onFocus={() => setSelectFocused(true)}
                    onBlur={() => setSelectFocused(false)}
                    id="service"
                    name="service"
                    aria-labelledby="service-label"
                    className="appearance-none bg-white text-gray-900 text-sm focus:outline-none focus:ring-0 block w-full"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                    <ChevronDownIcon
                      width={16}
                      height={16}
                      className={'text-gray-400'}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 col-span-2">
                <Label htmlFor="message"> {t('contact.message')}</Label>
                <Textarea
                  className={'placeholder:text-sm min-h-[120px]'}
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlace')}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-chart-3 hover:bg-chart-3 hover:opacity-80"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  {t('contact.button')}
                </div>
              ) : (
                t('contact.button')
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
