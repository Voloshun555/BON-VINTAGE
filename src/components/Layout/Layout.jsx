import { Heder } from "@/components/Heder/Heder.jsx"
import { Hero } from "@/components/Hero/Hero.jsx"

import s from "./Layout.module.scss"


export const Layout = () => {

    return (
      <div className={s.container}>
        <Heder/>
        <main>
          <Hero/>
        </main>
      </div>
    )
}