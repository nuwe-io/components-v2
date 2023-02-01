import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react'

import { useAuthStatus } from '../src'
import { withAuthprovider } from '../src/auth/application/withAuthprovider'

describe('<AuthStatusProvider />', () => {
  test('It should return user null and loading if not started yet', () => {
    const { result } = renderHook(() => useAuthStatus(), {
      wrapper: withAuthprovider
    }) as unknown as { result: { current: { user: unknown; status: string } } }

    expect(result.current.user).toBeNull()
    expect(result.current.status).toBe('loading')
  })

  test('It should return the user email after logging in', async () => {
    const {
      result: {
        current: { login }
      }
    } = renderHook(() => useAuthStatus(), {
      wrapper: withAuthprovider
    }) as any

    let userInfo: { email: string }

    await act(async () => {
      userInfo = await login({
        email: 'edgar@nuwe.io',
        password: '12345678'
      })
    })

    expect(userInfo.email).toBe('edgar@nuwe.io')
  })
})
