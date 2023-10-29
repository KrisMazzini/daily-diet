import { AppError } from '@utils/AppError'

import { getAllMeals } from './getAllMeals'

export async function getMealById(id: string) {
  const storedMeals = await getAllMeals()
  const meal = storedMeals.find((meal) => meal.id === id)

  if (!meal) {
    throw new AppError('A refeição desejada não está registrada.')
  }

  return meal
}
