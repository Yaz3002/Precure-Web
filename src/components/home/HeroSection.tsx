import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Star } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  characters?: {
    name: string;
    image: string;
    position: "left" | "center" | "right";
  }[];
}

const HeroSection = ({
  title = "Precure",
  subtitle = "A Magical Journey of Friendship and Courage",
  backgroundImage = "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&q=80",
  characters = [
    {
      name: "Cure Happy",
      image:
        "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80",
      position: "left",
    },
    {
      name: "Cure Flora",
      image:
        "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?w=800&q=80",
      position: "center",
    },
    {
      name: "Cure Grace",
      image:
        "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80",
      position: "right",
    },
  ],
}: HeroSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Floating animation for sparkles
  const floatingSparkles = Array(20)
    .fill(0)
    .map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 5 + 3,
    }));

  return (
    <div ref={ref} className="hero">
      {/* Background with parallax effect */}
      <motion.div
        className="hero__background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y,
          scale,
          opacity,
        }}
      />

      {/* Overlay gradient */}
      <div className="hero__overlay" />

      {/* Floating sparkles */}
      {floatingSparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="hero__sparkle"
          style={{
            x: `${sparkle.x}%`,
            y: `${sparkle.y}%`,
            scale: sparkle.size / 20,
          }}
          animate={{
            y: [`${sparkle.y}%`, `${sparkle.y - 10}%`, `${sparkle.y}%`],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles />
        </motion.div>
      ))}

      {/* Character images with parallax effect */}
      <div className="hero__characters">
        {characters.map((character, index) => {
          // Different parallax effects based on position
          const xOffset =
            character.position === "left"
              ? -50
              : character.position === "right"
                ? 50
                : 0;
          const yOffset = character.position === "center" ? 30 : 0;

          return (
            <motion.div
              key={index}
              className={`hero__character hero__character--${character.position}`}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 100 + yOffset]),
                x: useTransform(scrollYProgress, [0, 1], [0, xOffset]),
                opacity,
              }}
            >
              <motion.img
                src={character.image}
                alt={character.name}
                className="hero__character-image"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
              <motion.div
                className="hero__character-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="hero__character-name">
                  <Star className="h-4 w-4 fill-pink-300" />
                  <span>{character.name}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero content */}
      <div className="hero__content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__content"
        >
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__buttons">
            <Button className="hero__button hero__button--primary" size="lg">
              Explore Seasons
            </Button>
            <Button
              variant="outline"
              className="hero__button hero__button--secondary"
              size="lg"
            >
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <ChevronDown className="hero__scroll-icon" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
