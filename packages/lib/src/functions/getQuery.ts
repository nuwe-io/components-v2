export const getQuery = (key: string) => {
  const vars = []
  if (typeof window !== 'undefined') {
    const hashes = window.location?.href?.slice(window.location.href.indexOf('?') + 1).split('&')

    if (!hashes) {
      return null
    }

    for (const hash of hashes) {
      const splittedHash = hash.split('=')
      vars.push(splittedHash[0])
      vars[splittedHash[0]] = splittedHash[1]
    }

    return vars[key]
  } else {
    return null
  }
}
