export const uniqueObjArr = (arr: object[], uniqueKey: string) => {
  const uniqueIds = new Set()

  return arr.filter((element) => {
    const isDuplicate = uniqueIds.has(element[uniqueKey])

    uniqueIds.add(element[uniqueKey])

    if (!isDuplicate) return true

    return false
  })
}
