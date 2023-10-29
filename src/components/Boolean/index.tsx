import { useState } from 'react'
import { Keyboard } from 'react-native'

import {
  Container,
  Error,
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
  value?: boolean
  error?: string
  onChange?: (value: boolean) => void
}

export function Boolean({
  label,
  value: valueParam,
  error,
  onChange,
}: BooleanProps) {
  const [value, setValue] = useState<boolean | undefined>(valueParam)

  function handleSetValue(newValue: boolean) {
    Keyboard.dismiss()
    setValue(newValue)
    onChange?.(newValue)
  }

  return (
    <Container>
      <Label>{label}</Label>

      <Options>
        <Yes
          selected={value === true}
          disabled={value === true}
          onPress={() => handleSetValue(true)}
        >
          <YesIndicator />
          <OptionTitle>Sim</OptionTitle>
        </Yes>

        <No
          selected={value === false}
          disabled={value === false}
          onPress={() => handleSetValue(false)}
        >
          <NoIndicator />
          <OptionTitle>Não</OptionTitle>
        </No>
      </Options>

      {error && <Error>{error}</Error>}
    </Container>
  )
}
