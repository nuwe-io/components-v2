export const createdAt = (date: number) => {
  const now = new Date()
  const toCompare = new Date(date)
  const diffMs = Math.abs(now.getTime() - toCompare.getTime()) // milliseconds
  const diffDays = Math.abs(Math.floor(diffMs / 86400000)) - 1 // days
  const diffHrs = Math.abs(Math.floor((diffMs % 86400000) / 3600000)) - 1 // hours
  const diffMins = Math.abs(Math.round(((diffMs % 86400000) % 3600000) / 60000)) // minutes
  if (diffDays > 0) return diffDays + 'd'
  else if (diffHrs > 0) return diffHrs + 'h'
  else return diffMins + 'm'
}
