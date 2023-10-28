import { SectionList } from 'react-native'
import dayjs from 'dayjs'

import { Container, Title } from './styles'
import { Meal, MealType } from './Meal'

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
          name: 'Leite',
          description: 'Um copo de leite',
          datetime: '2023-10-19T11:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '2',
          name: 'Almoço',
          description: 'Arroz, feijão e carne',
          datetime: '2023-10-19T15:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '3',
          name: 'Café da tarde',
          description: 'Pão de queijo',
          datetime: '2023-10-19T20:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '4',
          name: 'Hamburguer e batata',
          description:
            'Hamburguer artesanal com queijo e uma porção de batata frita',
          datetime: '2023-10-20T00:00:00.000Z',
          withinDiet: false,
        },
      ],
    },
    {
      title: new Date('2023-10-18T03:00:00.000Z'),
      data: [
        {
          id: '5',
          name: 'Leite',
          description: 'Um copo de leite',
          datetime: '2023-10-18T11:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '6',
          name: 'Almoço',
          description: 'Arroz, ovo e frango',
          datetime: '2023-10-18T15:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '7',
          name: 'Pizza',
          description: 'Uma fatia de pizza de presunto e queijo da padaria',
          datetime: '2023-10-18T20:30:00.000Z',
          withinDiet: false,
        },
      ],
    },
    {
      title: new Date('2023-10-17T03:00:00.000Z'),
      data: [
        {
          id: '8',
          name: 'Leite',
          description: 'Um copo de leite',
          datetime: '2023-10-17T11:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '9',
          name: 'Almoço',
          description: 'Arroz, ovo e frango',
          datetime: '2023-10-17T15:00:00.000Z',
          withinDiet: true,
        },
        {
          id: '10',
          name: 'Pizza',
          description: 'Uma fatia de pizza de presunto e queijo da padaria',
          datetime: '2023-10-17T20:30:00.000Z',
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
    </Container>
  )
}
