import Link from 'next/link';
import { HandHeart, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/audai_org/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/udayshakour/', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl font-headline">
              <HandHeart className="h-8 w-8 text-primary" />
              <span>Audai</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering communities and changing lives through dedicated action and partnership.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@audai.org" className="hover:text-primary">info@audai.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+16504383319" className="hover:text-primary">+1 650-438-3319</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
             <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
             <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Audai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
