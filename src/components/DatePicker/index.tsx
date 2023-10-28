import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'

import { Container, Label, Value, ValueWrapper } from './styles'
import { Modal } from '@components/Modal'

interface DatePickerProps {
  label: string
}

export function DatePicker({ label }: DatePickerProps) {
  const { COLORS } = useTheme()

  const [date, setDate] = useState<Date | undefined>()
  const [datePickerValue, setDatePickerValue] = useState<Date>(new Date())
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Container>
      <Label>{label}</Label>

      <ValueWrapper onPress={() => setIsModalVisible(true)}>
        <Value>{date && dayjs(date).format('DD/MM/YYYY')}</Value>
      </ValueWrapper>

      <Modal
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onConfirm={() => setDate(datePickerValue)}
      >
        <DateTimePicker
          mode="date"
          value={datePickerValue}
          onChange={(_, selectedDate) => {
            if (selectedDate) {
              setDatePickerValue(selectedDate)
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
