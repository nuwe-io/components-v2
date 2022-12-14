/**
 * @name scrollToRef
 * @param {*} route - The route to scroll to
 * @returns
 */
export const scrollToRef = (route: any) => {
  if (route?.ref?.current?.scrollIntoView)
    route.ref.current.scrollIntoView({ behavior: 'auto', block: 'center' })
}
