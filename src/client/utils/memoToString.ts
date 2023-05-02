export default function memoToString(string: string) {
  if (!string) return ''
  return Buffer.from(string, 'base64').toString('ascii')
}
