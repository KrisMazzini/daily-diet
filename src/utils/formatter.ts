const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function formatDate(date: Date) {
  return dateFormatter.format(date).replaceAll('/', '.')
}
