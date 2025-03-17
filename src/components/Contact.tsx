
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    {
      name: "Email (College)",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:101471720@georgebrown.ca",
      label: "101471720@georgebrown.ca"
    },
    {
      name: "Email (Personal)",
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:sudeeptohasan2000@gmail.com",
      label: "sudeeptohasan2000@gmail.com"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/sudeepto2000",
      label: "github.com/sudeepto2000"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      label: "LinkedIn Profile"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      link: "https://www.instagram.com/bobantis?igsh=MTV0N3AzN3FqMDJubw%3D%3D&utm_source=qr",
      label: "@bobantis"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      link: "https://www.facebook.com/share/15jyqw3x2H/?mibextid=wwXIfr",
      label: "Facebook Profile"
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me through any of the channels below. I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-medium">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.label}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" className="rounded-full" asChild>
              <a href="mailto:sudeeptohasan2000@gmail.com">
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
