import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: string;
  title: string;
  season: string;
  imageUrl: string;
}

interface GalleryPreviewProps {
  title?: string;
  description?: string;
  images?: GalleryImage[];
  className?: string;
}

const GalleryPreview = ({
  title = "Explore Our Magical Gallery",
  description = "Discover stunning artwork and memorable moments from across all Precure seasons in our vibrant gallery collection.",
  images = [
    {
      id: "1",
      title: "Cure Happy",
      season: "Smile Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80",
    },
    {
      id: "2",
      title: "Cure Flora",
      season: "Go! Princess Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80",
    },
    {
      id: "3",
      title: "Cure Miracle",
      season: "Maho Girls Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=600&q=80",
    },
    {
      id: "4",
      title: "Cure Whip",
      season: "KiraKira Precure a la Mode",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&q=80",
    },
  ],
  className = "",
}: GalleryPreviewProps) => {
  return (
    <section
      className={cn(
        "w-full py-16 px-4 md:px-8 bg-gradient-to-b from-indigo-900 to-purple-900",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pink-300 mb-4">
            {title}
          </h2>
          <p className="text-lg text-pink-100/80 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border-0 bg-purple-800/30 hover:bg-purple-800/50 transition-colors duration-300 shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-pink-300 text-sm">{image.season}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 h-auto text-lg group"
            asChild
          >
            <a href="/gallery">
              <span className="mr-2">View Full Gallery</span>
              <ArrowRight className="inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 text-pink-300/60">
            <ImageIcon className="h-5 w-5" />
            <p className="text-sm">
              Showcasing magical moments from all Precure seasons
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
