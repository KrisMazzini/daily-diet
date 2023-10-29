import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/config'

import { MealStorageDTO } from './MealStorageDTO'
import { getAllMeals } from './getAllMeals'

import { AppError } from '@utils/AppError'

export async function editMealById(newMealData: MealStorageDTO) {
  const storedMeals = await getAllMeals()
  const mealIndex = storedMeals.findIndex(
    (storedMeal) => storedMeal.id === newMealData.id,
  )

  if (mealIndex === -1) {
    throw new AppError('A refeição desejada não está registrada.')
  }

  storedMeals[mealIndex] = newMealData

  const storage = JSON.stringify(storedMeals)

  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}
