import { CardGroup, Container, Data } from './styles'

import { Box } from '@components/Box'
import { Overview } from './components/Overview'
import { Card } from './components/Card'

export function Stats() {
  return (
    <Container colorIndicator="POSITIVE" edges={['top', 'left', 'right']}>
      <Overview />

      <Box title="Estatísticas gerais">
        <Data>
          <Card value={22} label="melhor sequência de pratos dentro da dieta" />
          <Card value={109} label="refeições registradas" />

          <CardGroup>
            <Card
              direction="ROW"
              color="POSITIVE"
              value={99}
              label="refeições dentro da dieta"
            />
            <Card
              direction="ROW"
              color="NEGATIVE"
              value={10}
              label="refeições fora da dieta"
            />
          </CardGroup>
        </Data>
      </Box>
    </Container>
  )
}
