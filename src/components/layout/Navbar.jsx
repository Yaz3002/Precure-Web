import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Info, Film, Image, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

function Navbar({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "About", path: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    {
      name: "Seasons",
      path: "/seasons",
      icon: <Film className="h-4 w-4 mr-2" />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image className="h-4 w-4 mr-2" />,
    },
  ];

  // Handle scroll effect for transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background style based on scroll and transparent prop
  const navbarBgClass = transparent
    ? isScrolled
      ? "bg-purple-900/90 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-purple-900 shadow-lg";

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Precure
              </span>
              <span className="text-pink-300 text-xl ml-1">Portal</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link to={link.path}>
                      <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-pink-500/20 hover:text-pink-300 focus:bg-pink-500/20 focus:text-pink-300 focus:outline-none">
                        <motion.div
                          className="flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.icon}
                          <span>{link.name}</span>
                        </motion.div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-pink-300 hover:bg-pink-500/20 hover:text-pink-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 bg-purple-800/90 backdrop-blur-md rounded-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center py-2 px-3 rounded-md text-pink-200 hover:bg-pink-500/20 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;
