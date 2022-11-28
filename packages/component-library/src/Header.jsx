import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      {router.pathname === '/about' ? 'Home' : 'About'}
    </button>
  )
}
