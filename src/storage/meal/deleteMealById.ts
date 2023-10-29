import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/config'

import { getAllMeals } from './getAllMeals'

export async function deleteMealById(id: string) {
  const storedMeals = await getAllMeals()
  const mealsWithoutDeletedOne = storedMeals.filter((meal) => meal.id !== id)

  const storage = JSON.stringify(mealsWithoutDeletedOne)

  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}
