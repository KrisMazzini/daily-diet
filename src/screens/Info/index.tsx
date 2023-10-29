import { Alert } from 'react-native'
import { useCallback, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import dayjs from 'dayjs'

import {
  Actions,
  Badge,
  BadgeIndicator,
  BadgeText,
  Container,
  Datetime,
  DeleteConfirmationMessage,
  Description,
  NotFound,
  NotFoundMessage,
  Subtitle,
  Title,
} from './styles'

import { Loading } from '@components/Loading'
import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getMealById } from '@storage/meal/getMealById'
import { deleteMealById } from '@storage/meal/deleteMealById'

import { AppError } from '@utils/AppError'

interface RouteParams {
  id: string
}

export function Info() {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [meal, setMeal] = useState<MealStorageDTO | undefined>()

  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as RouteParams

  function handleEditMeal() {
    navigation.navigate('edit', { id })
  }

  async function handleDeleteMeal() {
    try {
      await deleteMealById(id)
      handleGoBack()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao excluir refeição')
    }
  }

  function handleGoBack() {
    navigation.navigate('home')
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchMeal() {
        setIsLoading(true)

        try {
          const data = await getMealById(id)
          setMeal(data)
        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert('Falha ao obter refeição', error.message)
          } else {
            console.log(error)
            Alert.alert('Refeição', 'Não foi possível buscar a refeição')
          }

          navigation.navigate('home')
        } finally {
          setIsLoading(false)
        }
      }

      fetchMeal()
    }, [id, navigation]),
  )

  if (isLoading) {
    return <Loading />
  }

  if (!meal) {
    return (
      <NotFound>
        <NotFoundMessage>
          Não foi possível carregar as informações da refeição.
        </NotFoundMessage>

        <Button
          title="Voltar para a página inicial"
          size="HUG"
          onPress={handleGoBack}
        />
      </NotFound>
    )
  }

  return (
    <Container
      type={meal.withinDiet ? 'POSITIVE' : 'NEGATIVE'}
      edges={['top', 'left', 'right']}
    >
      <Header title="Refeição" spacing="DEFAULT" />

      <Box>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>

        <Subtitle>Data e hora</Subtitle>
        <Datetime>
          {dayjs(meal.datetime).format('DD/MM/YYYY [às] HH:mm')}
        </Datetime>

        <Badge>
          <BadgeIndicator type={meal.withinDiet ? 'POSITIVE' : 'NEGATIVE'} />
          <BadgeText>
            {meal.withinDiet ? 'dentro da dieta' : 'fora da dieta'}
          </BadgeText>
        </Badge>

        <Actions>
          <Button
            title="Editar refeição"
            icon="edit"
            onPress={handleEditMeal}
          />

          <Button
            type="SECONDARY"
            title="Excluir refeição"
            icon="delete"
            onPress={() => setIsModalVisible(true)}
          />

          <Modal
            visible={isModalVisible}
            onVisibleChange={setIsModalVisible}
            confirmButtonTitle="Sim, excluir"
            onConfirm={handleDeleteMeal}
          >
            <DeleteConfirmationMessage>
              Deseja realmente excluir o registro da refeição?
            </DeleteConfirmationMessage>
          </Modal>
        </Actions>
      </Box>
    </Container>
  )
}
