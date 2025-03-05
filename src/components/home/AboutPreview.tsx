import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Info, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutPreviewProps {
  title?: string;
  description?: string;
  facts?: { icon: React.ReactNode; text: string }[];
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const AboutPreview = ({
  title = "About Precure",
  description = "Pretty Cure (プリキュア) is a Japanese magical girl anime franchise created by Izumi Todo and produced by Toei Animation. The series follows ordinary girls who transform into legendary warriors known as Pretty Cure (or Precure) to fight against evil forces and protect the world.",
  facts = [
    {
      icon: <Star className="h-5 w-5 text-yellow-400" />,
      text: "Running since 2004 with over 900 episodes",
    },
    {
      icon: <Info className="h-5 w-5 text-blue-400" />,
      text: "Features over 70 different Precure warriors across all seasons",
    },
    {
      icon: <Star className="h-5 w-5 text-yellow-400" />,
      text: "Known for positive messages about friendship, courage, and perseverance",
    },
  ],
  imageUrl = "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80",
  buttonText = "Learn More",
  onButtonClick = () => {},
}: AboutPreviewProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300 mb-4">
                {title}
              </h2>
              <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-purple-800/50 p-2 rounded-full">
                    {fact.icon}
                  </div>
                  <p className="text-purple-100">{fact.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4"
            >
              <Button
                onClick={onButtonClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 h-auto text-lg group"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 relative"
          >
            <Card className="overflow-hidden border-0 bg-purple-800/20 backdrop-blur-sm">
              <div className="relative">
                <motion.img
                  src={imageUrl}
                  alt="Precure Characters"
                  className="w-full h-auto rounded-t-xl object-cover"
                  style={{ height: "400px" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent pointer-events-none" />
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-pink-300 mb-2">
                  Magical Girls with a Mission
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Each season introduces new Precure warriors with unique powers
                  and themes, from flowers and sweets to stars and music.
                </CardDescription>
              </CardContent>
              <CardFooter className="border-t border-purple-700/50 p-4 bg-purple-800/30">
                <p className="text-sm text-purple-300 italic">
                  "Pretty Cure stands as one of the longest-running and most
                  successful magical girl franchises in anime history."
                </p>
              </CardFooter>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600/20 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
