import { MealStorageDTO } from './MealStorageDTO'
import { getAllMeals } from './getAllMeals'
import dayjs from 'dayjs'

interface MealSectionType {
  title: Date
  data: MealStorageDTO[]
}

export async function getAllMealsSeparatedByDate() {
  const meals = await getAllMeals()

  const mealsByDate = meals.reduce<MealSectionType[]>((acc, meal) => {
    const mealDate = dayjs(meal.datetime).startOf('day').toDate()

    const mealSection = acc.find(({ title }) => dayjs(title).isSame(mealDate))

    if (mealSection) {
      mealSection.data.push(meal)
    } else {
      acc.push({
        title: mealDate,
        data: [meal],
      })
    }

    return acc
  }, [])

  return mealsByDate
}
