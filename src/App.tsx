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
  Globe,
  Users,
  Clock,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { ThemeDrawer } from '@/components/custom/ThemeDrawer.tsx';
import { Separator } from '@/components/ui/separator.tsx';

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-chart-5 text-card-foreground border-b border-border">
        <div className="container px-4 py-6 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Learn Greek with Maria Konstantinou
            </h1>
            <p className="text-lg">
              Professional Online Greek Language Instruction
            </p>
          </div>
        </div>
      </header>

      <main className="w-full py-8  space-y-12">
        <ThemeDrawer />

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="about-heading" className="text-2xl font-bold mb-4">
              Welcome to Your Greek Learning Journey
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Maria, a certified Greek language teacher with over 10
              years of experience helping students master the beautiful Greek
              language. Whether you're a complete beginner or looking to improve
              your existing skills, I offer personalized online lessons tailored
              to your learning style and goals.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section
          aria-labelledby="video-heading"
          className="flex justify-center"
        >
          <iframe
            id="video-heading"
            title="vimeo-player"
            src="https://player.vimeo.com/video/1045048133?h=cbaa46a6e2"
            width="640"
            height="360"
            allowFullScreen
          />
        </section>

        {/* Services Section */}
        <section
          aria-labelledby="services-heading "
          className={'bg-chart-4 pt-6 pb-10'}
        >
          <h2
            id="services-heading"
            className="text-2xl font-bold text-center mb-8"
          >
            What I Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <BookOpen className="w-8 h-8 mx-auto text-primary mb-2" />
                ),
                title: 'Beginner Lessons',
                desc: 'Start from the basics with the Greek alphabet, pronunciation, and essential vocabulary.',
              },
              {
                icon: <Globe className="w-8 h-8 mx-auto text-primary mb-2" />,
                title: 'Conversational Greek',
                desc: 'Practice speaking and listening skills for everyday conversations and travel.',
              },
              {
                icon: <Users className="w-8 h-8 mx-auto text-primary mb-2" />,
                title: 'Business Greek',
                desc: 'Professional Greek for business meetings, presentations, and workplace communication.',
              },
              {
                icon: <Clock className="w-8 h-8 mx-auto text-primary mb-2" />,
                title: 'Flexible Schedule',
                desc: 'Online lessons that fit your schedule, with evening and weekend options available.',
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader className="text-center">
                  {item.icon}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          aria-labelledby="contact-heading"
          className="max-w-2xl mx-auto"
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Current Greek Level</Label>
                  <select
                    id="level"
                    name="level"
                    className="w-full px-3 py-2 border border-border bg-background text-foreground rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="beginner">Beginner (A1-A2)</option>
                    <option value="intermediate">Intermediate (B1-B2)</option>
                    <option value="advanced">Advanced (C1-C2)</option>
                    <option value="native">Native Speaker</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your Greek learning goals..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
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
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-bold my-6 text-center">
            Contact Information
          </h1>
          <div className="space-y-4">
            {[
              {
                icon: <Mail className="w-5 h-5 text-primary" />,
                label: 'Email',
                value: 'maria.greek.teacher@example.com',
              },
              {
                icon: <Phone className="w-5 h-5 text-primary" />,
                label: 'Phone',
                value: '+30 210 123 4567',
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
      <footer className="bg-foreground text-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Maria Konstantinou - Greek Language Teacher. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
