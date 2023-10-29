import 'react-native-get-random-values'
import { Alert, Keyboard, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'

import { Col, Container, Form, Row } from './styles'

import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Input } from '@components/Input'
import { DatePicker } from '@components/DatePicker'
import { TimePicker } from '@components/TimePicker'
import { Boolean } from '@components/Boolean'
import { Button } from '@components/Button'

import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { registerMeal } from '@storage/meal/registerMeal'

import { buildDatetime } from '@utils/build-datetime'

const newMealValidationSchema = z
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

type NewMealFormType = z.infer<typeof newMealValidationSchema>

export function NewMeal() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewMealFormType>({
    resolver: zodResolver(newMealValidationSchema),
  })

  async function handleRegisterMeal({
    name,
    description,
    date,
    time,
    withinDiet,
  }: NewMealFormType) {
    try {
      const newMeal: MealStorageDTO = {
        id: uuid(),
        name,
        description,
        datetime: buildDatetime(date, time),
        withinDiet,
      }

      await registerMeal(newMeal)

      navigation.navigate('feedback', { withinDiet })
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao cadastrar refeição')
    }
  }

  return (
    <Container edges={['top', 'left', 'right']}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <Header title="Nova refeição" spacing="DEFAULT" />

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
              title="Cadastrar refeição"
              style={{ marginTop: 'auto' }}
              onPress={handleSubmit(handleRegisterMeal)}
              loading={isSubmitting}
              disabled={isSubmitting}
            />
          </Form>
        </Box>
      </Pressable>
    </Container>
  )
}
