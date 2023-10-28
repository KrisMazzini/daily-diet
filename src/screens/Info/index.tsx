import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
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
  Subtitle,
  Title,
} from './styles'

import { Header } from '@components/Header'
import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'

interface RouteParams {
  id: string
  name: string
  description: string
  datetime: string
  withinDiet: boolean
}

export function Info() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const route = useRoute()

  const { name, description, datetime, withinDiet } =
    route.params as RouteParams

  return (
    <Container
      type={withinDiet ? 'POSITIVE' : 'NEGATIVE'}
      edges={['top', 'left', 'right']}
    >
      <Header title="Refeição" spacing="DEFAULT" />

      <Box>
        <Title>{name}</Title>
        <Description>{description}</Description>

        <Subtitle>Data e hora</Subtitle>
        <Datetime>{dayjs(datetime).format('DD/MM/YYYY [às] HH:mm')}</Datetime>

        <Badge>
          <BadgeIndicator type={withinDiet ? 'POSITIVE' : 'NEGATIVE'} />
          <BadgeText>
            {withinDiet ? 'dentro da dieta' : 'fora da dieta'}
          </BadgeText>
        </Badge>

        <Actions>
          <Button title="Editar refeição" icon="edit" />

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
