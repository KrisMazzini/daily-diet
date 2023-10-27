import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import {
  ButtonSizeType,
  ButtonStyleType,
  Container,
  Icon,
  Title,
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonStyleType
  size?: ButtonSizeType
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function Button({
  type = 'PRIMARY',
  size = 'FILL',
  title,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Container type={type} size={size} {...props}>
      {icon && <Icon type={type} name={icon} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
