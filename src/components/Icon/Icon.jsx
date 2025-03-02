/* eslint-disable react/prop-types */
// import iconSvg from '../../../public/assets/svg/sprite.svg'

export const Icon = ({id, style}) => {
  return (
    <svg className={style}>
       <use href={`/assets/svg/sprite.svg#${id}`} />
    </svg>
  )
}
