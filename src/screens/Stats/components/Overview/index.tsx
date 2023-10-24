import { Container, Label, Percentage } from './styles'

import { Header } from '@components/Header'

export function Overview() {
  return (
    <Container>
      <Header type="POSITIVE" spacing="NONE" />

      <Percentage>90,86%</Percentage>
      <Label>das refeições dentro da dieta</Label>
    </Container>
  )
}
