import { addDays, differenceInDays, format } from 'date-fns'

export const getDateRange = (startDate, endDate) => {
  const days = differenceInDays(endDate, startDate)

  return [...Array(days + 1).keys()].map((i) => format(addDays(startDate, i), 'MM/dd/yyyy'))
}