import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import {
  ButtonSizeType,
  ButtonStyleType,
  Container,
  Icon,
  Title,
} from './styles'

import { Loading } from '@components/Loading'

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonStyleType
  size?: ButtonSizeType
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
  loading?: boolean
}

export function Button({
  type = 'PRIMARY',
  size = 'FILL',
  title,
  icon,
  loading,
  ...props
}: ButtonProps) {
  return (
    <Container type={type} size={size} {...props}>
      {loading ? (
        <Loading type="SECONDARY" />
      ) : (
        <>
          {icon && <Icon type={type} name={icon} />}
          <Title type={type}>{title}</Title>
        </>
      )}
    </Container>
  )
}
