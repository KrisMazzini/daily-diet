import {
  ColorStyleType,
  Container,
  DirectionStyleType,
  Label,
  Value,
} from './styles'

interface CardProps {
  color?: ColorStyleType
  direction?: DirectionStyleType
  value: number
  label: string
}

export function Card({
  color = 'DEFAULT',
  direction = 'COLUMN',
  value,
  label,
}: CardProps) {
  return (
    <Container color={color} direction={direction}>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Container>
  )
}
