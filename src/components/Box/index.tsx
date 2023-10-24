import { ReactNode } from 'react'

import { Container, Title } from './styles'

interface BoxProps {
  children: ReactNode
  title?: string
}

export function Box({ children, title }: BoxProps) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}
