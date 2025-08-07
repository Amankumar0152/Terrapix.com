// app/gallery/page.jsx
"use client";
import { useEffect, useState } from "react";
import wallpapers from "../../data/wallpapers.json";

export default function GalleryPage() {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch("/data/wallpapers.json")
      .then((res) => res.json())
      .then((data) => setWallpapers(data))
      .catch((err) => console.error("Failed to load wallpapers:", err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {wallpapers.map((wallpaper) => (
        <div
          key={wallpaper.id}
          className="relative group overflow-hidden rounded shadow-md"
        >
          <img
            src={wallpaper.image}
            alt={wallpaper.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm flex justify-between items-center">
            <span>{wallpaper.title}</span>
            <a
              href={wallpaper.image}
              download
              className="text-xs bg-white text-black px-2 py-1 rounded"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
