// import { CardSlide } from "../CardSlide/CardSlide";
import { Title } from "../Title/Title";
import s from "./About.module.scss";
export const About = () => {
  return (
    <>
      <section>
        <Title />
      </section>
      <section className={s.container}>
        <div className={s.containerMission}>
          <ul className={s.listMission}>
            <li className={s.elemMission}>
              <div className={s.iconMission}>Тут буде картинка</div>
            </li>
            <li className={s.elemMission}>
              <h2 className={s.title}>our mission</h2>
              <p className={`${s.text} ${s.textMission}`}>
                Наша місія – приносити у ваш дім натхнення наповнити ваш простір
                історією, зберігати історію та ділитися її красою з вами
              </p>
            </li>
            <li className={s.elemMission}>
              <h2 className={s.title}>our goal</h2>
              <p className={`${s.text} ${s.textMission}`}>
                Наша мета – додати вашому простору індивідуальності через
                історичні речі. Допомогти вам знайти щось особливе, що змінить
                ваш дім.
              </p>
            </li>
            <li className={s.elemMission}>
              <div className={s.iconMission}>Тут буде картинка</div>
            </li>
          </ul>
          <div className={s.containerHistory}>
            <div className={s.wrapperHistory}>
              <h2 className={s.title}>our story</h2>
              <p className={s.text}>
                Моя історія любові до прекрасних старовинних речей розпочалася у
                2011 році. Тоді я зовсім випадково опинилася на барахолці у моїй
                рідній Одесі. Наша барахолка знайшла своє розташування біля
                відомого Староконного ринку. Одесити з любов’ю називають її
                «Староконка». Для любителів старих речей і «просто поговорити»
                Староконка завжди була невід’ємною частиною життя, без неї
                ніяк). Моєю першою покупкою стала приголомшливої краси чайна
                трійка від відомої німецької мануфактури Weimar. Порцеляна
                високої якості, кобальт, позолота... Так визначилася тема для
                майбутньої колекції. Згодом географія покупок значно
                розширилася. Багато предметів було куплено на європейських
                блошиних ринках та в антикварних магазинах, на ярмарках у
                середньовічних замках та просто з рук. Нині основним джерелом
                скарбів та натхнення стали барахолки Німеччини.
              </p>
              <p className={s.textStoryAllYear}>
                За всі роки мого захоплення накопичилася величезна кількість
                дуже цікавих речей, а разом із ними знання та досвід.
              </p>
            </div>
            <div className={s.iconHistory}></div>
          </div>
          <div className={s.containerDelivery}>
            <div className={s.wrapperDelivery}>
              <h2 className={s.title}>delivery and payment</h2>
              <ul className={s.listDelivery}>
                <li className={s.elemDelivery}>
                  <h3 className={s.subtitle}>доставка</h3>
                  <p className={` ${s.text} ${s.textDelivery}`}>
                    Наша мета – додати вашому простору індивідуальності через
                    історичні речі. Допомогти вам знайти щось особливе, що
                    змінить ваш дім.
                  </p>
                </li>
                <li className={s.elemDelivery}>
                  <h3 className={s.subtitle}>повернення та обмін</h3>
                  <p className={` ${s.text} ${s.textDelivery}`}>
                    Наша мета – додати вашому простору індивідуальності через
                    історичні речі. Допомогти вам знайти щось особливе, що
                    змінить ваш дім.
                  </p>
                </li>
                <li className={s.elemDelivery}>
                  <h3 className={s.subtitle}>способи оплати</h3>
                  <p className={` ${s.text} ${s.textDelivery}`}>
                    Наша мета – додати вашому простору індивідуальності через
                    історичні речі. Допомогти вам знайти щось особливе, що
                    змінить ваш дім.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.containerReviews}>
            <div className={s.wrapperReviews}>
              <h2 className={s.title}>reviews</h2>
              <ul className={s.listReviews}>
                <li className={s.elemReview}></li>
                <li className={s.elemReview}></li>
                <li className={s.elemReview}></li>
              </ul>
            </div>
          </div>
          <div className={s.containerContacts}>
            <div className={s.wrapperContacts}>
              <h2 className={s.title}>contacts</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={`${s.container} ${s.possitionDeliveryAndPayment}`}
        id="delivery"
      >
        <div className={s.containerDeliveryAndPayment}>
          <div className={s.wrapperDeliveryAndPayment}>
            <h2 className={s.title}>delivery and payment</h2>
            <h3 className={s.titleDescription}>Доставка та способи оплати</h3>
            <p className={s.text}>
              С другой стороны постоянное информационно-пропагандистское
              обеспечение нашей деятельности представляет собой интересный
              эксперимент проверки систем массового участия. Разнообразный и
              богатый опыт рамки и место обучения кадров способствует подготовке
              и реализации направлений прогрессивного развития. <br />{" "}
              Повседневная практика показывает, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              играет важную роль в формировании системы обучения кадров,
              соответствует насущным потребностям. <br /> С другой стороны
              постоянное информационно-пропагандистское обеспечение нашей
              деятельности представляет собой интересный эксперимент проверки
              систем массового участия. Разнообразный и богатый опыт рамки и
              место обучения кадров способствует подготовке и реализации
              направлений прогрессивного развития.
            </p>
            <h3 className={s.titleDescription}>Повернення та обмін</h3>
            <p className={s.text}>
              С другой стороны постоянное информационно-пропагандистское
              обеспечение нашей деятельности представляет собой интересный
              эксперимент проверки систем массового участия. Разнообразный и
              богатый опыт рамки и место обучения кадров способствует подготовке
              и реализации направлений прогрессивного развития.
            </p>
          </div>
        </div>
        <div className={s.containerReviews}>
          <h3 className={s.titleDescription}>Reviews</h3>
          <ul className={s.listReviews}>
            <li className={s.itemReviews}>
              <p className={s.textReviews}>Hello</p>
            </li>
            <li className={s.itemReviews}>
              <p className={s.textReviews}>Hello</p>
            </li>
            <li className={s.itemReviews}>
              <p className={s.textReviews}>Hello</p>
            </li>
          </ul>
        </div>
      </section>  */}

      {/* <CardSlide /> */}
    </>
  );
};
