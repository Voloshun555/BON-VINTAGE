/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./Modal.module.scss";
import { useFavorites } from "@/hooks/useFavorites";
import { FavoriteButton } from "../FavoriteBtn/FavoriteButton";

export const Modal = ({ onClose, data }) => {
  const [currentImage, setCurrentImage] = useState(data.mainImage);
  const [videoModal, setVideoModal] = useState(null);
  const handleCloseVideoModal = () => setVideoModal(null);
  const { isFavorite, addFavoriteList, removeFavoriteList } = useFavorites();

  const handleFavoriteClick = () => {
    isFavorite(data.id)
      ? removeFavoriteList(data.id)
      : addFavoriteList(data.id);
  };

  return (
    <div className={s.modal}>
      <button className={s.closeButton} onClick={onClose}>
        Вернутись назад
      </button>
      <div className={s.wrapInfo}>
        <div>
          <div className={s.imageContainer}>
            <img
              className={s.mainImage}
              src={currentImage}
              alt="Головне зображення"
            />
            <FavoriteButton
              buttonHeart={`${s.buttonHeart}`}
              iconHeart={s.iconHeart}
              isFavorite={isFavorite(data.id)}
              onClick={handleFavoriteClick}
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
          <button className={s.addBasket}>ДОДАТИ ДО КОШИКУ</button>
          <ul className={s.priceInfo}>
            <li className={s.price}>€ 222</li>
            <li className={s.price}>{data.price}: грн</li>
          </ul>
        </div>
        <div className={s.containerDescription}>
          <h1 className={s.titleDes}>
            {data.title} <span>{data.country}</span>
          </h1>
          <ul className={s.productDetails}>
            <li className={s.productInfoItem}>{data.category}, деколь, метал</li>
            <li className={s.productInfoItem}>Висота 8 см (10,5 см з кришкою) </li>
            <li className={s.productInfoItem}>Діаметр 6 см</li>
            <li className={s.productInfoItem}>У відмінному стані! Оригінальна упаковка</li>
          </ul>
          <ul className={s.productInfo}>
            <li>
              Egg coddler від Royal Worcester - це традиційний британський
              предмет кухонного начиння, розроблений для зручного та вишуканого
              приготування яєць у водяній бані. Цей стиль посуду став популярним
              у 19 столітті і продовжує використовуватись досі. Egg coddler від
              Royal Worcester є не тільки корисним кухонним предметом та
              елегантним елементом сервірування столу, але й предметом
              колекціонування завдяки своїй якості та художній цінності.
            </li>
            <li>
              Наші товари є вінтажними, з історією та попереднім використанням.
              Можливі ознаки старіння, що характерні для класичного вінтажного
              стилю. Тим не менш, усі предмети залишаються в гарному стані та
              готовими до використання. Ми ретельно вказуємо стан кожного
              предмета в описі. Просимо вас уважно вивчити фотографії товарів,
              оскільки вони є важливою частиною опису та доповнюють його
            </li>
            <li>
              Рекомендую ознайомитися з іншими нашими товарами, щоб зменшити
              витрати на доставку.
            </li>
            <li>
              Якщо у вас виникли запитання, не соромтеся звертатися до нас. Ми
              завжди готові допомогти!
            </li>
          </ul>
        </div>
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
