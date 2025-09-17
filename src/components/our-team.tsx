import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alex Johnson',
    title: 'Executive Director',
    image: 'https://picsum.photos/seed/1/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'Samantha Lee',
    title: 'Program Director',
    image: 'https://picsum.photos/seed/2/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'Michael Chen',
    title: 'Financial Officer',
    image: 'https://picsum.photos/seed/3/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'Emily Davis',
    title: 'Volunteer Coordinator',
    image: 'https://picsum.photos/seed/4/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'David Rodriguez',
    title: 'Marketing Head',
    image: 'https://picsum.photos/seed/5/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'Jessica Garcia',
    title: 'Community Manager',
    image: 'https://picsum.photos/seed/6/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
  {
    name: 'Christopher Martinez',
    title: 'Operations Lead',
    image: 'https://picsum.photos/seed/7/300/300',
    linkedin: '#',
    hint: 'portrait person'
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge>Our Team</Badge>
          <h2 className="font-headline mt-4 text-4xl font-bold">
            Meet the People Behind Audai
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our dedicated team is passionate about making a difference and driving our mission forward.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden text-center h-full transition-shadow duration-300 group-hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full object-cover"
                    data-ai-hint={member.hint}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Linkedin className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-md text-primary">{member.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
