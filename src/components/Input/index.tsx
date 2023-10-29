import { TextInputProps } from 'react-native'

import { Container, Error, Label, TextInput } from './styles'

interface InputProps extends TextInputProps {
  label: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput hasError={!!error} {...props} />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
