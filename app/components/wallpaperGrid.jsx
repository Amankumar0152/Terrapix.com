'use client';
import Image from "next/image";
import styles from "../styles/wallpapergrid.module.css";

export default function WallpaperGrid({ wallpapers }) {
  return (
    <div className={styles.grid}>
      {wallpapers.map((wallpaper, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={wallpaper.preview}
            alt={wallpaper.alt}
            width={400}
            height={700}
            loading="lazy"
          />
          <a href={wallpaper.original} download className={styles.downloadBtn}>
            Download
          </a>
        </div>
      ))}
    </div>
  );
}
