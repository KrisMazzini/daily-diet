import { ReactNode, useState } from 'react'
import { Modal as NativeModal, TouchableOpacity, View } from 'react-native'

import { Action, Actions, Container, Content } from './styles'

import { Button } from '@components/Button'

interface ModalProps {
  trigger: ReactNode
  content: ReactNode
  cancelButtonTitle?: string
  confirmButtonTitle?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export function Modal({
  trigger,
  content,
  cancelButtonTitle = 'Cancelar',
  confirmButtonTitle = 'Confirmar',
  onCancel,
  onConfirm,
}: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenModal() {
    setIsModalVisible(true)
  }

  function handleCancel() {
    if (onCancel) {
      onCancel()
    }

    setIsModalVisible(false)
  }

  function handleConfirm() {
    if (onConfirm) {
      onConfirm()
    }

    setIsModalVisible(false)
  }

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal}>{trigger}</TouchableOpacity>

      <NativeModal transparent visible={isModalVisible}>
        <Container>
          <Content>
            {content}

            <Actions>
              <Action>
                <Button
                  title={cancelButtonTitle}
                  type="SECONDARY"
                  onPress={handleCancel}
                />
              </Action>

              <Action>
                <Button title={confirmButtonTitle} onPress={handleConfirm} />
              </Action>
            </Actions>
          </Content>
        </Container>
      </NativeModal>
    </View>
  )
}
