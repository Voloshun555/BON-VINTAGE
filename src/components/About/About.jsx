import { Title } from "../Title/Title";
import s from "./About.module.scss";
export const About = () => {
  return (
    <>
      <section>
        <Title />
      </section>
      <section className={s.ourMission}>
        <div className={s.containerMission}>
          <ul className={s.listMission}>
            <li className={s.elemMission}>
              <div className={s.iconMission}>Тут буде картинка</div>
            </li>
            <li className={s.elemMission}>
              <h2 className={s.title}>our mission</h2>
              <p className={s.textMission}>
                Наша місія – приносити у ваш дім натхнення наповнити ваш простір
                історією, зберігати історію та ділитися її красою з вами
              </p>
            </li>
            <li className={s.elemMission}>
              <h2 className={s.title}>our goal</h2>
              <p className={s.textMission}>
                Наша мета – додати вашому простору індивідуальності через
                історичні речі. Допомогти вам знайти щось особливе, що змінить
                ваш дім.
              </p>
            </li>
            <li className={s.elemMission}>
              <div className={s.iconMission}>Тут буде картинка</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
