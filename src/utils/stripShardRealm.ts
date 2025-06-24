export default function stripShardRealm(accountId: string): number {
  return parseInt(accountId.split('.')[2], 10)
}
