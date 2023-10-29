import { useCallback, useState } from 'react'
import { Alert, Keyboard, Pressable } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import dayjs from 'dayjs'

import { Col, Container, Form, Row } from './styles'

import { Loading } from '@components/Loading'
import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Input } from '@components/Input'
import { DatePicker } from '@components/DatePicker'
import { TimePicker } from '@components/TimePicker'
import { Boolean } from '@components/Boolean'
import { Button } from '@components/Button'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getMealById } from '@storage/meal/getMealById'
import { editMealById } from '@storage/meal/editMealById'

import { AppError } from '@utils/AppError'
import { buildDatetime } from '@utils/build-datetime'

const editMealValidationSchema = z
  .object({
    name: z
      .string({ required_error: 'Campo obrigatório' })
      .transform((name) => name.trim())
      .refine((name) => name.length >= 3, {
        message: 'O nome deve ter no mínimo 3 caracteres',
      }),
    description: z
      .string({ required_error: 'Campo obrigatório' })
      .transform((description) => description.trim())
      .refine((description) => description.length >= 3, {
        message: 'A descrição deve ter no mínimo 3 caracteres',
      }),
    date: z.date({ required_error: 'Campo obrigatório' }).refine(
      (date) => {
        const isDateAfterToday = dayjs(date)
          .startOf('day')
          .isAfter(dayjs().startOf('day'))
        return !isDateAfterToday
      },
      {
        message: 'Não é possível cadastrar uma refeição em uma data futura',
      },
    ),
    time: z.date({ required_error: 'Campo obrigatório' }),
    withinDiet: z.boolean({
      required_error: 'Campo obrigatório',
    }),
  })
  .refine(
    (data) => {
      const isDateToday = dayjs(data.date)
        .startOf('day')
        .isSame(dayjs().startOf('day'))

      if (!isDateToday) {
        return true
      }

      const isTimeAfterNow = dayjs(buildDatetime(data.date, data.time)).isAfter(
        dayjs(),
      )

      return !isTimeAfterNow
    },
    {
      message: 'Não é possível cadastrar uma refeição em um horário futuro',
      path: ['time'],
    },
  )

type EditMealFormType = z.infer<typeof editMealValidationSchema>

interface RouteParams {
  id: string
}

export function EditMeal() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EditMealFormType>({
    resolver: zodResolver(editMealValidationSchema),
  })

  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as RouteParams

  async function handleSaveChanges({
    name,
    description,
    date,
    time,
    withinDiet,
  }: EditMealFormType) {
    try {
      const newMealData: MealStorageDTO = {
        id,
        name,
        description,
        datetime: buildDatetime(date, time),
        withinDiet,
      }

      await editMealById(newMealData)
      navigation.navigate('info', { id })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Falha ao editar refeição', error.message)
      } else {
        console.log(error)
        Alert.alert('Editar', 'Não foi possível editar a refeição')
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchMeal() {
        setIsLoading(true)

        try {
          const data = await getMealById(id)

          const formData: EditMealFormType = {
            name: data.name,
            description: data.description,
            date: data.datetime,
            time: data.datetime,
            withinDiet: data.withinDiet,
          }

          reset(formData)
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
    }, [id, navigation, reset]),
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container edges={['top', 'left', 'right']}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <Header title="Editar refeição" spacing="DEFAULT" />

        <Box>
          <Form>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  label="Nome"
                  value={field.value}
                  error={errors.name?.message}
                  onChangeText={field.onChange}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  label="Descrição"
                  multiline
                  value={field.value}
                  error={errors.description?.message}
                  onChangeText={field.onChange}
                />
              )}
            />

            <Row>
              <Col>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Data"
                      value={field.value}
                      error={errors.date?.message}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Col>

              <Col>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <TimePicker
                      label="Hora"
                      value={field.value}
                      error={errors.time?.message}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Col>
            </Row>

            <Controller
              name="withinDiet"
              control={control}
              render={({ field }) => (
                <Boolean
                  label="Está dentro da dieta?"
                  value={field.value}
                  error={errors.withinDiet?.message}
                  onChange={field.onChange}
                />
              )}
            />

            <Button
              title="Salvar alterações"
              style={{ marginTop: 'auto' }}
              onPress={handleSubmit(handleSaveChanges)}
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </Form>
        </Box>
      </Pressable>
    </Container>
  )
}
