import { useNavigation } from '@react-navigation/native'

import {
  ColorIndicatorStyleType,
  Container,
  BackIcon,
  BackButton,
  Title,
  SpacingStyleType,
} from './styles'

interface HeaderProps {
  type?: ColorIndicatorStyleType
  spacing?: SpacingStyleType
  title?: string
}

export function Header({
  type = 'DEFAULT',
  spacing = 'DEFAULT',
  title,
}: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container spacing={spacing}>
      <BackButton onPress={handleGoBack}>
        <BackIcon type={type} />
      </BackButton>

      {title && <Title type={type}>{title}</Title>}
    </Container>
  )
}
