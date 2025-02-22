import { type ComponentPropsWithoutRef } from 'react'
interface Inputprops extends ComponentPropsWithoutRef<'input'> {
    label: string
    id: string
}

const Input = ({label,id,...props}:Inputprops) => {
  return (
    <p>

    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
    </p>
  )
}

export default Input