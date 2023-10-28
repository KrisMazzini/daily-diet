import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'

import { Container, Label, Value, ValueWrapper } from './styles'
import { Modal } from '@components/Modal'

interface TimePickerProps {
  label: string
}

export function TimePicker({ label }: TimePickerProps) {
  const { COLORS } = useTheme()

  const [date, setDate] = useState<Date | undefined>()
  const [timePickerValue, setTimePickerValue] = useState<Date>(new Date())
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Container>
      <Label>{label}</Label>

      <ValueWrapper onPress={() => setIsModalVisible(true)}>
        <Value>{date && dayjs(date).format('HH:mm')}</Value>
      </ValueWrapper>

      <Modal
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onConfirm={() => setDate(timePickerValue)}
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
