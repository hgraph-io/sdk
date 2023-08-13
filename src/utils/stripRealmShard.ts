export default function stripRealmShard(accountId: string) {
  return accountId.split('.')[-1]
}
