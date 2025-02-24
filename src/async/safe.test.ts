import { describe, expect, it } from 'bun:test'
import { safe } from './safe'

describe('safe', () => {
  it('should return data if successfully resolves', async () => {
    const foo = async (): Promise<number> => 42
    const { data, error } = await safe(foo())
    expect(data).toBe(42)
    expect(error).toBeUndefined()
  })

  it('should return error if successfully rejects', async () => {
    const foo = async (): Promise<number> => {
      throw new Error('foo')
    }
    const { data, error } = await safe(foo())
    expect(data).toBeUndefined()
    expect(error).toBeInstanceOf(Error)
    expect(error?.message).toBe('foo')
  })
})
