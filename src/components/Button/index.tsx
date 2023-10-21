import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import { ButtonStyleType, Container, Icon, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonStyleType
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function Button({
  type = 'PRIMARY',
  title,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Container type={type} {...props}>
      {icon && <Icon type={type} name={icon} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
