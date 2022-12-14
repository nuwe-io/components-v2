import { filePreview } from '../../src/functions'

describe('filePreview', () => {
  it('should return a base64 string', async () => {
    const file = new File([''], 'test.png', { type: 'image/png' })
    const result = await filePreview(file)
    expect(result).toEqual('data:image/png;base64,')
  })
})
