/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './ImageGallery.scss'
import { useMediaQuery } from "react-responsive";


export const ImageGallerySlider = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });

  // Функція рендеру відео
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <video
          controls
          style={{ width: "100%", borderRadius: "10px" }}
          src={item.embedUrl}
        />
      </div>
    );
  };

  const items = [
    {
      original: data.mainImage,
      thumbnail: data.mainImage,
    },
    ...data.gallery.map((item) => {
      if (item.type === "video") {
        return {
          thumbnail: "https://img.icons8.com/ios-filled/50/video.png", 
          embedUrl: item.url,
          renderItem: renderVideo,
        };
      } else {
        return {
          original: item.url,
          thumbnail: item.url,
        };
      }
    }),
  ];

  return (
    <div style={{ maxWidth: "500px" }}>
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
        slideDuration={300}
        showBullets={true}
        useBrowserFullscreen={true}
        thumbnailPosition={isMobile ? "bottom" : "right"}
      />
    </div>
  );
};