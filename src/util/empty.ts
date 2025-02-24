export function isEmpty(value: unknown): value is undefined | null {
  if (value === undefined) return true
  if (value === null) return true
  if (typeof value === 'boolean') return false
  if (typeof value === 'string') return value.trim().length === 0
  if (typeof value === 'object') {
    if (Object.keys(value).length === 0) return true
    return JSON.stringify(value) === '{}'
  }
  if (typeof value === 'symbol') return false
  if (typeof value === 'function') return false
  if (typeof value === 'bigint') return false
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return true
    if (Number.isInteger(value)) return false
    return value === 0
  }
  if (Array.isArray(value)) return value.length === 0
  return false
}
