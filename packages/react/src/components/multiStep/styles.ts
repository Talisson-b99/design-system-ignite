import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepContaineiner = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  background: '$gray600',

  variants: {
    active: {
      true: {
        background: '$gray100',
      },
    },
  },
})
