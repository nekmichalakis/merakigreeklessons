import { Separator } from '@/components/ui/separator.tsx';
import Footer from '@/components/custom/Footer.tsx';
import ChangeLanguageButton from '@/components/custom/ChangeLanguageButton.tsx';
import Header from '@/components/custom/Header.tsx';
import Logo from '@/components/custom/Logo.tsx';
import About from '@/components/custom/About.tsx';
import PricingPlans from '@/components/custom/PricingPlans.tsx';
import BookClub from '@/components/custom/BookClub.tsx';
import Testimonials from '@/components/custom/Testimonials.tsx';
import Contact from '@/components/custom/Contact.tsx';
import Info from '@/components/custom/Info.tsx';

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-background text-foreground">
      <Logo />
      <ChangeLanguageButton />
      <Header />

      <main className="w-full">
        <About />
        <PricingPlans />
        <BookClub />
        <Testimonials />
        <Contact />
        <Separator className={'max-w-[80%] mx-auto'} />
        <Info />
      </main>

      <Footer />
    </div>
  );
}
