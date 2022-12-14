/**
 * @name scrollToRef
 * @param {*} route - The route to scroll to
 * @returns
 */
export const scrollToRef = (route: any) => {
  route.ref.current.scrollIntoView({ behavior: 'auto', block: 'center' })
}
