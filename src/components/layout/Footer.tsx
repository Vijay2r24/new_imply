import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/Group-1.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-2">
                Book your complimentary design consultation today!
              </h3>
              <p className="text-primary-foreground/70">
                Transform your space with world-class modular furniture
              </p>
            </div>
            <a href="tel:+919606032020">
              <Button variant="gold" size="xl" className="whitespace-nowrap">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 96060 32020
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="imly studio"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Committed to creative design & efficient execution. Creating world-class modular furniture since 1998.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="font-medium">Join Our Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="gold">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/70">
                  No.72 Jayanagar 6th block,<br />
                  23th cross, Yediyur,<br />
                  Bangalore 560070 INDIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919606032020" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +91 96060 32020
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:hello@imlystudio.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  hello@imlystudio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Working Hours</h4>
            <ul className="space-y-3 text-primary-foreground/70 mb-8">
              <li>Mon - Sat: 10:00 AM - 6:30 PM</li>
              <li>Sun: Holiday</li>
            </ul>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com/imlystudio" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Youtube, href: "https://youtube.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            SINCE 1998 • © {new Date().getFullYear()} Imly Studio – All Rights Reserved.
          </p>
          <Link to="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
            Privacy & Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
