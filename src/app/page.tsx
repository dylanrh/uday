import Image from "next/image";
import { Heart, Users, Target, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { TeamSection } from "@/components/our-team";
import { ContactForm } from "@/components/contact-form";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex h-[80vh] min-h-[500px] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
    style={{ backgroundImage: 'url("/images/uday_run.jpg")' }}
    data-ai-hint="charity community"
  >
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 flex flex-col items-center space-y-6 p-4">
      <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
        Audai Shakour Foundation
      </h1>
      <p className="max-w-3xl text-lg text-primary-foreground/90 md:text-xl">
        The Audai Shakour Foundation (Audai.org) is a 501(c)(3) non-profit
        dedicated to enhancing the lives of people living in impoverished
        conditions. Audai was a young man who was committed to helping those in
        need, and we are continuing his legacy by supporting the causes he was
        passionate about--helping one person, one community at a time.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <a href="#contact">
            Get Involved <ArrowRight className="ml-2" />
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a
            href="https://www.paypal.com/fundraiser/charity/4563572"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <Badge>Audai Shakour</Badge>
          <h2 className="font-headline text-4xl font-bold">About Audai</h2>
          <p className="text-lg text-muted-foreground">
            A week after Audai passed away, I (Audai's father) woke up
            remembering an incident in 1991 when Audai was six. We were taking a
            family walk on a Saturday afternoon to pick up a few books when I
            noticed Audai was missing. I looked back and saw him talking to a
            homeless man a few yards behind us. He ran back and asked for some
            money, "Dad, the man over there is hungry, and the money can help
            buy his lunch." From his childhood to his last breath, Audai lived
            by that example, always wanting to make someone happy.
          </p>
          <p className="text-lg text-muted-foreground">
            A few days later, I went to his bank to report his death. When I
            pulled out his wallet to get his bank card, I found a small card
            with a prayer for generosity from St. Ignatius Loyola. At that
            moment, I knew he wanted us to continue the charitable work he was
            so passionate about. He always said, "Life is better when you are
            happy, but life is best when others are happy because of you."
          </p>
          <p className="text-lg text-muted-foreground">
            At 36, Audai passed away in a tragic accident at the prime of his
            life. He was a great loss to family, friends, colleagues, and
            everyone who knew him. He was passionate about life and kept a
            healthy lifestyle through running and local sports teams. Audai was
            an empathetic leader who cared for those in need and was a true
            humanitarian, making an impact in communities near and far. From
            covering expenses for a medical student in Sri Lanka, building a
            home for a single mother, providing weekly meals to homeless
            individuals in LA, to supporting meals for orphaned children in
            Sudan, Audai gave all he could in hopes of a better world.
          </p>
          <p className="text-lg text-muted-foreground">
            Audai grew up in Mountain View, California. After graduating from
            high school, he attended George Washington University. He received a
            Bachelor of Science in International Economics, then a Master of
            Arts in Communication, Culture, and Technology at Georgetown
            University. He was an avid leader, serving as president of both his
            high school and college student body. A few weeks before his
            passing, he began his political career on the neighborhood city
            council, seeking to play a significant role in eradicating
            homelessness in Los Angeles. Audai loved to read, knew his way
            around words, and was a skilled storyteller who would light up any
            room he entered. At 6 feet 7, Audai was a kind giant who made people
            feel that anything in life was possible if you believed in yourself.
          </p>
        </div>
        <div>
          <Image
            src="/images/uday_suit_cropped.png?v=1"
            alt="Audai"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
            data-ai-hint="man smiling"
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
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          {/* Card Content */}
          <div className="relative z-10">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="font-headline mt-4 text-2xl">
                Clean Water
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Provide clean water and irrigation for agriculture to
                impoverished communities and those affected by the dry climate.
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
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">
              Improve Social Well-Being
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Provide and promote social welfare programs in disadvantaged
              communities, including, but not limited to, access to free health
              care, food, clothes, educational services, home development and
              animal well-being.
            </p>
          </CardContent>
        </Card>
        <Card className="relative text-center">
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              backgroundImage: 'url("/images/donate.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4 text-2xl">
              In Kind Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              In lieu of a monetary donation, we accept in-kind donations to
              continue ASCF’s mission at the local and international levels.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const recentProjects = [
  {
    title: "Renovating a Mental Health Hospital in Sri Lanka",
    description:
      "In memory of Audai's 4th year anniversary, we renovated a 28-bed mental hospital at the National Institute of Mental Health in Mulariyava, Sri Lanka. We also donated mosquito nets, a washing machine, and a secure cupboard for medicine.",
    image: "/images/mental_hospital2.png",
    hint: "hospital renovation",
  },
  {
    title: "A Day of Joy for an Autistic Orphanage",
    description:
      "On Audai's birthday, we provided a special day for 40 children at an autistic orphanage in Sri Lanka. We organized a trip to the zoo and the beach, complete with lunch, music, snacks, and ice cream for children who have never had such an experience.",
    image: "/images/orphanage.png",
    hint: "children playing",
  },
  {
    title: "Wellness Retreat for the Blind",
    description:
      "We hosted a day retreat for 100 blind individuals, focusing on stress relief, mindfulness, and meditation. The event included food and lodging, providing a space for relaxation and growth for a community often marginalized in Sri Lanka.",
    image: "/images/blind.png",
    hint: "meditation nature",
  },
  {
    title: "Supporting the Sudanese Community in California",
    description:
      "We are proud to have supported the Sudanese Association of Northern California in their efforts toward community advancement and advocacy, continuing our commitment to helping communities both near and far.",
    image: "/images/sudan_norcal.png",
    hint: "child learning",
  },
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
          In honor of Audai, we continue to create positive change. Here are
          some of our recent projects.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-1">
        {recentProjects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden md:grid md:grid-cols-2 md:gap-8"
          >
            <div
              className={`flex items-center justify-center ${
                index % 2 === 1 ? "md:order-last" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
                data-ai-hint={project.hint}
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <Badge>Contact Us</Badge>
          <h2 className="font-headline mt-4 text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have questions or want to get involved? Send us a message and we'll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="rounded-lg border bg-background p-6 md:p-8">
          <ContactForm />
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
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
