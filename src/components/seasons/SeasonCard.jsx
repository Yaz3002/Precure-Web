import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Play, Star } from "lucide-react";

function SeasonCard({
  title = "Futari wa Pretty Cure",
  year = "2004",
  episodes = 49,
  description = "The first season of the Pretty Cure franchise follows Nagisa Misumi and Honoka Yukishiro who transform into Cure Black and Cure White to fight against the evil forces of the Dark Zone.",
  image = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
  characters = [
    {
      name: "Nagisa Misumi",
      role: "Cure Black",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nagisa",
    },
    {
      name: "Honoka Yukishiro",
      role: "Cure White",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Honoka",
    },
    {
      name: "Mepple",
      role: "Fairy",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mepple",
    },
  ],
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  rating = 4.5,
  tags = ["Action", "Magic", "Friendship", "First Season"],
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      layout
      className="w-full bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-0 bg-transparent h-full flex flex-col">
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 right-2 flex gap-1">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-600/80 text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold text-purple-700">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {year} • {episodes} episodes
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700"
              onClick={toggleExpand}
            >
              {expanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </CardContent>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="pt-0">
              <div className="mb-4">
                <h4 className="text-md font-semibold text-purple-700 mb-2">
                  Characters
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {characters.map((character, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center min-w-[80px]"
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-16 h-16 rounded-full border-2 border-purple-400"
                      />
                      <p className="text-xs font-semibold mt-1 text-center">
                        {character.name}
                      </p>
                      <p className="text-xs text-gray-500 text-center">
                        {character.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-purple-700 mb-2">
                  Preview
                </h4>
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoUrl}
                    title={`${title} trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </motion.div>
        )}

        <CardFooter className="mt-auto">
          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            onClick={toggleExpand}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default SeasonCard;
