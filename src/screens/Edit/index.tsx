import { useNavigation, useRoute } from '@react-navigation/native'

import { Col, Container, Form, Row } from './styles'

import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Input } from '@components/Input'
import { DatePicker } from '@components/DatePicker'
import { TimePicker } from '@components/TimePicker'
import { Boolean } from '@components/Boolean'
import { Button } from '@components/Button'

interface RouteParams {
  id: string
  name: string
  description: string
  datetime: string
  withinDiet: boolean
}

export function EditMeal() {
  const navigation = useNavigation()
  const route = useRoute()

  const { id, name, description, datetime, withinDiet } =
    route.params as RouteParams

  function handleSaveChanges() {
    navigation.navigate('info', { id, name, description, datetime, withinDiet })
  }

  return (
    <Container edges={['top', 'left', 'right']}>
      <Header title="Editar refeição" spacing="DEFAULT" />

      <Box>
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" multiline />

          <Row>
            <Col>
              <DatePicker label="Data" />
            </Col>

            <Col>
              <TimePicker label="Hora" />
            </Col>
          </Row>

          <Boolean label="Está dentro da dieta?" />

          <Button
            title="Salvar alterações"
            style={{ marginTop: 'auto' }}
            onPress={handleSaveChanges}
          />
        </Form>
      </Box>
    </Container>
  )
}
