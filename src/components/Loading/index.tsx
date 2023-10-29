import { Container, Indicator, LoadingStyleType } from './styles'

interface LoadingProps {
  type?: LoadingStyleType
}

export function Loading({ type = 'PRIMARY' }: LoadingProps) {
  return (
    <Container type={type}>
      <Indicator type={type} />
    </Container>
  )
}
