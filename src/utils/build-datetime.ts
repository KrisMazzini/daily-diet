import dayjs from 'dayjs'

export function buildDatetime(date: Date, time: Date) {
  const dateDayjs = dayjs(date)
  const timeDayjs = dayjs(time)

  return dateDayjs
    .set('hour', timeDayjs.hour())
    .set('minute', timeDayjs.minute())
    .set('second', 0)
    .set('millisecond', 0)
    .toDate()
}
