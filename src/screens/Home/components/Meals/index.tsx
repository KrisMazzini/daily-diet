import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Alert, SectionList } from 'react-native'
import dayjs from 'dayjs'

import { Container, Title } from './styles'

import { Loading } from '@components/Loading'
import { Meal } from './Meal'
import { EmptyList } from './EmptyList'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getAllMealsSeparatedByDate } from '@storage/meal/getAllMealsSeparatedByDate'

interface MealSectionType {
  title: Date
  data: MealStorageDTO[]
}

export function Meals() {
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState<MealSectionType[]>([])

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        setIsLoading(true)

        try {
          const data = await getAllMealsSeparatedByDate()
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

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Meal {...item} />}
          renderSectionHeader={({ section }) => (
            <Title isFirstSection={section.title === meals[0].title}>
              {dayjs(section.title).format('DD.MM.YYYY')}
            </Title>
          )}
          ListEmptyComponent={() => <EmptyList />}
          contentContainerStyle={
            meals.length === 0 ? { flex: 1 } : { paddingBottom: 64 }
          }
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  )
}
