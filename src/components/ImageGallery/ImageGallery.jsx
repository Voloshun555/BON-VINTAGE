/* eslint-disable react/prop-types */
import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "react-responsive";
import noImage from '/assets/images/noImage.png'
import "react-image-gallery/styles/css/image-gallery.css";
import './ImageGallery.scss';
import { useState } from "react";

export const ImageGallerySlider = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1439px)" });
  const [loaded, setLoaded] = useState(false);

  const renderImage = (item) => (
    <div className="image-wrapper">
      {!loaded && <img src={noImage} alt="завантаження..." style={{ maxWidth: "300px", borderRadius: "10px" }} />}
      <img
        src={item.original || noImage}
        alt={item.title || "відсутнє зображення"}
        style={{ maxWidth: "300px", borderRadius: "10px" }}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.src = noImage; 
        }}
      />
    </div>
  );

  const renderVideo = (item) => (
    <div className="video-wrapper">
      <video
        controls
        style={{ width: "100%", borderRadius: "10px" }}
        src={item.embedUrl}
      />
    </div>
  );

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
          renderItem: renderImage,
        };
      }
    }),
  ];

  return (
    <div className="image-gallery-container" >
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
