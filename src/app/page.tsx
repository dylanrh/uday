import Image from 'next/image';
import {
  Heart,
  Users,
  Target,
  Quote,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { TeamSection } from '@/components/our-team';

const HeroSection = () => (
  <section
    id="home"
    className="relative flex h-[80vh] min-h-[500px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
    style={{ backgroundImage: 'url("/images/uday_run.jpg")' }}
    data-ai-hint='charity community'
  > 
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 flex flex-col items-center space-y-6 p-4">
      <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
        Audai Shakour Foundation
      </h1>
      <p className="max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
      The Audai Shakour Foundation (Audai.org) is a 501(c)(3) non-profit dedicated to enhancing the lives of people living in impoverished conditions. Audai was a young man who was committed to helping those in need, and we are continuing his legacy by supporting the causes he was passionate about--helping one person, one community at a time.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="#team">
            Get Involved <ArrowRight className="ml-2" />
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="https://audai.org/donate" target="_blank" rel="noopener noreferrer">
            Donate Now
          </a>
        </Button>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <Badge>Audai Shakour</Badge>
          <h2 className="font-headline text-4xl font-bold">
            About Audai
          </h2>
          <p className="text-lg text-muted-foreground">
          A week after Audai passed away, I (Audai’s father) woke up remembering an incident in 1991 when Audai was only six years old.  We were taking a walk as a family on a Saturday afternoon to pick up a few books when suddenly I noticed Audai was missing.  I looked back and saw him talking to a homeless man a few yards behind us.  He ran back to me and asked for some money, “Dad, the man over there is hungry, and the money can help buy his lunch.”  From his childhood to his last breath, Audai lived by that example, always wanting to make someone happy.
          </p>
          <p className="text-lg text-muted-foreground">
          A few days later, I went to his bank to inform his death.  When I pulled his wallet to get his bank card, I found a little card with a prayer for generosity from St. Ignatius Loyola.  At that very moment, I knew he wanted us to continue the charitable work that he was so passionate about.  He always said, “Life is better when you are happy, but life is best when others are happy because of you.”
          </p>
          <p className="text-lg text-muted-foreground">
          At only 36, Audai passed away at the prime of his life in a tragic accident.  He was a great loss to family, friends, colleagues, and everyone who had the benefit to know him.  He was passionate about life while keeping a healthy lifestyle through running and joining local sports teams.  Audai was an empathetic leader who cared for those in need and was a true humanitarian who made an impact in communities near and far.  From taking care of expenses for a medical student in Sri Lanka, building a home for a single mother to providing weekly meals to LA homeless, and supporting meals for orphan children in Sudan, Audai gave all he could in hopes of a better world.
          </p>
          <p className="text-lg text-muted-foreground">
          Audai grew up in Mountain View, California.  After graduating high school, Audai attended George Washington University.  He received a Bachelor of Science in International Economics followed by a Master of Arts in Communication, Culture and Technology at Georgetown University.  He was an avid leader, high school, and college student body president.  A few weeks before his passing, he started his pollical career in the neighborhood city council because he wanted to take a significant role in eradicating homelessness in Los Angeles.  Audai loved to read, knew his way around words, and was a beautiful storyteller who would light up any room he stepped in.  At 6 feet 7, Audai was a kind giant who made people feel that anything in life was possible if you believed in yourself.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="https://picsum.photos/seed/audai1/600/400"
            alt="Audai"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="man smiling"
          />
          <Image
            src="https://picsum.photos/seed/audai2/600/400"
            alt="Audai"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="man portrait"
          />
          <Image
            src="https://picsum.photos/seed/audai3/600/400"
            alt="Audai"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="man outdoors"
          />
        </div>
      </div>
    </div>
  </section>
);

const MissionSection = () => (
   <section id="mission" className="bg-card py-16 md:py-24">
    <div className="container mx-auto space-y-12 px-4">
      <div className="text-center">
        <Badge>Our Mission</Badge>
        <h2 className="font-headline mt-4 text-4xl font-bold">
          Programs We Support
        </h2>
        {/* <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We focus on three key areas to create sustainable impact and foster growth in the communities we serve.
        </p> */}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="relative text-center">
          {/* Background Image with Opacity */}
          <div 
            className="absolute inset-0 rounded-lg" 
            style={{ 
              backgroundImage: 'url("/images/clean_water.png")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              opacity: 0.2 
            }} 
          />
          {/* Card Content */}
          <div className="relative z-10">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4 text-2xl">Clean Water</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
              Provide clean water and irrigation for agriculture to impoverished communities and those affected by the dry climate.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="relative text-center">
          {/* Background Image with Opacity */}
          <div 
            className="absolute inset-0 rounded-lg" 
            style={{ 
              backgroundImage: 'url("/images/social_1.png")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              opacity: 0.2 
            }} 
          />
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">Improve Social Well-Being</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
            Provide and promote social welfare programs in disadvantaged communities, including, but not limited to, access to free health care, food, clothes, educational services, home development and animal well-being.
            </p>
          </CardContent>
        </Card>
        <Card className="relative text-center">
        <div 
            className="absolute inset-0 rounded-lg" 
            style={{ 
              backgroundImage: 'url("/images/donate.png")', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              opacity: 0.2 
            }} 
          />
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">In Kind Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
            In lieu of a monetary donation, we accept in-kind donations to continue ASCF’s mission at the local and international levels.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const impactStats = [
  { value: "10,000+", label: "Lives Impacted" },
  { value: "50+", label: "Community Projects" },
  { value: "1,200+", label: "Active Volunteers" },
  { value: "5", label: "Countries Served" },
];

const testimonials = [
  {
    quote: "Volunteering with Audai has been a life-changing experience. Seeing the direct impact of our work on the community is incredibly rewarding.",
    name: "Jane Doe",
    role: "Volunteer",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "The support I received from Audai's program helped me start my own small business. I'm forever grateful for the opportunity.",
    name: "John Smith",
    role: "Program Beneficiary",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "Audai's commitment to long-term, sustainable solutions is what makes them stand out. They are truly invested in the communities they serve.",
    name: "Dr. Emily Carter",
    role: "Partner Organization",
    avatar: "https://placehold.co/100x100.png"
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Children in a classroom", hint: "children classroom" },
  { src: "https://placehold.co/600x400.png", alt: "Community garden project", hint: "community garden" },
  { src: "https://placehold.co/600x400.png", alt: "Volunteers distributing supplies", hint: "volunteers supplies" },
  { src: "https://placehold.co/600x400.png", alt: "A person receiving a certificate", hint: "person certificate" },
  { src: "https://placehold.co/600x400.png", alt: "Group of smiling people", hint: "people smiling" },
];

const ImpactSection = () => (
  <section id="impact" className="py-16 md:py-24">
    <div className="container mx-auto space-y-16 px-4">
      <div className="text-center">
        <Badge>Our Impact</Badge>
        <h2 className="font-headline mt-4 text-4xl font-bold">
          Making a Difference, Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Our efforts are measured by the positive changes we bring to people's lives. Here's a glimpse of what we've achieved with your support.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-headline text-5xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="flex-grow p-6">
              <Quote className="h-8 w-8 text-primary/50" />
              <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
            </CardContent>
            <CardHeader className="flex-row items-center gap-4 pt-0">
              <Image src={testimonial.avatar} width={48} height={48} alt={testimonial.name} className="rounded-full" data-ai-hint="portrait person" />
              <div>
                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

       <div>
        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={image.hint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ImpactSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
