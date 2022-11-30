import { useRouter as nextUseRouter } from 'next/router'

/** Wrapper to avoid error to avoid importing everywhere from nextjs */
export const useRouter = () => {
  const router = nextUseRouter()

  const push = (url, as, options) => router.push(url, as, options)

  const query = router?.query ?? {}

  const asPath = router?.asPath ?? ''

  const pathname = router?.pathname ?? ''

  return { push, query, asPath, pathname }
}
