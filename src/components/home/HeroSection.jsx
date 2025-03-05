import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Star } from "lucide-react";

function HeroSection({
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
}) {
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
    <div
      ref={ref}
      className="relative w-full h-[800px] overflow-hidden bg-purple-900"
    >
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y,
          scale,
          opacity,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-purple-800/60 to-indigo-900/90" />

      {/* Floating sparkles */}
      {floatingSparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-pink-300 opacity-70"
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
      <div className="absolute inset-0 flex items-end justify-between px-4 md:px-12 pb-20 md:pb-0">
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
              className={`relative ${character.position === "left" ? "self-end -ml-10 md:ml-0" : character.position === "right" ? "self-end -mr-10 md:mr-0" : "self-center mx-auto"}`}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 100 + yOffset]),
                x: useTransform(scrollYProgress, [0, 1], [0, xOffset]),
                opacity,
              }}
            >
              <motion.img
                src={character.image}
                alt={character.name}
                className={`h-[300px] md:h-[400px] object-cover object-top ${character.position === "center" ? "z-10" : "z-0"} drop-shadow-2xl`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="flex items-center justify-center gap-1 text-pink-300 font-bold">
                  <Star className="h-4 w-4 fill-pink-300" />
                  <span>{character.name}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none text-lg px-8 py-6 h-auto"
              size="lg"
            >
              Explore Seasons
            </Button>
            <Button
              variant="outline"
              className="border-pink-400 text-pink-200 hover:bg-pink-500/20 text-lg px-8 py-6 h-auto"
              size="lg"
            >
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-pink-200 mb-2">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 text-pink-300" />
      </motion.div>
    </div>
  );
}

export default HeroSection;
