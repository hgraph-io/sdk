export default function stripShardRealm(accountId: string) {
  return accountId.split('.')[2]
}
