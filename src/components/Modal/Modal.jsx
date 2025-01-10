/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./Modal.module.scss";

export const Modal = ({ onClose, data }) => {
  const [currentImage, setCurrentImage] = useState(data.mainImage);
  const [videoModal, setVideoModal] = useState(null); 
  const handleCloseVideoModal = () => setVideoModal(null);

  return (
    <div className={s.modal}>
      <button className={s.closeButton} onClick={onClose}>
        Вернутись назад
      </button>
      <div className={s.wrapInfo}>
        <div className={s.imageContainer}>
          <img
            className={s.mainImage}
            src={currentImage}
            alt="Головне зображення"
          />
          <ul className={s.gallery}>
            {data.gallery.map((item, index) => (
              <li key={index} className={s.galleryItem}>
                {item.type === "image" ? (
                  <img
                    className={s.galleryImage}
                    src={item.url}
                    alt={item.description || `Зображення ${index + 1}`}
                    onClick={() => setCurrentImage(item.url)}
                  />
                ) : item.type === "video" ? (
                  <div className={s.videoContainer}>
                    <video className={s.galleryVideo} controls={false}>
                      <source
                        src={item.url.replace(".mp4", ".webm")}
                        type="video/webm"
                      />
                      Ваш браузер не підтримує відео.
                    </video>
                    <button
                      className={s.playButton}
                      onClick={() => setVideoModal(item.url)}
                    >
                      ▶ Play
                    </button>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.description}>item 2</div>
      </div>

      {videoModal && (
        <div className={s.videoModal} onClick={handleCloseVideoModal}>
          <div
            className={s.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <video className={s.modalVideo} controls autoPlay>
              <source src={videoModal} type="video/mp4" />
              Ваш браузер не підтримує відео.
            </video>
            <button
              className={s.closeVideoButton}
              onClick={handleCloseVideoModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
