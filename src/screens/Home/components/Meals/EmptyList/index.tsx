import { Container, Message } from './styles'

export function EmptyList() {
  return (
    <Container>
      <Message>Não há refeições cadastradas.</Message>
      <Message>Que tal começar agora a controlar sua dieta?</Message>
    </Container>
  )
}
