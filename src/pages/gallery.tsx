import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

import FilterBar from "@/components/gallery/FilterBar";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GalleryPage = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  const handleFilterChange = (season: string) => {
    setSelectedSeason(season === "all" ? "" : season);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white">
      {/* Header */}
      <header className="w-full bg-purple-950/80 backdrop-blur-md border-b border-pink-500/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-pink-300 hover:text-pink-200 hover:bg-purple-800/50 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
            Precure Gallery
          </h1>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-pink-300 hover:text-pink-200 hover:bg-purple-800/50"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-purple-900 border-pink-500 text-pink-200"
                >
                  Share Gallery
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-pink-300 hover:text-pink-200 hover:bg-purple-800/50"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="bg-purple-900 border-pink-500 text-pink-200"
                >
                  Download Images
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
                <Camera className="mr-3 h-8 w-8 text-pink-400" />
                Magical Gallery
              </h2>
              <p className="text-pink-200/80 max-w-2xl">
                Explore our collection of Precure images from all seasons. Use
                the filters below to find your favorite characters and moments
                from the magical world of Pretty Cure.
              </p>
            </div>
          </div>

          <Separator className="bg-pink-500/20 my-6" />

          {/* Filter Section */}
          <FilterBar
            onFilterChange={handleFilterChange}
            activeFilter={selectedSeason || "all"}
          />

          {/* Gallery Grid */}
          <GalleryGrid selectedSeason={selectedSeason} />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-purple-950/80 backdrop-blur-md border-t border-pink-500/20 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-200/60 text-sm">
            © {new Date().getFullYear()} Precure Gallery • All images are
            property of Toei Animation
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <Link to="/" className="text-pink-300 hover:text-pink-200 text-sm">
              Home
            </Link>
            <Link
              to="/about"
              className="text-pink-300 hover:text-pink-200 text-sm"
            >
              About
            </Link>
            <Link
              to="/seasons"
              className="text-pink-300 hover:text-pink-200 text-sm"
            >
              Seasons
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
