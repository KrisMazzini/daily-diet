import { Container, Description, Divider, Indicator, Time } from './styles'

export interface MealType {
  id: string
  time: string
  description: string
  withinDiet: boolean
}

export function Meal({ time, description, withinDiet }: MealType) {
  return (
    <Container>
      <Time>{time}</Time>

      <Divider />

      <Description>{description}</Description>

      <Indicator type={withinDiet ? 'POSITIVE' : 'NEGATIVE'} />
    </Container>
  )
}
