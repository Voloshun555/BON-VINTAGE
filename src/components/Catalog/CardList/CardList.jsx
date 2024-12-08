import { Card } from "@/components/Catalog/Card/Card.jsx";

import s from "./CardList.module.scss"

export const CardList = () => {
  return (
    <section>
      <div className={s.containerCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
