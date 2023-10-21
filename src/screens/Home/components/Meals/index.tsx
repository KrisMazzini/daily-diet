import { SectionList } from 'react-native'

import { Container, Title } from './styles'
import { Meal, MealType } from './Meal'

import { formatDate } from '@utils/formatter'
import { EmptyList } from './EmptyList'

interface MealSectionType {
  title: Date
  data: MealType[]
}

export function Meals() {
  const meals: MealSectionType[] = [
    {
      title: new Date('2023-10-19T03:00:00.000Z'),
      data: [
        {
          id: '1',
          time: '08:00',
          description: 'Leite',
          withinDiet: true,
        },
        {
          id: '2',
          time: '12:00',
          description: 'Arroz, feijão e carne',
          withinDiet: true,
        },
        {
          id: '3',
          time: '17:00',
          description: 'Pão de queijo',
          withinDiet: true,
        },
        {
          id: '4',
          time: '21:00',
          description: 'Hamburguer e batata',
          withinDiet: false,
        },
      ],
    },
    {
      title: new Date('2023-10-18T03:00:00.000Z'),
      data: [
        {
          id: '5',
          time: '08:00',
          description: 'Leite',
          withinDiet: true,
        },
        {
          id: '6',
          time: '12:00',
          description: 'Arroz, ovo e frango',
          withinDiet: true,
        },
        {
          id: '7',
          time: '17:30',
          description: 'Pizza',
          withinDiet: false,
        },
      ],
    },
    {
      title: new Date('2023-10-17T03:00:00.000Z'),
      data: [
        {
          id: '8',
          time: '08:00',
          description: 'Leite',
          withinDiet: true,
        },
        {
          id: '9',
          time: '12:00',
          description: 'Arroz, ovo e frango',
          withinDiet: true,
        },
        {
          id: '10',
          time: '17:30',
          description: 'Pizza',
          withinDiet: false,
        },
      ],
    },
  ]

  return (
    <Container>
      <SectionList
        sections={meals}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Meal {...item} />}
        renderSectionHeader={({ section }) => (
          <Title isFirstSection={section.title === meals[0].title}>
            {formatDate(section.title)}
          </Title>
        )}
        ListEmptyComponent={() => <EmptyList />}
        contentContainerStyle={
          meals.length === 0 ? { flex: 1 } : { paddingBottom: 64 }
        }
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
