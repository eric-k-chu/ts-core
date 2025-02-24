import { describe, expect, test } from 'bun:test'
import { isEmpty } from './empty'

type TestCase = {
  input: unknown
  expected: boolean
}

describe('empty', () => {
  const cases: TestCase[] = [
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: '', expected: true },
    { input: ' ', expected: true },
    { input: 'foo', expected: false },
    { input: {}, expected: true },
    { input: { foo: 'bar' }, expected: false },
    { input: Symbol('foo'), expected: false },
    { input: (): void => {}, expected: false },
    { input: 0n, expected: false },
    { input: 42, expected: false },
    { input: Number.NaN, expected: true },
    { input: Number.POSITIVE_INFINITY, expected: false },
    { input: [], expected: true },
    { input: [1, 2, 3], expected: false },
  ]

  test.each(cases)('%p', ({ input, expected }) => {
    expect(isEmpty(input)).toBe(expected)
  })
})
