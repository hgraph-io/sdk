import React from 'react'
import invariant from 'ts-invariant'
import {Client, HgraphProviderProps} from '../types'
import {HgraphContext} from './HgraphContext'

export const HgraphProvider: React.FC<HgraphProviderProps<Client>> = ({
  client,
  children,
}) => {
  const contextValue = React.useMemo(() => {
    return {client}
  }, [client])

  invariant(
    contextValue.client,
    'HgraphProvider was not passed a client instance. Make ' +
      'sure you pass in your client via the "client" prop.'
  )

  return (
    <HgraphContext.Provider value={contextValue}>
      {children}
    </HgraphContext.Provider>
  )
}
