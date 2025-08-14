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
import { VolunteerSuggestionForm } from '@/components/volunteer-suggestion-form';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => (
  <section
    id="home"
    className="relative flex h-[80vh] min-h-[500px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
    style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
    data-ai-hint="charity community"
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 flex flex-col items-center space-y-6 p-4">
      <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
        Empowering Communities, Changing Lives
      </h1>
      <p className="max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
        Audai is a non-profit organization committed to creating lasting change
        through education, empowerment, and community-driven initiatives.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="#volunteer">
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
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <Badge>About Audai</Badge>
          <h2 className="font-headline text-4xl font-bold">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground">
            Audai was founded on the principle that everyone deserves the opportunity to reach their full potential. We are a dedicated team of professionals, volunteers, and partners working together to address critical social challenges. Our approach is rooted in collaboration, sustainability, and a deep respect for the communities we serve.
          </p>
          <p className="text-lg text-muted-foreground">
            Through our programs, we aim to build a world where individuals are empowered, communities are strengthened, and positive change is a collective achievement.
          </p>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Audai team working with the community"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="teamwork community"
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
          Our Core Pillars
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We focus on three key areas to create sustainable impact and foster growth in the communities we serve.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">Empower</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We provide individuals with the tools, resources, and confidence to build better futures for themselves and their families.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">Educate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
             Our educational programs unlock potential, offering access to knowledge and skills that open doors to new opportunities.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">Advocate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We champion the rights and needs of the communities we serve, working to create systemic change and a more equitable society.
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

const VolunteerSection = () => (
  <section id="volunteer" className="bg-card py-16 md:py-24">
    <div className="container mx-auto px-4">
       <div className="grid items-center gap-12 md:grid-cols-2">
         <div>
            <Badge>Volunteer With Us</Badge>
            <h2 className="font-headline mt-4 text-4xl font-bold">
              Find Your Way to Help
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your skills and interests can make a real difference. Tell us a bit about yourself, and our AI assistant will suggest personalized volunteer opportunities that align with your passions and our mission.
            </p>
            <div className="mt-8">
              <VolunteerSuggestionForm />
            </div>
         </div>
         <div>
          <Image
            src="https://placehold.co/600x500.png"
            alt="A volunteer helping out"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
            data-ai-hint="volunteer helping"
          />
        </div>
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
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
}
