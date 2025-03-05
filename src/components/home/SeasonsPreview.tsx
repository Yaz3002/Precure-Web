import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SeasonCard from "../seasons/SeasonCard";

interface Season {
  title: string;
  year: string;
  episodes: number;
  description: string;
  image: string;
  rating: number;
  tags: string[];
}

interface SeasonsPreviewProps {
  seasons?: Season[];
}

const SeasonsPreview = ({
  seasons = [
    {
      title: "Futari wa Pretty Cure",
      year: "2004",
      episodes: 49,
      description:
        "The first season of the Pretty Cure franchise follows Nagisa Misumi and Honoka Yukishiro who transform into Cure Black and Cure White to fight against the evil forces of the Dark Zone.",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      rating: 4.5,
      tags: ["Action", "Magic", "Friendship", "First Season"],
    },
    {
      title: "Heartcatch Precure",
      year: "2010",
      episodes: 49,
      description:
        "Tsubomi Hanasaki, a shy girl who loves flowers, becomes Cure Blossom and teams up with her new friend Erika who becomes Cure Marine to protect the Heart Tree from the Desert Apostles.",
      image:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      rating: 4.8,
      tags: ["Flowers", "Fashion", "Friendship", "Popular"],
    },
    {
      title: "Go! Princess Precure",
      year: "2015",
      episodes: 50,
      description:
        "Haruka Haruno enrolls in Noble Academy to follow her dream of becoming a princess. There she becomes Cure Flora and joins other Precures to protect everyone's dreams from being locked away.",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      rating: 4.7,
      tags: ["Princess", "Dreams", "Academy", "Fantasy"],
    },
  ],
}: SeasonsPreviewProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-purple-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Magical Seasons
          </motion.h2>
          <motion.p
            className="text-lg text-purple-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the colorful world of Precure through its many enchanting
            seasons. Each brings unique characters, stories, and magical
            transformations!
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {seasons.map((season, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <SeasonCard
                title={season.title}
                year={season.year}
                episodes={season.episodes}
                description={season.description}
                image={season.image}
                rating={season.rating}
                tags={season.tags}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            size="lg"
            onClick={() => (window.location.href = "/seasons")}
          >
            Discover All Seasons
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonsPreview;
