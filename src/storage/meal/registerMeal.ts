import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/config'

import { MealStorageDTO } from './MealStorageDTO'
import { getAllMeals } from './getAllMeals'

export async function registerMeal(newMeal: MealStorageDTO) {
  const storedMeals = await getAllMeals()
  const storage = JSON.stringify([...storedMeals, newMeal])

  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}
