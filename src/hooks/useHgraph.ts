import {useContext} from 'react'
import invariant from 'ts-invariant'
import {HgraphContext} from '../context/HgraphContext'
import {Client} from '../types'

export function useHgraph(): Client {
  const context = useContext(HgraphContext)

  invariant(
    context && context.client,
    'No Hgraph Client instance can be found. Please ensure that you ' +
      'have called `HgraphProvider` higher up in your tree.'
  )

  return context!.client
}
