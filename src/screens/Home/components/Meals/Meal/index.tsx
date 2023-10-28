import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import { Container, Name, Divider, Indicator, Time } from './styles'

export interface MealType {
  id: string
  name: string
  description: string
  datetime: string
  withinDiet: boolean
}

export function Meal({
  id,
  name,
  description,
  datetime,
  withinDiet,
}: MealType) {
  const navigation = useNavigation()

  function handleMealDetails() {
    navigation.navigate('info', {
      id,
      name,
      description,
      datetime,
      withinDiet,
    })
  }

  return (
    <Container onPress={handleMealDetails}>
      <Time>{dayjs(datetime).format('HH:mm')}</Time>

      <Divider />

      <Name>{name}</Name>

      <Indicator type={withinDiet ? 'POSITIVE' : 'NEGATIVE'} />
    </Container>
  )
}
