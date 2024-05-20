import React from 'react'
import {HgraphContextValue} from '../types'

export const HgraphContext = React.createContext<HgraphContextValue | null>(
  null
)
