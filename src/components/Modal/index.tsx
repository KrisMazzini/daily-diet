import { ReactNode } from 'react'
import { Modal as NativeModal, View } from 'react-native'

import { Action, Actions, Container, Content } from './styles'

import { Button } from '@components/Button'

interface ModalProps {
  children: ReactNode
  cancelButtonTitle?: string
  confirmButtonTitle?: string
  visible?: boolean
  onVisibleChange: (visible: boolean) => void
  onCancel?: () => void
  onConfirm?: () => void
}

export function Modal({
  children,
  cancelButtonTitle = 'Cancelar',
  confirmButtonTitle = 'Confirmar',
  visible = false,
  onVisibleChange,
  onCancel,
  onConfirm,
}: ModalProps) {
  function handleCancel() {
    onCancel?.()

    onVisibleChange?.(false)
  }

  function handleConfirm() {
    onConfirm?.()

    onVisibleChange?.(false)
  }

  return (
    <View>
      <NativeModal transparent visible={visible}>
        <Container>
          <Content>
            {children}

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
