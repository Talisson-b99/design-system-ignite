import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check width="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
