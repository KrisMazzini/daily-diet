import { Col, Container, Form, Row } from './styles'

import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Input } from '@components/Input'
import { DatePicker } from '@components/DatePicker'
import { TimePicker } from '@components/TimePicker'
import { Boolean } from '@components/Boolean'
import { Button } from '@components/Button'

export function NewMeal() {
  return (
    <Container edges={['top', 'left', 'right']}>
      <Header title="Nova refeição" spacing="DEFAULT" />

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

          <Button title="Cadastrar refeição" style={{ marginTop: 'auto' }} />
        </Form>
      </Box>
    </Container>
  )
}
