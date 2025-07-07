import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  BookOpen,
  Users,
  Mail,
  Phone,
  MapPin,
  LibraryIcon,
  CheckIcon,
} from 'lucide-react';
import { ThemeDrawer } from '@/components/custom/ThemeDrawer.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-background text-foreground">
      {/* Header */}
      <header
        className="relative min-h-[100vh] flex justify-center text-card"
        style={{
          backgroundImage: "url('/merakiHero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 pb-16 mx-auto pt-30 max-w-[71rem] text-center flex flex-col">
          <h2 className="text-md md:text-l drop-shadow pb-2">
            {'MERAKI GREEK LESSONS'}
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
            {
              'Learn Greek with Chrisa – A Journey into Language, Culture & Connection'
            }
          </h1>
          <h2 className="text-xl md:text-2xl drop-shadow">
            {
              'Personalized Greek lessons, group classes, and a unique Book Club experience for learners of all levels.'
            }
          </h2>
          <div className={'h-full flex items-end justify-center gap-4'}>
            <Button
              className={
                'bg-chart-2 hover:bg-chart-2 hover:opacity-80 p-6 cursor-pointer font-bold'
              }
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              FREE TRIAL LESSON
            </Button>
            <Button
              className={
                'bg-chart-3 hover:bg-chart-3 hover:opacity-80 p-6 cursor-pointer font-bold'
              }
              onClick={() =>
                document
                  .getElementById('pricing')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              EXPLORE CLASSES
            </Button>
            <Button
              className={
                'bg-chart-3 hover:bg-chart-3 hover:opacity-80 p-6 cursor-pointer font-bold'
              }
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              JOIN THE BOOK CLUB
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <ThemeDrawer />
        {/* About Section */}
        <section aria-labelledby="about-heading" className={'bg-chart-4 pt-12'}>
          <div className="max-w-3xl mx-auto text-center ">
            <h2 id="about-heading" className="text-3xl font-bold mb-8">
              Meet Chrisa
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Hello! I’m Chrisa, a passionate and experienced tutor of Modern
              Greek. I help learners from all over the world discover the beauty
              of the Greek language and culture.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My approach is based on clarity, enjoyment, and personalization.
              Whether you're a beginner or an advanced student, I create a
              supportive and engaging environment focused on real communication
              and cultural connection.
            </p>
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

        {/* PRICING & PLANS */}
        <section
          id="pricing"
          aria-labelledby="services-heading "
          className={'py-12'}
        >
          <h2
            id="services-heading"
            className="text-3xl font-bold mb-8 text-center"
          >
            Pricing & Plans
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <BookOpen className="w-8 h-8 mx-auto text-chart-3 mb-2" />
                ),
                title: 'Private Lessons (1:1)',
                items: [
                  { label: 'Single lesson (60 minutes):', price: '€25' },

                  { label: 'Package of 5 lessons:', price: '€115' },
                  { label: 'Package of 10 lessons:', price: '€220' },
                ],
              },
              {
                icon: <Users className="w-8 h-8 mx-auto text-chart-6 mb-2" />,
                title: 'Group Lessons',
                items: [
                  { label: 'Per person (60 minutes):', price: '€15' },
                  { label: 'Groups are formed based on level and goals' },
                  { label: ' 2–4 people per group' },
                  { label: 'Custom group packages available on request' },
                ],
              },
              {
                icon: (
                  <LibraryIcon className="w-8 h-8 mx-auto text-chart-2 mb-2" />
                ),
                title: 'Online Greek Book Club',
                items: [
                  { label: 'Per session (60 minutes):', price: '€15' },
                  { label: 'Learn Greek through literature & stories' },
                  { label: 'Monthly or bi-weekly group discussions' },
                  { label: 'Great for intermediate and advanced learners' },
                ],
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader className="text-center">
                  {item.icon}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {item.items.map((item) => (
                      <div
                        key={item.label}
                        className={
                          'flex gap-2 items-center justify-center mb-2'
                        }
                      >
                        <p>{item.label}</p>
                        <p key={item.label} className="font-semibold">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Book Club Section */}
        <section
          id="book-club"
          aria-labelledby="book-club-heading"
          className="py-12 bg-chart-2 text-card"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2
              id="book-club-heading"
              className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"
            >
              <span role="img" aria-label="books">
                📚
              </span>{' '}
              Join the Greek Book Club!
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              If you love language and literature, this is for you.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              We read modern short stories, poems, and adapted texts suitable
              for your level. Sessions include vocabulary, reading, and open
              discussion — a fun, enriching way to connect with Greek.
            </p>
            <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
              {[
                'For intermediate & advanced learners',
                '€15 per session',
                'Monthly or bi-weekly',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-chart-6 mt-1" />
                  <span className="text-lg">{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Button
                className="mt-4 bg-background hover:bg-background text-foreground p-6 font-bold hover:opacity-90"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                JOIN THE BOOK CLUB
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          aria-labelledby="testimonials-heading"
          className="py-12 bg-chart-4 text-foreground"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 id="testimonials-heading" className="text-3xl font-bold mb-8">
              What Students Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Sophia, UK',
                  text: "Chrisa's lessons are fun, structured, and so effective. I feel more confident speaking Greek every week!",
                },
                {
                  name: 'Nikos, Germany',
                  text: 'The Book Club has helped me connect with the language on a deeper level. Highly recommended!',
                },
                {
                  name: 'Elena, USA',
                  text: 'I was nervous to start, but Chrisa made me feel welcome and supported. She’s a gifted teacher!',
                },
              ].map((testimonial, i) => (
                <Card key={i} className="h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic mb-4">
                      “{testimonial.text}”
                    </blockquote>
                    <p className="text-sm font-semibold text-right text-muted-foreground">
                      – {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id={'contact'}
          aria-labelledby="contact-heading"
          className="max-w-2xl mx-auto py-12"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle id="contact-heading" className="text-2xl">
                Get in Touch
              </CardTitle>
              <CardDescription>
                Ready to start learning Greek? Send me a message and I'll get
                back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                    />
                  </div>

                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/*TODO: FIX THISSSS*/}
                  <div className="space-y-2">
                    <Label htmlFor="service" id={'service-label'}>
                      Service
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="service"
                        aria-labelledby="service"
                        className={'w-full'}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="private">
                            Private Lesson
                          </SelectItem>
                          <SelectItem value="group">Group</SelectItem>
                          <SelectItem value="book-club">Book Club</SelectItem>
                          <SelectItem value="free-trial">Free Trial</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your Greek learning goals..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-chart-3 hover:bg-chart-3 hover:opacity-80"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <Separator className={'max-w-[80%] mx-auto'} />

        {/* Contact Information */}
        <section
          aria-labelledby="contact-info-heading"
          className="max-w-2xl mx-auto py-12"
        >
          <h1
            className="text-3xl font-bold my-6 text-center"
            id={'contact-info-heading'}
          >
            Contact Information
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
                label: 'Phone',
                value: '+30 6975818708',
              },
              {
                icon: <MapPin className="w-5 h-5 text-primary" />,
                label: 'Location',
                value: 'Athens, Greece (Online lessons worldwide)',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.icon}
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-chart-3 text-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-background">
            © 2025 Meraki Greek Lessons - all rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
