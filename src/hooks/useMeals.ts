import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getAllMeals } from '@storage/meal/getAllMeals'
import { Alert } from 'react-native'

export function useMeals() {
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const registeredMeals = meals.length
  const mealsWithinDiet = meals.filter((meal) => meal.withinDiet).length
  const mealsOutOfDiet = meals.filter((meal) => !meal.withinDiet).length

  const percentageOfMealsWithinDiet = calculateMealsWithinDiet()

  const currentStreak = calculateCurrentStreak()
  const bestStreak = calculateBestStreak()

  function calculateMealsWithinDiet() {
    if (!registeredMeals) return 100
    return (100 * mealsWithinDiet) / registeredMeals
  }

  function calculateCurrentStreak() {
    if (!registeredMeals) return 0

    const indexOfFirstMealOutOfDiet = meals
      .reverse()
      .findIndex((meal) => !meal.withinDiet)

    return indexOfFirstMealOutOfDiet === -1
      ? registeredMeals
      : indexOfFirstMealOutOfDiet
  }

  function calculateBestStreak() {
    const { bestStreak } = meals.reduce(
      ({ bestStreak, currentStreak }, meal) => {
        if (meal.withinDiet) {
          currentStreak++
        } else {
          currentStreak = 0
        }

        return {
          currentStreak,
          bestStreak: Math.max(currentStreak, bestStreak),
        }
      },
      {
        currentStreak: 0,
        bestStreak: 0,
      },
    )

    return bestStreak
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        setIsLoading(true)

        try {
          const data = await getAllMeals()
          setMeals(data)
        } catch (error) {
          console.log(error)
          Alert.alert('Erro ao buscar refeições')
        } finally {
          setIsLoading(false)
        }
      }

      fetchMeals()
    }, []),
  )

  return {
    isLoading,
    meals,
    registeredMeals,
    mealsWithinDiet,
    mealsOutOfDiet,
    percentageOfMealsWithinDiet,
    currentStreak,
    bestStreak,
  }
}
