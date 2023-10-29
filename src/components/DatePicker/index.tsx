import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { useTheme } from 'styled-components/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'

import { Container, Error, Label, Value, ValueWrapper } from './styles'
import { Modal } from '@components/Modal'

interface DatePickerProps {
  label: string
  value?: Date
  error?: string
  onChange?: (date: Date) => void
}

export function DatePicker({ label, value, error, onChange }: DatePickerProps) {
  const { COLORS } = useTheme()

  const [date, setDate] = useState<Date | undefined>(value)
  const [datePickerValue, setDatePickerValue] = useState<Date>(new Date())
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenModal() {
    Keyboard.dismiss()
    setIsModalVisible(true)
  }

  function handleDateChange() {
    setDate(datePickerValue)
    onChange?.(datePickerValue)
  }

  useEffect(() => {
    setDatePickerValue(value || new Date())
  }, [value])

  return (
    <Container>
      <Label>{label}</Label>

      <ValueWrapper hasError={!!error} onPress={handleOpenModal}>
        <Value>{date && dayjs(date).format('DD/MM/YYYY')}</Value>
      </ValueWrapper>

      {error && <Error>{error}</Error>}

      <Modal
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onConfirm={handleDateChange}
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
