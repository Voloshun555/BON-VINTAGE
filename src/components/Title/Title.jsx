/* eslint-disable react/prop-types */

import React from "react";
import { Icon } from "../Icon/Icon";
import s from "./Title.module.scss";

export const Title = ({
  icon = true,
  title = "Antique & Vintage \nExclusive Collectibles",
  subtitle = "Предмети з історією, які наповнюють ваш дім \nунікальністю та чарівністю",
  className = ""
}) => {
  return (
    <div className={`${s.container} ${className}`}>
      {icon && (
        <Icon id={"icon-with-star"} className={s.iconWithStar} />
      )}
      <h1 className={s.title}>
        {title.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
      <p className={s.historyItems}>
        {subtitle.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};
