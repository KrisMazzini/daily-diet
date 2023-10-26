import { useState } from 'react'
import {
  Container,
  Label,
  No,
  NoIndicator,
  OptionTitle,
  Options,
  Yes,
  YesIndicator,
} from './styles'

interface BooleanProps {
  label: string
}

export function Boolean({ label }: BooleanProps) {
  const [value, setValue] = useState<boolean | undefined>()

  return (
    <Container>
      <Label>{label}</Label>

      <Options>
        <Yes
          selected={value === true}
          disabled={value === true}
          onPress={() => setValue(true)}
        >
          <YesIndicator />
          <OptionTitle>Sim</OptionTitle>
        </Yes>

        <No
          selected={value === false}
          disabled={value === false}
          onPress={() => setValue(false)}
        >
          <NoIndicator />
          <OptionTitle>Não</OptionTitle>
        </No>
      </Options>
    </Container>
  )
}
