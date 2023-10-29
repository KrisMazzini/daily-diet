import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import { Container, Name, Divider, Indicator, Time } from './styles'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

export function Meal({ id, name, datetime, withinDiet }: MealStorageDTO) {
  const navigation = useNavigation()

  function handleMealDetails() {
    navigation.navigate('info', { id })
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
