import { Card } from "@/components/Catalog/Card/Card.jsx";

import s from "./CardList.module.scss"

export const CardList = () => {
  return (
    <section className={s.container}>
      <ul className={s.containerCards}>
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
      </ul>
    </section>
  );
};
