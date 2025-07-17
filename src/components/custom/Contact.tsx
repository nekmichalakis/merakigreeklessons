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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [selectFocused, setSelectFocused] = useState(false);

  const options = [
    { value: 'private', label: t('contact.opt1') },
    { value: 'group', label: t('contact.opt2') },
    { value: 'book-club', label: t('contact.opt3') },
    { value: 'free-trial', label: t('contact.opt4') },
  ];

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
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                    'className="w-full rounded-md border border-input px-3 bg-background py-2 text-sm shadow-sm',
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
                    className={'w-full focus:outline-none focus:ring-0'}
                    defaultValue=""
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
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
            >
              {t('contact.button')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
