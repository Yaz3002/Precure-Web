import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SeasonCard from "@/components/seasons/SeasonCard";

interface Season {
  id: string;
  title: string;
  year: string;
  episodes: number;
  description: string;
  image: string;
  characters: {
    name: string;
    role: string;
    image: string;
  }[];
  videoUrl: string;
  rating: number;
  tags: string[];
}

const SeasonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSeasons, setFilteredSeasons] = useState<Season[]>(seasons);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    let result = seasons;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (season) =>
          season.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          season.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          season.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Filter by era
    if (activeTab !== "all") {
      result = result.filter((season) => {
        const year = parseInt(season.year);
        switch (activeTab) {
          case "early":
            return year >= 2004 && year <= 2010;
          case "middle":
            return year >= 2011 && year <= 2016;
          case "recent":
            return year >= 2017;
          default:
            return true;
        }
      });
    }

    setFilteredSeasons(result);
  }, [searchTerm, activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Precure Seasons
          </h1>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            Explore the magical world of Precure through all of its colorful
            seasons. Each season brings new heroes, stories, and adventures!
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 bg-purple-800/50 p-6 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Input
                type="text"
                placeholder="Search seasons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-purple-700/50 border-pink-500/30 text-white placeholder:text-pink-300/50 focus-visible:ring-pink-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-pink-300/70" />
            </div>

            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="grid grid-cols-4 w-full md:w-[400px] bg-purple-700/50">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  All Eras
                </TabsTrigger>
                <TabsTrigger
                  value="early"
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  2004-2010
                </TabsTrigger>
                <TabsTrigger
                  value="middle"
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  2011-2016
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                >
                  2017+
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* Results */}
        {filteredSeasons.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-20 text-pink-300"
          >
            <Filter className="h-16 w-16 mb-4 opacity-50" />
            <p className="text-2xl mb-4">
              No seasons found matching your criteria
            </p>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-300 hover:bg-pink-500/20"
              onClick={() => {
                setSearchTerm("");
                setActiveTab("all");
              }}
            >
              Clear filters
            </Button>
          </motion.div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-pink-400" />
              <h2 className="text-2xl font-semibold text-pink-300">
                {filteredSeasons.length}{" "}
                {filteredSeasons.length === 1 ? "Season" : "Seasons"} Found
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredSeasons.map((season, index) => (
                <motion.div
                  key={season.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full flex">
                    <SeasonCard
                      title={season.title}
                      year={season.year}
                      episodes={season.episodes}
                      description={season.description}
                      image={season.image}
                      characters={season.characters}
                      videoUrl={season.videoUrl}
                      rating={season.rating}
                      tags={season.tags}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeasonsPage;

// Sample data for seasons
const seasons: Season[] = [
  {
    id: "1",
    title: "Futari wa Pretty Cure",
    year: "2004",
    episodes: 49,
    description:
      "The first season of the Pretty Cure franchise follows Nagisa Misumi and Honoka Yukishiro who transform into Cure Black and Cure White to fight against the evil forces of the Dark Zone.",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    characters: [
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.5,
    tags: ["Action", "Magic", "Friendship", "First Season"],
  },
  {
    id: "2",
    title: "Futari wa Pretty Cure Max Heart",
    year: "2005",
    episodes: 47,
    description:
      "A direct sequel to the first season, Max Heart continues the story of Nagisa and Honoka as they are joined by a mysterious girl named Hikari who transforms into Shiny Luminous.",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    characters: [
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
        name: "Hikari Kujo",
        role: "Shiny Luminous",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hikari",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.3,
    tags: ["Action", "Magic", "Friendship", "Sequel"],
  },
  {
    id: "3",
    title: "Futari wa Pretty Cure Splash Star",
    year: "2006",
    episodes: 49,
    description:
      "Following new protagonists Saki Hyuuga and Mai Mishou, who transform into Cure Bloom and Cure Egret to protect the World Tree and the Fountain of the Sun.",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    characters: [
      {
        name: "Saki Hyuuga",
        role: "Cure Bloom/Cure Bright",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saki",
      },
      {
        name: "Mai Mishou",
        role: "Cure Egret/Cure Windy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
      },
      {
        name: "Flappy",
        role: "Fairy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Flappy",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.0,
    tags: ["Nature", "Elements", "Friendship"],
  },
  {
    id: "4",
    title: "Yes! Pretty Cure 5",
    year: "2007",
    episodes: 49,
    description:
      "Five girls led by Nozomi Yumehara form the first team of five Pretty Cures, each with their own unique powers based on natural elements and emotions.",
    image:
      "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
    characters: [
      {
        name: "Nozomi Yumehara",
        role: "Cure Dream",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nozomi",
      },
      {
        name: "Rin Natsuki",
        role: "Cure Rouge",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rin",
      },
      {
        name: "Urara Kasugano",
        role: "Cure Lemonade",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Urara",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.2,
    tags: ["Team", "School", "Dreams"],
  },
  {
    id: "5",
    title: "Fresh Pretty Cure!",
    year: "2009",
    episodes: 50,
    description:
      "Love Momozono and her friends transform into Pretty Cures to protect the parallel worlds of Earth and Labyrinth while dealing with the challenges of growing up.",
    image:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
    characters: [
      {
        name: "Love Momozono",
        role: "Cure Peach",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Love",
      },
      {
        name: "Miki Aono",
        role: "Cure Berry",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miki",
      },
      {
        name: "Inori Yamabuki",
        role: "Cure Pine",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Inori",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.4,
    tags: ["Dance", "Fruits", "Friendship"],
  },
  {
    id: "6",
    title: "Heartcatch Pretty Cure!",
    year: "2010",
    episodes: 49,
    description:
      "Often considered one of the best seasons, it follows Tsubomi Hanasaki and her friends as they protect the Heart Tree from the Desert Apostles who turn people's wilting heart flowers into monsters.",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    characters: [
      {
        name: "Tsubomi Hanasaki",
        role: "Cure Blossom",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tsubomi",
      },
      {
        name: "Erika Kurumi",
        role: "Cure Marine",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Erika",
      },
      {
        name: "Itsuki Myoudouin",
        role: "Cure Sunshine",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Itsuki",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.8,
    tags: ["Flowers", "Fashion", "Growth"],
  },
  {
    id: "7",
    title: "Suite Pretty Cure♪",
    year: "2011",
    episodes: 48,
    description:
      "Childhood friends turned rivals Hibiki Hojo and Kanade Minamino must overcome their differences and work together as Pretty Cures to collect the scattered notes of the Melody of Happiness.",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    characters: [
      {
        name: "Hibiki Hojo",
        role: "Cure Melody",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hibiki",
      },
      {
        name: "Kanade Minamino",
        role: "Cure Rhythm",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kanade",
      },
      {
        name: "Ellen Kurokawa",
        role: "Cure Beat",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ellen",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.1,
    tags: ["Music", "Friendship", "Harmony"],
  },
  {
    id: "8",
    title: "Smile Pretty Cure!",
    year: "2012",
    episodes: 48,
    description:
      "Five girls must collect the Cure Decors to restore the worlds of light and save their world from the evil Emperor Pierrot who wants to bring about the worst ending to everyone's stories.",
    image:
      "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
    characters: [
      {
        name: "Miyuki Hoshizora",
        role: "Cure Happy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miyuki",
      },
      {
        name: "Akane Hino",
        role: "Cure Sunny",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akane",
      },
      {
        name: "Yayoi Kise",
        role: "Cure Peace",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yayoi",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.6,
    tags: ["Fairy Tales", "Happiness", "Friendship"],
  },
  {
    id: "9",
    title: "HUGtto! Pretty Cure",
    year: "2018",
    episodes: 49,
    description:
      "Hana Nono and her friends transform into Pretty Cures to protect people's futures from the Criasu Corporation that wants to freeze time and stop the future from happening.",
    image:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
    characters: [
      {
        name: "Hana Nono",
        role: "Cure Yell",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hana",
      },
      {
        name: "Saaya Yakushiji",
        role: "Cure Ange",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saaya",
      },
      {
        name: "Homare Kagayaki",
        role: "Cure Étoile",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Homare",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.7,
    tags: ["Future", "Dreams", "Motherhood"],
  },
  {
    id: "10",
    title: "Delicious Party♡Pretty Cure",
    year: "2022",
    episodes: 46,
    description:
      "Yui Nagomi and her friends transform into Pretty Cures to protect the Cookingdom and people's connections through food from the Bundoru Gang who steal Recipe-Bon.",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
    characters: [
      {
        name: "Yui Nagomi",
        role: "Cure Precious",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yui",
      },
      {
        name: "Kokone Fuwa",
        role: "Cure Spicy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kokone",
      },
      {
        name: "Ran Hanamichi",
        role: "Cure Yum-Yum",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ran",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4.2,
    tags: ["Food", "Cooking", "Friendship"],
  },
];
