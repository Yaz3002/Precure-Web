import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Heart,
  Mail,
  ExternalLink,
} from "lucide-react";

function Footer({
  logoSrc = "/logo.png",
  socialLinks = [
    {
      platform: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      platform: "Youtube",
      url: "https://youtube.com",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      platform: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="h-5 w-5" />,
    },
  ],
  navigationLinks = [
    {
      section: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Seasons", path: "/seasons" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    {
      section: "Precure Series",
      links: [
        { name: "Futari wa Precure", path: "/seasons#futari-wa" },
        { name: "Heartcatch Precure", path: "/seasons#heartcatch" },
        { name: "Suite Precure", path: "/seasons#suite" },
        { name: "Go! Princess Precure", path: "/seasons#princess" },
      ],
    },
    {
      section: "Resources",
      links: [
        {
          name: "Official Site",
          path: "https://www.toei-anim.co.jp/tv/precure/",
        },
        { name: "Merchandise", path: "/merchandise" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ],
}) {
  return (
    <footer className="w-full bg-gradient-to-b from-purple-900 to-indigo-950 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <Link to="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Precure
                </span>
              </div>
            </Link>

            <p className="text-pink-200/80 text-sm">
              Explore the magical world of Pretty Cure, the long-running magical
              girl anime series that has captured hearts worldwide with its
              themes of friendship, courage, and hope.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-pink-500 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.platform}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {navigationLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-lg font-bold text-pink-300">
                {section.section}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link.path.startsWith("http") ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-100 hover:text-pink-400 transition-colors duration-300 flex items-center"
                        >
                          {link.name}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-pink-100 hover:text-pink-400 transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8 bg-pink-500/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-pink-200/60">
            © {new Date().getFullYear()} Precure Fan Site. This is an
            unofficial fan site. All trademarks belong to Toei Animation.
          </p>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-pink-200 hover:text-pink-400 hover:bg-purple-800/50"
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-pink-200 hover:text-pink-400 hover:bg-purple-800/50"
            >
              Terms of Use
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-pink-200 hover:text-pink-400 hover:bg-purple-800/50 flex items-center"
            >
              <Mail className="mr-1 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
