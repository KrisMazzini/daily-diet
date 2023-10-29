import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { useTheme } from 'styled-components/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'

import { Container, Error, Label, Value, ValueWrapper } from './styles'
import { Modal } from '@components/Modal'

interface TimePickerProps {
  label: string
  value?: Date
  error?: string
  onChange?: (date: Date) => void
}

export function TimePicker({ label, value, error, onChange }: TimePickerProps) {
  const { COLORS } = useTheme()

  const [time, setTime] = useState<Date | undefined>(value)
  const [timePickerValue, setTimePickerValue] = useState<Date>(new Date())
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenModal() {
    Keyboard.dismiss()
    setIsModalVisible(true)
  }

  function handleDateChange() {
    setTime(timePickerValue)
    onChange?.(timePickerValue)
  }

  useEffect(() => {
    setTimePickerValue(value || new Date())
  }, [value])

  return (
    <Container>
      <Label>{label}</Label>

      <ValueWrapper hasError={!!error} onPress={handleOpenModal}>
        <Value>{time && dayjs(time).format('HH:mm')}</Value>
      </ValueWrapper>

      {error && <Error>{error}</Error>}

      <Modal
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onConfirm={handleDateChange}
      >
        <DateTimePicker
          mode="time"
          value={timePickerValue}
          onChange={(_, selectedDate) => {
            if (selectedDate) {
              setTimePickerValue(selectedDate)
            }
          }}
          display="spinner"
          textColor={COLORS.GRAY_1}
          locale="pt-BR"
        />
      </Modal>
    </Container>
  )
}
