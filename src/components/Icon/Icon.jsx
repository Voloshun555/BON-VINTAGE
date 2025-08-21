/* eslint-disable react/prop-types */
import iconSvg from '@/assets/svg/sprite.svg'

export const Icon = ({id, className}) => {
  return (
    <svg className={className}>
       <use href={`${iconSvg}#${id}`}/>
    </svg>
  )
}
