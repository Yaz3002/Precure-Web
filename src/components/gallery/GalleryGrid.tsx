import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GalleryImage {
  id: string;
  title: string;
  season: string;
  imageUrl: string;
  description?: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  selectedSeason?: string;
}

const GalleryGrid = ({
  images = [
    {
      id: "1",
      title: "Cure Happy",
      season: "Smile Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      description: "Miyuki Hoshizora as Cure Happy from Smile Precure",
    },
    {
      id: "2",
      title: "Cure Flora",
      season: "Go! Princess Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      description: "Haruka Haruno as Cure Flora from Go! Princess Precure",
    },
    {
      id: "3",
      title: "Cure Miracle",
      season: "Maho Girls Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
      description: "Mirai Asahina as Cure Miracle from Maho Girls Precure",
    },
    {
      id: "4",
      title: "Cure Whip",
      season: "KiraKira Precure a la Mode",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
      description: "Ichika Usami as Cure Whip from KiraKira Precure a la Mode",
    },
    {
      id: "5",
      title: "Cure Yell",
      season: "HUGtto! Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      description: "Hana Nono as Cure Yell from HUGtto! Precure",
    },
    {
      id: "6",
      title: "Cure Star",
      season: "Star Twinkle Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
      description: "Hikaru Hoshina as Cure Star from Star Twinkle Precure",
    },
    {
      id: "7",
      title: "Cure Grace",
      season: "Healin Good Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      description: "Nodoka Hanadera as Cure Grace from Healin Good Precure",
    },
    {
      id: "8",
      title: "Cure Summer",
      season: "Tropical-Rouge Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
      description:
        "Manatsu Natsuumi as Cure Summer from Tropical-Rouge Precure",
    },
  ],
  selectedSeason = "",
}: GalleryGridProps) => {
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Filter images based on selected season and search term
  useEffect(() => {
    let result = images;

    if (selectedSeason) {
      result = result.filter((image) => image.season === selectedSeason);
    }

    if (searchTerm) {
      result = result.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (image.description &&
            image.description.toLowerCase().includes(searchTerm.toLowerCase())),
      );
    }

    setFilteredImages(result);
  }, [images, selectedSeason, searchTerm]);

  return (
    <div className="w-full bg-gradient-to-b from-purple-900 to-indigo-900 p-6 rounded-lg">
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <h2 className="text-3xl font-bold text-pink-300 tracking-wide">
          Precure Gallery
        </h2>

        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-purple-800/50 border-pink-500/30 text-white placeholder:text-pink-300/50 focus-visible:ring-pink-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-pink-300/70" />
        </div>
      </div>

      {filteredImages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-pink-300">
          <Filter className="h-16 w-16 mb-4 opacity-50" />
          <p className="text-xl">No images found matching your criteria</p>
          <Button
            variant="outline"
            className="mt-4 border-pink-500 text-pink-300 hover:bg-pink-500/20"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <TooltipProvider key={image.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className="relative overflow-hidden rounded-lg cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={() => setActiveImage(image.id)}
                    onMouseLeave={() => setActiveImage(null)}
                  >
                    <Card className="overflow-hidden border-0 bg-transparent">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.imageUrl}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                          style={{
                            transform:
                              activeImage === image.id
                                ? "scale(1.1)"
                                : "scale(1)",
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4"
                          style={{
                            opacity: activeImage === image.id ? 1 : 0,
                          }}
                        >
                          <h3 className="text-xl font-bold text-white mb-1">
                            {image.title}
                          </h3>
                          <p className="text-pink-300 text-sm">
                            {image.season}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-purple-900 border-pink-500 text-pink-200"
                >
                  {image.description || `${image.title} from ${image.season}`}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
