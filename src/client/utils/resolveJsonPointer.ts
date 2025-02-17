// https://datatracker.ietf.org/doc/html/rfc6901
export default function resolveJsonPointer(instance: any, pointer: string) {
  let result = instance
  const [, ...tokens] = pointer.split('/')
  const parts = tokens.map((token) =>
    token.replace(/~1/g, '/').replace(/~0/g, '~')
  )
  for (const part of parts) {
    result = result && result[part]
  }
  return result
}
