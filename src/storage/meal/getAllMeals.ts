import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/config'
import { MealStorageDTO } from './MealStorageDTO'

export async function getAllMeals() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

  const meals: MealStorageDTO[] = storage
    ? JSON.parse(storage).map((meal: MealStorageDTO) => ({
        ...meal,
        datetime: new Date(meal.datetime),
      }))
    : []

  const sortedMeals = meals.sort(
    (a, b) => b.datetime.getTime() - a.datetime.getTime(),
  )

  return sortedMeals
}
